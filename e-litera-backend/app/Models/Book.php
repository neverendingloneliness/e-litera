<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    protected $fillable = [
        'category_id',
        'author',
        'book_title',
        'isbn',
        'description',
        'cover_image',
        'pdf_url',
        'year_published',
        'publisher',
        'status'
    ];


    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function borrowedRecords(): HasMany
    {
        return $this->hasMany(BorrowedRecords::class);
    }

    public function downloadHistory(): HasMany
    {
        return $this->hasMany(DownloadHistory::class);
    }

    public function review(): HasMany
    {
        return $this->hasMany(Review::class);
    }


}
