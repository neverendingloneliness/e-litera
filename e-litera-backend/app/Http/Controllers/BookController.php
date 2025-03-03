<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function getAllBooks():JsonResponse{
         $books = Book::all();

         return response()->json(
            [
                'success' => true,
                'messages' => 'Get All Books',
                'data' => $books
             ], 200);

    }

    public function showBooks(Book $books):JsonResponse{

        return response()->json(
           [
               'success' => true,
               'messages' => 'Get Detail Books',
               'data' => $books
            ], 200);

   }
}
