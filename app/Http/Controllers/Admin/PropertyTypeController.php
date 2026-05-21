<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PropertyType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PropertyTypeController extends Controller
{
    public function index()
    {
        $propertyTypes = PropertyType::withCount('properties')->get();
        
        return Inertia::render('Admin/PropertyTypes/Index', [
            'propertyTypes' => $propertyTypes,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/PropertyTypes/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:property_types|max:255',
        ]);

        PropertyType::create($validated);

        return redirect()->route('admin.property-types.index')
            ->with('success', 'Property type created successfully');
    }

    public function edit($id)
    {
        $propertyType = PropertyType::findOrFail($id);
        
        return Inertia::render('Admin/PropertyTypes/Edit', [
            'propertyType' => $propertyType,
        ]);
    }

    public function update(Request $request, $id)
    {
        $propertyType = PropertyType::findOrFail($id);
        
        $validated = $request->validate([
            'name' => 'required|string|unique:property_types,name,' . $id . '|max:255',
        ]);

        $propertyType->update($validated);

        return redirect()->route('admin.property-types.index')
            ->with('success', 'Property type updated successfully');
    }

    public function destroy($id)
    {
        $propertyType = PropertyType::findOrFail($id);
        $propertyType->delete();

        return redirect()->route('admin.property-types.index')
            ->with('success', 'Property type deleted successfully');
    }
}