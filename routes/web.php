<?php

use App\Http\Controllers\API\PropertyController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\PropertyTypeController;
use App\Http\Controllers\API\InquiryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ========== BREEZE RUTE (auth, login, register, dashboard) ==========
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

// ========== API RUTE (tvoje) ==========
// Public routes (everyone can access)
Route::prefix('api')->group(function () {
    // Properties
    Route::get('/properties', [PropertyController::class, 'index']);
    Route::get('/properties/{id}', [PropertyController::class, 'show']);
    
    // Categories
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/categories/{id}', [CategoryController::class, 'show']);
    Route::get('/categories/{id}/properties', [CategoryController::class, 'properties']);
    
    // Property Types
    Route::get('/property-types', [PropertyTypeController::class, 'index']);
    Route::get('/property-types/{id}', [PropertyTypeController::class, 'show']);
    
    // Inquiries (public - anyone can submit)
    Route::post('/inquiries', [InquiryController::class, 'store']);
});

// Admin only routes
Route::prefix('api')->middleware(['auth', 'admin'])->group(function () {
    // Properties CRUD
    Route::post('/properties', [PropertyController::class, 'store']);
    Route::put('/properties/{id}', [PropertyController::class, 'update']);
    Route::delete('/properties/{id}', [PropertyController::class, 'destroy']);
    
    // Categories CRUD
    Route::post('/categories', [CategoryController::class, 'store']);
    Route::put('/categories/{id}', [CategoryController::class, 'update']);
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);
    
    // Property Types CRUD
    Route::post('/property-types', [PropertyTypeController::class, 'store']);
    Route::put('/property-types/{id}', [PropertyTypeController::class, 'update']);
    Route::delete('/property-types/{id}', [PropertyTypeController::class, 'destroy']);
    
    // Inquiries (admin can view and update)
    Route::get('/inquiries', [InquiryController::class, 'index']);
    Route::put('/inquiries/{id}', [InquiryController::class, 'update']);
});