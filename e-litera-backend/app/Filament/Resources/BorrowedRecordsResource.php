<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BorrowedRecordsResource\Pages;
use App\Filament\Resources\BorrowedRecordsResource\RelationManagers;
use App\Models\BorrowedRecords;
use Auth;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BorrowedRecordsResource extends Resource
{
    public static function canCreate(): bool
    {
        return Auth::user()->role === 'user';
    }

    protected static ?string $navigationGroup = 'Histories';

    protected static ?string $model = BorrowedRecords::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

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
                Forms\Components\DatePicker::make('borrow_date')
                    ->required(),
                Forms\Components\DatePicker::make('return_date'),
                Forms\Components\TextInput::make('status')
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
                Tables\Columns\TextColumn::make('borrow_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('return_date')
                    ->date()
                    ->sortable(),
                Tables\Columns\TextColumn::make('status'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
            'index' => Pages\ListBorrowedRecords::route('/'),
            'create' => Pages\CreateBorrowedRecords::route('/create'),
            'edit' => Pages\EditBorrowedRecords::route('/{record}/edit'),
        ];
    }
}
