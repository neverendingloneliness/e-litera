<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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


}
