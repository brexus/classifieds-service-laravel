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
        Schema::create('ads', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->string('title', 70);
            $table->enum('category', ['Motoryzacja', 'Nieruchomości', 'Dom i Ogród', 'Elektronika', 'Moda', 'Zwierzęta', 'Sport i Hobby', 'Literatura']);
            $table->string('description', 1000);
            $table->decimal('amount', 8, 2);
            $table->enum('state', ['Nowe', 'Używane', 'Uszkodzone']);
            $table->string('location', 40);
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ads');
    }
};
