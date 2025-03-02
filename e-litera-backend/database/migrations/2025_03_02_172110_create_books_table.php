<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('categories')->cascadeOnDelete();
            $table->string('author');
            $table->string('book_title');
            $table->string('isbn')->unique();
            $table->text('description')->nullable();
            $table->string('cover_image')->nullable();
            $table->string('pdf_url');
            $table->integer('year_published');
            $table->string('publisher');
            $table->enum('status', ['available','borrowed'])->default('available');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
