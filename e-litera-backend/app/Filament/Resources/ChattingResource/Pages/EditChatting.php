<?php

namespace App\Filament\Resources\ChattingResource\Pages;

use App\Filament\Resources\ChattingResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditChatting extends EditRecord
{
    protected static string $resource = ChattingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
