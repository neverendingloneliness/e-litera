<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DownloadHistoryResource\Pages;
use App\Filament\Resources\DownloadHistoryResource\RelationManagers;
use App\Models\DownloadHistory;
use Auth;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DownloadHistoryResource extends Resource
{
    public static function canCreate(): bool
    {
        return Auth::user()->role === 'user';
    }
    protected static ?string $navigationGroup = 'Histories';

    protected static ?string $model = DownloadHistory::class;

    protected static ?string $navigationIcon = 'heroicon-o-arrow-down-tray';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),
                Forms\Components\Select::make('book_id')
                    ->relationship('book', 'id')
                    ->required(),
                Forms\Components\DateTimePicker::make('downloaded_at')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('book.id')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('downloaded_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDownloadHistories::route('/'),
            'create' => Pages\CreateDownloadHistory::route('/create'),
            'edit' => Pages\EditDownloadHistory::route('/{record}/edit'),
        ];
    }
}
