<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Property;
use App\Models\PropertyImage;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    // GET /api/properties
    public function index()
    {
        $properties = Property::with(['category', 'propertyType', 'images'])->get();
        return response()->json($properties);
    }

    // GET /api/properties/{id}
    public function show($id)
    {
        $property = Property::with(['category', 'propertyType', 'images', 'inquiries'])->find($id);
        
        if (!$property) {
            return response()->json(['message' => 'Property not found'], 404);
        }
        
        return response()->json($property);
    }

    // POST /api/properties (admin only)
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

        $property = Property::create($validated);

        // Ako su slike poslane (opcionalno)
        if ($request->has('images')) {
            foreach ($request->images as $imageUrl) {
                PropertyImage::create([
                    'property_id' => $property->id,
                    'image_url' => $imageUrl,
                ]);
            }
        }

        return response()->json($property, 201);
    }

    // PUT /api/properties/{id} (admin only)
    public function update(Request $request, $id)
    {
        $property = Property::find($id);
        
        if (!$property) {
            return response()->json(['message' => 'Property not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'price' => 'sometimes|numeric|min:0',
            'category_id' => 'sometimes|exists:categories,id',
            'property_type_id' => 'sometimes|exists:property_types,id',
            'location' => 'sometimes|string|max:255',
            'address' => 'sometimes|string|max:255',
            'square_meters' => 'sometimes|integer|min:1',
            'number_of_rooms' => 'sometimes|integer|min:0',
        ]);

        $property->update($validated);
        return response()->json($property);
    }

    // DELETE /api/properties/{id} (admin only)
    public function destroy($id)
    {
        $property = Property::find($id);
        
        if (!$property) {
            return response()->json(['message' => 'Property not found'], 404);
        }

        $property->delete();
        return response()->json(['message' => 'Property deleted successfully']);
    }
}