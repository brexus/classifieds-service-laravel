<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ad;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AdController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ads = Ad::orderBy('created_at', 'asc')->get();
        return Inertia::render('Ads', ['ads' => $ads]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $ad = new Ad;

        return Inertia::render('Adding', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|string|max:70',
            'category' => 'required|string',
            'description' => 'required|min:20|max:1000',
            'amount' => 'required|numeric',
            'state' => 'required|string',
            'location' => 'required|string|max:40',
            // 'terms' => 'required|boolean',
        ]);

        if (Auth::user() == null) {
            return view('/');
        }

        $ad = new Ad();
        $ad->user_id = Auth::user()->id;
        $ad->title = $request->title;
        $ad->category = $request->category;
        $ad->description = $request->description;
        $ad->amount = $request->amount;
        $ad->state = $request->state;
        $ad->location = $request->location;
        
        if ($ad->save()) {
            return redirect('dashboard');
        }
        return view('dashboard');
           
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $ad = Ad::find($id);

        //Sprawdzenie czy użytkownik jest autorem komentarza
        if (Auth::user()->id != $ad->user_id) {
            // return back()->with(['success' => false, 'message_type' => 'danger',
            // 'message' => 'Nie posiadasz uprawnień do przeprowadzenia tej operacji.']);
        }

        return Inertia::render('Ad', ['ad'=>$ad]);

        //$ads = Ad::orderBy('created_at', 'asc')->get();
        //return Inertia::render('All', ['ads' => $ads]);
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
