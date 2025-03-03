<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAllCategory():JsonResponse{
        $categories = Category::all();

        return response()->json(
           [
               'success' => true,
               'messages' => 'Get All Categories',
               'data' => $categories
            ], 200);

   }

   public function showCategory(Category $category):JsonResponse{

       return response()->json(
          [
              'success' => true,
              'messages' => 'Get Detail Category',
              'data' => $category
           ], 200);

  }
}
