<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\BorrowedRecordsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ChattingController;
use App\Http\Controllers\DownloadHistoryController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(function () {
    // Books
    Route::get('/books', [BookController::class, 'getAllBooks']);
    Route::get('/books/{book}', [BookController::class, 'showBooks']);

    // Categories
    Route::get('/categories', [CategoryController::class, 'getAllCategory']);
    Route::get('/categories/{category}', [CategoryController::class, 'showCategory']);

    // Chatting
    Route::get('/messages', [ChattingController::class, 'getAllMessages']);
    Route::get('/messages/{message}', [ChattingController::class, 'getDetailMessage']);
    Route::post('/messages', [ChattingController::class, 'postMessage']);
    Route::put('/messages/{message}', [ChattingController::class, 'updateMessage']);
    Route::delete('/messages/{message}', [ChattingController::class, 'deleteMessage']);

    // Borrow Records
    Route::get('/borrowed-records', [BorrowedRecordsController::class, 'getAllBorrowRecords']);
    Route::get('/borrowed-records/{borrowedRecords}', [BorrowedRecordsController::class, 'getDetailBorrowedRecords']);
    Route::post('/borrow-records', [BorrowedRecordsController::class, 'postBorrowRecord']);

    // Download History
    Route::post('/download-history', [DownloadHistoryController::class, 'postDownloadHistory']);

    // Reviews
    Route::get('/reviews', [ReviewController::class, 'getAllReview']);
    Route::get('/reviews/{review}', [ReviewController::class, 'getDetailReview']);
    Route::post('/reviews', [ReviewController::class, 'postReview']);
    Route::put('/reviews/{review}', [ReviewController::class, 'updateReview']);
    Route::delete('/reviews/{review}', [ReviewController::class, 'deleteReview']);
});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

require __DIR__.'/auth.php';

