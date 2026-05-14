<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PropertyType;

class PropertyTypeSeeder extends Seeder
{
    public function run(): void
    {
        $types = ['Apartment', 'House', 'Land'];

        foreach ($types as $type) {
            PropertyType::create([
                'name' => $type,
            ]);
        }
    }
}