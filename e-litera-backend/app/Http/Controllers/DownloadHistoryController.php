<?php

namespace App\Http\Controllers;

use App\Models\DownloadHistory;
use Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DownloadHistoryController extends Controller
{
    public function postDownloadHistory(Request $request):JsonResponse{
        $valData = $request->validate([
            'book_id' => 'required|exists:books,id',
            'downloaded_at' => 'required|date_format:Y-m-d H:i:s'
        ]);

        $valData['user_id'] = Auth::id();

        $downloadHistory = DownloadHistory::create($valData);

         return response()->json([
                'success' => true,
                'messages' => 'Created Download History',
                'data' => $downloadHistory
        ],201);
    }
}
