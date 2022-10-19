<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    public function store(Request $request){
        $item = new Item([
            'name' => $request->get('name'),
            'price' => $request->get('price')
        ]);
        $item->save();
        return response()->json('Successfully added');
    }
}
