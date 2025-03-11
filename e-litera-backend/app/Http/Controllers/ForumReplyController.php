<?php

namespace App\Http\Controllers;

use App\Models\ForumReply;
use Illuminate\Http\Request;

class ForumReplyController extends Controller
{
    public function getAllForumReplies()
    {
        $forumsReply = ForumReply::with(['user', 'forumPost'])->get();

        $forumsReplyFormated = $forumsReply->map(function ($forumsReply) {
            return [
                'id' => $forumsReply->id,
                'user_id' => $forumsReply->user_id,
                'forum_post_id' => $forumsReply->forum_post_id,
                'forum_title' => $forumsReply->forumPost->title_forum,
                'user_name' => $forumsReply->user->name,
                'content' => $forumsReply->content,
            ];
        });

        return response()->json(
            [
                'success' => true,
                'messages' => 'Get All Forum Reply',
                'data' => $forumsReplyFormated
            ],
            200
        );
    }

    public function getForumPost($id)
    {
        $forumReply = ForumReply::with(['user', 'forumPost'])->find($id);

        if (!$forumReply) {
            return response()->json([
                'success' => false,
                'messages' => 'Forum Reply Not Found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'messages' => 'Get Forum Reply Details',
            'data' => [
                'id' => $forumReply->id,
                'user_id' => $forumReply->user_id,
                'user_name' => $forumReply->user->name,
                'title' => $forumReply->title,
                'content' => $forumReply->content,
            ]
        ], 200);
    }


    public function createForumPost(Request $request)
    {
        $validatedData = $request->validate([
            'forum_post_id' => 'required|exists:forum_posts,id',
            'content' => 'required|string',
        ]);

        $validatedData['user_id'] = auth()->id();

        $forumReply = ForumReply::create($validatedData);

        return response()->json([
            'success' => true,
            'messages' => 'Forum Reply Created Successfully',
            'data' => $forumReply
        ], 201);
    }

    public function updateForumPost(Request $request, $id)
    {
        $forumReply = ForumReply::find($id);

        if (!$forumReply) {
            return response()->json([
                'success' => false,
                'messages' => 'Forum Reply Not Found'
            ], 404);
        }

        if ($forumReply->user_id !== auth()->id()) {
            return response()->json([
                'success' => false,
                'messages' => 'Unauthorized: You can only update your own Reply'
            ], 403);
        }

        $validatedData = $request->validate([
            'content' => 'required|string',
        ]);

        $forumReply->update($validatedData);

        return response()->json([
            'success' => true,
            'messages' => 'Forum Reply Updated Successfully',
            'data' => $forumReply
        ], 200);
    }


    public function deleteForumPost($id)
    {
        $forumReply = ForumReply::find($id);

        if (!$forumReply) {
            return response()->json([
                'success' => false,
                'messages' => 'Forum Reply Not Found'
            ], 404);
        }

        if ($forumReply->user_id !== auth()->id()) {
            return response()->json([
                'success' => false,
                'messages' => 'Unauthorized: You can only delete your own Reply'
            ], 403);
        }

        $forumReply->delete();

        return response()->json([
            'success' => true,
            'messages' => 'Forum Reply Deleted Successfully'
        ], 200);
    }
}
