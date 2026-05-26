<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    // GET /api/inquiries (admin only)
    public function index()
    {
        $inquiries = Inquiry::with('property')->get();
        return response()->json($inquiries);
    }

    // POST /api/inquiries (public - anyone can send inquiry)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'property_id' => 'required|exists:properties,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        $validated['status'] = 'new';
        
        $inquiry = Inquiry::create($validated);

        return redirect()->back()->with('success', 'Inquiry sent successfully!');
    }

    // PUT /api/inquiries/{id} (admin only)
    public function update(Request $request, $id)
    {
        $inquiry = Inquiry::find($id);
        
        if (!$inquiry) {
            return response()->json(['message' => 'Inquiry not found'], 404);
        }

        $validated = $request->validate([
            'status' => 'sometimes|in:new,contacted,closed',
        ]);

        $inquiry->update($validated);
        return response()->json($inquiry);
    }
}