<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ForumReply extends Model
{
    protected $fillable = [
        'post_id',
        'user_id',
        'content'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function forumPost(): BelongsTo
    {
        return $this->belongsTo(ForumPost::class, 'post_id');
    }


}
