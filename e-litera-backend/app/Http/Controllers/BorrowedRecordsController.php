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
        $borrowedRecords = BorrowedRecords::with('book')->get();

        $formattedBorrowedRecords = $borrowedRecords->map(function ($record) {
            return [
                'id' => $record->id,
                'user_id' => $record->user_id,
                'book_id' => $record->book_id,
                'borrow_date' => $record->borrow_date,
                'return_date' => $record->return_date,
                'status' => $record->status,
                'cover_image' => asset('storage/' . $record->book->cover_image),
                'book_title' => $record->book->book_title ?? 'Unknown Book',
            ];
        });
        return response()->json([
            'success' => true,
            'messages' => 'Get All Borrowed Records',
            'data' => $formattedBorrowedRecords
        ], 200);

    }

    public function getDetailBorrowedRecords(BorrowedRecords $borrowedRecords)
    {
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

    public function returnBook($id): JsonResponse
    {
        $borrowedRecord = BorrowedRecords::where('id', $id)->first();

        if ($borrowedRecord->status === 'returned') {
            return response()->json([
                'success' => false,
                'message' => 'Book is already returned'
            ], 400);
        }

        $borrowedRecord->update(['status' => 'returned']);

        return response()->json([
            'success' => true,
            'message' => 'Book returned successfully',
            'data' => $borrowedRecord
        ]);
    }

}
