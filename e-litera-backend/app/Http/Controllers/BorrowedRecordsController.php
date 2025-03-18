<?php

namespace App\Http\Controllers;

use App\Models\BorrowedRecords;
use Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BorrowedRecordsController extends Controller
{

    public function getAllBorrowRecords(Request $request): JsonResponse
    {

        $search = $request->get("search");

        $borrowedRecords = BorrowedRecords::with('book')
            ->when($search, function ($query, $search) {
                return $query->whereHas('book', function ($bookQuery) use ($search) {
                    $bookQuery->where('book_title', 'like', "%{$search}%");
                });
            })
            ->paginate(8);
        $formattedBorrowedRecords = $borrowedRecords->getCollection()->map(function ($record) {
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
            'data' => $formattedBorrowedRecords,
            'pagination' => [
                'current_page' => $borrowedRecords->currentPage(),
                'total_pages' => $borrowedRecords->lastPage(),
                'total_items' => $borrowedRecords->total(),
                'per_page' => $borrowedRecords->perPage(),
            ]
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
