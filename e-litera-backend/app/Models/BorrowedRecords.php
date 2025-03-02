<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BorrowedRecords extends Model
{
    protected $fillable = [
        'user_id',
        'book_id',
        'borrow_date',
        'return_date',
        'status'
    ];
}
