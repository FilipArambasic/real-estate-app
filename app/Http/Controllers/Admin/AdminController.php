<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Property;
use App\Models\Category;
use App\Models\PropertyType;
use App\Models\Inquiry;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $stats = [
            'properties' => Property::count(),
            'categories' => Category::count(),
            'propertyTypes' => PropertyType::count(),
            'inquiries' => Inquiry::count(),
        ];
        
        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
        ]);
    }
}