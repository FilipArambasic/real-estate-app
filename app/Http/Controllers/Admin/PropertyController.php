<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Property;
use App\Models\Category;
use App\Models\PropertyType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PropertyController extends Controller
{
    public function index()
    {
        $properties = Property::with(['category', 'propertyType', 'images'])
            ->latest()
            ->paginate(10);
        
        return Inertia::render('Admin/Properties/Index', [
            'properties' => $properties,
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        $propertyTypes = PropertyType::all();
        
        return Inertia::render('Admin/Properties/Create', [
            'categories' => $categories,
            'propertyTypes' => $propertyTypes,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'category_id' => 'required|exists:categories,id',
            'property_type_id' => 'required|exists:property_types,id',
            'location' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'square_meters' => 'required|integer|min:1',
            'number_of_rooms' => 'required|integer|min:0',
        ]);

        Property::create($validated);

        return redirect()->route('admin.properties.index')
            ->with('success', 'Property created successfully');
    }

    public function edit($id)
    {
        $property = Property::findOrFail($id);
        $categories = Category::all();
        $propertyTypes = PropertyType::all();
        
        return Inertia::render('Admin/Properties/Edit', [
            'property' => $property,
            'categories' => $categories,
            'propertyTypes' => $propertyTypes,
        ]);
    }

    public function update(Request $request, $id)
    {
        $property = Property::findOrFail($id);
        
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'category_id' => 'required|exists:categories,id',
            'property_type_id' => 'required|exists:property_types,id',
            'location' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'square_meters' => 'required|integer|min:1',
            'number_of_rooms' => 'required|integer|min:0',
        ]);

        $property->update($validated);

        return redirect()->route('admin.properties.index')
            ->with('success', 'Property updated successfully');
    }

    public function destroy($id)
    {
        $property = Property::findOrFail($id);
        $property->delete();

        return redirect()->route('admin.properties.index')
            ->with('success', 'Property deleted successfully');
    }
}