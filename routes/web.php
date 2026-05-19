<?php

use App\Http\Controllers\API\PropertyController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\PropertyTypeController;
use App\Http\Controllers\API\InquiryController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ========== PUBLIC PAGE RUTE ==========
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/properties', [PageController::class, 'properties'])->name('properties.index');
Route::get('/properties/{id}', [PageController::class, 'propertyDetails'])->name('properties.show');
Route::get('/category/{id}', [PageController::class, 'category'])->name('category.show');
Route::get('/categories', [PageController::class, 'categories'])->name('categories.index');

// ========== BREEZE RUTE (auth, login, register, dashboard) ==========
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