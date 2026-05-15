<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\PropertyType;
use Illuminate\Http\Request;

class PropertyTypeController extends Controller
{
    // GET /api/property-types
    public function index()
    {
        $propertyTypes = PropertyType::with('properties')->get();
        return response()->json($propertyTypes);
    }

    // GET /api/property-types/{id}
    public function show($id)
    {
        $propertyType = PropertyType::with('properties')->find($id);
        
        if (!$propertyType) {
            return response()->json(['message' => 'Property type not found'], 404);
        }
        
        return response()->json($propertyType);
    }

    // POST /api/property-types (admin only)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:property_types|max:255',
        ]);

        $propertyType = PropertyType::create($validated);
        return response()->json($propertyType, 201);
    }

    // PUT /api/property-types/{id} (admin only)
    public function update(Request $request, $id)
    {
        $propertyType = PropertyType::find($id);
        
        if (!$propertyType) {
            return response()->json(['message' => 'Property type not found'], 404);
        }

        $validated = $request->validate([
            'name' => 'sometimes|string|unique:property_types,name,' . $id . '|max:255',
        ]);

        $propertyType->update($validated);
        return response()->json($propertyType);
    }

    // DELETE /api/property-types/{id} (admin only)
    public function destroy($id)
    {
        $propertyType = PropertyType::find($id);
        
        if (!$propertyType) {
            return response()->json(['message' => 'Property type not found'], 404);
        }

        $propertyType->delete();
        return response()->json(['message' => 'Property type deleted successfully']);
    }
}