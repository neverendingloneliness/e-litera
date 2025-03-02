<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chatting extends Model
{
    public $fillable = [
        'sender_id',
        'reciever_id',
        'message',
        'is_read'
    ];
}
