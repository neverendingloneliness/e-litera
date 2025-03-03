<?php

namespace App\Http\Controllers;

use App\Models\Chatting;
use Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ChattingController extends Controller
{
    public function getAllMessages():JsonResponse{
        $messages = Chatting::all();
        return response()->json([

                'success' => true,
                'messages' => 'Get All Messages',
                'data' => $messages
        ],200);
    }

    public function getDetailMessage(Chatting $message):JsonResponse{
        return response()->json([
                'success' => true,
                'messages' => 'Get Detail Message',
                'data' => $message
        ],200);
    }

    public function postMessage(Request $request):JsonResponse{
        $valData = $request->validate([
            'reciever_id' => 'required|exists:users,id',
            'message' => 'required|string',
            'is_read' => 'boolean'
        ]);

        $valData['sender_id'] = Auth::id();

        $message = Chatting::create($valData);

         return response()->json([
                'success' => true,
                'messages' => 'Message Sent',
                'data' => $message
        ],201);
    }


    public function updateMessage(Request $request, Chatting $message):JsonResponse{

        // only sender can update their own text
        if ($message->sender_id !== Auth::id()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized: You can only edit your own messages.'
            ], 403);
        }
        $valData = $request->validate([
            'reciever_id' => 'sometimes|exists:users,id',
            'message' => 'sometimes|string',
        ]);

        // prevent empty text
        if (empty($valData)) {
            return response()->json([
                'success' => false,
                'message' => 'No valid fields provided for update.'
            ], 400);
        }

        $message->update($valData);

        return response()->json([
            'success' => true,
            'message' => 'Message Updated Successfully',
            'data' => $message
        ],200);
    }


    public function deleteMessage(Chatting $message):JsonResponse{
        if ($message->user_id !== Auth::id()) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized: You can only delete your own message.'
            ], 403);
        }

        $message->delete();

         return response()->json([
                'success' => true,
                'messages' => 'Message Deleted',
                'data' => $message
        ],200);
    }
}
