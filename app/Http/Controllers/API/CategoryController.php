<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // GET /api/categories
    public function index()
    {
        $categories = Category::with('properties')->get();
        return response()->json($categories);
    }

    // GET /api/categories/{id}
    public function show($id)
    {
        $category = Category::with('properties')->find($id);
        
        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }
        
        return response()->json($category);
    }

    // GET /api/categories/{id}/properties
    public function properties($id)
    {
        $category = Category::find($id);
        
        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }
        
        $properties = $category->properties()->with(['category', 'propertyType', 'images'])->get();
        return response()->json($properties);
    }

    // POST /api/categories (admin only)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:categories|max:255',
        ]);

        $category = Category::create($validated);
        return response()->json($category, 201);
    }

    // PUT /api/categories/{id} (admin only)
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        
        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $validated = $request->validate([
            'name' => 'sometimes|string|unique:categories,name,' . $id . '|max:255',
        ]);

        $category->update($validated);
        return response()->json($category);
    }

    // DELETE /api/categories/{id} (admin only)
    public function destroy($id)
    {
        $category = Category::find($id);
        
        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $category->delete();
        return response()->json(['message' => 'Category deleted successfully']);
    }
}