<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ad;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AdController;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        if($id == 1) {
            $category = 'Motoryzacja';
            
        } else if($id == 2) {
            $category = 'Nieruchomości';

        } else if($id == 3) {
            $category = 'Dom i Ogród';

        } else if($id == 4) {
            $category = 'Elektronika';

        } else if($id == 5) {
            $category = 'Moda';

        } else if($id == 6) {
            $category = 'Zwierzęta';

        } else if($id == 7) {
            $category = 'Sport i Hobby';

        } else if($id == 8) {
            $category = 'Literatura';

        } else {
            // $ads = Ad::orderBy('created_at', 'asc')->get();
            // return Inertia::render('Ads', ['ads' => $ads, 'title' => 'Wszystkie Ogłoszenia']);
            return redirect('/ads');
        }

        $ads = Ad::where('category', $category)->get();

        return Inertia::render('Ads', ['ads' => $ads, 'title' => $category]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
