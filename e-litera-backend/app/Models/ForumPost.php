<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ForumPost extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'content'
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function forumReply(): HasMany
    {
        return $this->hasMany(ForumReply::class);
    }



}
