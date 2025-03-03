<?php

namespace App\Filament\Resources\BorrowedRecordsResource\Pages;

use App\Filament\Resources\BorrowedRecordsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBorrowedRecords extends EditRecord
{
    protected static string $resource = BorrowedRecordsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
