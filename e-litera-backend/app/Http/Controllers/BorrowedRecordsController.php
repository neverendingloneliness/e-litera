<?php

namespace App\Http\Controllers;

use App\Models\BorrowedRecords;
use Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BorrowedRecordsController extends Controller
{
    public function postBorrowRecord(Request $request):JsonResponse{
        $valData = $request->validate([
            'book_id' => 'required|exists:books,id',
            'borrow_date' => 'required|date',
            'return_date' => 'required|date|after:borrow_date',
            'status' => 'required|string|in:borrowed,returned,overdue'
        ]);

        $valData['user_id'] = Auth::id();

        $borrowedRecords = BorrowedRecords::create($valData);

         return response()->json([
                'success' => true,
                'messages' => 'Created Borrowed Records',
                'data' => $borrowedRecords
        ],201);
    }

}
