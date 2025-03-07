<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function getAllBooks():JsonResponse{
         $books = Book::with('category')->get();

         $booksFormatted = $books->map(function ($book) {
            return [
                'id' => $book->id,
                'book_title' => $book->book_title,
                'author' => $book->author,
                'isbn' => $book->isbn,
                'description' => $book->description,
                'cover_image' => asset('storage/' . $book->cover_image),
                'pdf_url' => asset('storage/' . $book->pdf_url),
                'year_published' => $book->year_published,
                'publisher' => $book->publisher,
                'status' => $book->status,
                'category_name' => $book->category->name ?? 'Unknown Category',
            ];
        });

         return response()->json(
            [
                'success' => true,
                'messages' => 'Get All Books',
                'data' => $booksFormatted
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
