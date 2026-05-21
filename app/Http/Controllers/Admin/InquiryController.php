<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InquiryController extends Controller
{
    public function index()
    {
        $inquiries = Inquiry::with('property')
            ->latest()
            ->paginate(20);
        
        return Inertia::render('Admin/Inquiries/Index', [
            'inquiries' => $inquiries,
        ]);
    }

    public function update(Request $request, $id)
    {
        $inquiry = Inquiry::findOrFail($id);
        
        $validated = $request->validate([
            'status' => 'required|in:new,contacted,closed',
        ]);

        $inquiry->update($validated);

        return redirect()->route('admin.inquiries.index')
            ->with('success', 'Inquiry status updated successfully');
    }
}