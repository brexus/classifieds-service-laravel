<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdController;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {return Inertia::render('Dashboard');})->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/dashboard', [AdController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/adding', [AdController::class, 'create'])->middleware(['auth', 'verified'])->name('adding.create');
Route::post('/adding', [AdController::class, 'store'])->name('adding.store');

Route::get('/ads', [AdController::class, 'index'])->middleware(['auth', 'verified'])->name('ads.index');

Route::get('/ads/{ad}', [AdController::class, 'show'])->middleware(['auth', 'verified'])->name('ads.show');

Route::get('/delete/{id}', [AdController::class, 'destroy'])->middleware(['auth', 'verified'])->name('ad.delete');
Route::get('/edit/{id}', [AdController::class, 'edit'])->middleware(['auth', 'verified'])->name('ad.edit');
Route::post('/update/{id}', [AdController::class, 'update'])->middleware(['auth', 'verified'])->name('ad.update');



Route::get('/category/{cat}', [CategoryController::class, 'show'])->middleware(['auth', 'verified'])->name('category.show');


require __DIR__.'/auth.php';
