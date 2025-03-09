<?php

namespace App\Http\Controllers;

use App\Models\BorrowedRecords;
use Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BorrowedRecordsController extends Controller
{

    public function getAllBorrowRecords()
    {
        $borrowedRecords = BorrowedRecords::all();
        return response()->json([
            'success' => true,
            'messages' => 'Get All Borrowed Records',
            'data' => $borrowedRecords
        ], 200);

    }

    public function getDetailBorrowedRecords(BorrowedRecords $borrowedRecords){
        return response()->json([
            'success' => true,
            'messages' => 'Get Detail Borrowed Records',
            'data' => $borrowedRecords
        ], 200);
    }
    public function postBorrowRecord(Request $request): JsonResponse
    {
        $valData = $request->validate([
            'book_id' => 'required|exists:books,id',
        ]);

        $valData['user_id'] = Auth::id();
        $valData['borrow_date'] = now();
        $valData['status'] = 'borrowed';

        $valData['return_date'] = now()->addDays(7)->toDateString();
        $borrowedRecords = BorrowedRecords::create($valData);

        return response()->json([
            'success' => true,
            'messages' => 'Created Borrowed Records',
            'data' => $borrowedRecords
        ], 201);
    }

}
