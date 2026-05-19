<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Models\Category;
use App\Models\PropertyType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    // Homepage
    public function home()
    {
        $latestProperties = Property::with(['category', 'propertyType', 'images'])
            ->latest()
            ->take(6)
            ->get();
        
        $categories = Category::all();
        
        return Inertia::render('Home', [
            'latestProperties' => $latestProperties,
            'categories' => $categories,
        ]);
    }

    // Properties listing with filters
    public function properties(Request $request)
    {
        $query = Property::with(['category', 'propertyType', 'images']);

        // Filters
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        if ($request->filled('category')) {
            $query->where('category_id', $request->category);
        }

        if ($request->filled('property_type')) {
            $query->where('property_type_id', $request->property_type);
        }

        if ($request->filled('location')) {
            $query->where('location', 'like', "%{$request->location}%");
        }

        if ($request->filled('min_price')) {
            $query->where('price', '>=', $request->min_price);
        }

        if ($request->filled('max_price')) {
            $query->where('price', '<=', $request->max_price);
        }

        // Sorting
        if ($request->filled('sort')) {
            switch ($request->sort) {
                case 'name_asc':
                    $query->orderBy('title', 'asc');
                    break;
                case 'name_desc':
                    $query->orderBy('title', 'desc');
                    break;
                case 'price_asc':
                    $query->orderBy('price', 'asc');
                    break;
                case 'price_desc':
                    $query->orderBy('price', 'desc');
                    break;
                default:
                    $query->latest();
            }
        } else {
            $query->latest();
        }

        $properties = $query->paginate(12)->withQueryString();
        
        $categories = Category::all();
        $propertyTypes = PropertyType::all();

        return Inertia::render('Properties/Index', [
            'properties' => $properties,
            'categories' => $categories,
            'propertyTypes' => $propertyTypes,
            'filters' => $request->only(['search', 'category', 'property_type', 'location', 'min_price', 'max_price', 'sort']),
        ]);
    }

    // Property details page
    public function propertyDetails($id)
    {
        $property = Property::with(['category', 'propertyType', 'images', 'inquiries'])
            ->findOrFail($id);
        
        return Inertia::render('Properties/Show', [
            'property' => $property,
        ]);
    }

    // Category page
    public function category($id)
    {
        $category = Category::with(['properties.images', 'properties.propertyType'])
            ->findOrFail($id);
        
        return Inertia::render('Category', [
            'category' => $category,
        ]);
    }
    // All categories page
    public function categories()
    {
        $categories = Category::withCount('properties')->get();
        
        return Inertia::render('Categories', [
            'categories' => $categories,
        ]);
    }
}