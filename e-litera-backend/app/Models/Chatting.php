<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Chatting extends Model
{
    protected $fillable = [
        'sender_id',
        'reciever_id',
        'message',
        'is_read'
    ];


    public function sender(): BelongsTo
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function reciever(): BelongsTo
    {
        return $this->belongsTo(User::class, 'reciever_id');
    }


}
