<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function getAllReview():JsonResponse{
        $reviews = Review::all();
        return response()->json([

                'success' => true,
                'messages' => 'Get All Reviews',
                'data' => $reviews
        ],200);
    }

    public function getDetailReview(Review $review):JsonResponse{
        return response()->json([
                'success' => true,
                'messages' => 'Get Detail Review',
                'data' => $review
        ],200);
    }

    public function postReview(Request $request):JsonResponse{
        $valData = $request->validate([
            'book_id' => 'required|exists:books,id',
            'rating' => 'required|integer|min:1|max:5',
            'review' => 'nullable|string'
        ]);

        $valData['user_id'] = Auth::id();

        $review = Review::create($valData);

         return response()->json([
                'success' => true,
                'messages' => 'Review Sent',
                'data' => $review
        ],201);
    }


    public function updateReview(Request $request, Review $review):JsonResponse{

        // only sender can update their own review
        if ($review->sender_id !== Auth::id()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized: You can only edit your own reviews'
            ], 403);
        }
        $valData = $request->validate([
            'rating' => 'sometimes|integer|min:1|max:5',
            'review' => 'sometimes|string'
        ]);

        // prevent empty text
        if (empty($valData)) {
            return response()->json([
                'success' => false,
                'message' => 'No valid fields provided for update.'
            ], 400);
        }

        $review->update($valData);

        return response()->json([
            'success' => true,
            'message' => 'Message Updated Successfully',
            'data' => $review
        ],200);
    }

    public function deleteReview(Review $review):JsonResponse{
        if ($review->user_id !== Auth::id()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized: You can only delete your own reviews.'
            ], 403);
        }

        $review->delete();

         return response()->json([
                'success' => true,
                'messages' => 'Review Deleted',
                'data' => $review
        ],200);
    }
}
