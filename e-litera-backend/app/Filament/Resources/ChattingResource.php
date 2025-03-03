<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ChattingResource\Pages;
use App\Filament\Resources\ChattingResource\RelationManagers;
use App\Models\Chatting;
use Auth;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ChattingResource extends Resource
{
    public static function canCreate(): bool
    {
        return Auth::user()->role === 'user';
    }
    protected static ?string $model = Chatting::class;

    protected static ?string $navigationGroup = 'User Interaction';

    protected static ?string $navigationIcon = 'heroicon-o-user';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('sender_id')
                    ->relationship('sender', 'name')
                    ->required(),
                Forms\Components\Select::make('reciever_id')
                    ->relationship('reciever', 'name')
                    ->required(),
                Forms\Components\Textarea::make('message')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\Toggle::make('is_read')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('sender.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('reciever.name')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_read')
                    ->boolean(),
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
            'index' => Pages\ListChattings::route('/'),
            'create' => Pages\CreateChatting::route('/create'),
            'edit' => Pages\EditChatting::route('/{record}/edit'),
        ];
    }
}
