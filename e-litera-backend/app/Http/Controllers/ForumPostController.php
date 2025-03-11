<?php

namespace App\Http\Controllers;

use App\Models\ForumPost;
use Illuminate\Http\Request;

class ForumPostController extends Controller
{
    public function getAllForumPosts()
    {
        $forumsPost = ForumPost::with('user')->get();

        $forumsPostFormated = $forumsPost->map(function ($forumsPost) {
            return [
                'id' => $forumsPost->id,
                'user_id' => $forumsPost->user_id,
                'user_name' => $forumsPost->user->name,
                'title' => $forumsPost->title,
                'content' => $forumsPost->content,
            ];
        });

        return response()->json(
            [
                'success' => true,
                'messages' => 'Get All Forum Posts',
                'data' => $forumsPostFormated
            ],
            200
        );
    }

    public function getForumPost($id)
    {
        $forumsPost = ForumPost::with('user')->find($id);

        if (!$forumsPost) {
            return response()->json([
                'success' => false,
                'messages' => 'Forum Post Not Found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'messages' => 'Get Forum Post Details',
            'data' => [
                'id' => $forumsPost->id,
                'user_id' => $forumsPost->user_id,
                'user_name' => $forumsPost->user->name,
                'title' => $forumsPost->title,
                'content' => $forumsPost->content,
            ]
        ], 200);
    }


    public function createForumPost(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $validatedData['user_id'] = auth()->id();

        $forumPost = ForumPost::create($validatedData);

        return response()->json([
            'success' => true,
            'messages' => 'Forum Post Created Successfully',
            'data' => $forumPost
        ], 201);
    }

    public function updateForumPost(Request $request, $id)
    {
        $forumsPost = ForumPost::find($id);

        if (!$forumsPost) {
            return response()->json([
                'success' => false,
                'messages' => 'Forum Post Not Found'
            ], 404);
        }

        if ($forumsPost->user_id !== auth()->id()) {
            return response()->json([
                'success' => false,
                'messages' => 'Unauthorized: You can only update your own posts'
            ], 403);
        }

        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $forumsPost->update($validatedData);

        return response()->json([
            'success' => true,
            'messages' => 'Forum Post Updated Successfully',
            'data' => $forumsPost
        ], 200);
    }


    public function deleteForumPost($id)
    {
        $forumsPost = ForumPost::find($id);

        if (!$forumsPost) {
            return response()->json([
                'success' => false,
                'messages' => 'Forum Post Not Found'
            ], 404);
        }

        if ($forumsPost->user_id !== auth()->id()) {
            return response()->json([
                'success' => false,
                'messages' => 'Unauthorized: You can only delete your own posts'
            ], 403);
        }

        $forumsPost->delete();

        return response()->json([
            'success' => true,
            'messages' => 'Forum Post Deleted Successfully'
        ], 200);
    }

}
