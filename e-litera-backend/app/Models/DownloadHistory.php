<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DownloadHistory extends Model
{
    protected $fillable = [
        'user_id',
        'book_id',
        'downloaded_at'
    ];
}
