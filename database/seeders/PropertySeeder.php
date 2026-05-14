<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Property;
use App\Models\PropertyImage;

class PropertySeeder extends Seeder
{
    public function run(): void
    {
        // 15 propertyja
        for ($i = 1; $i <= 15; $i++) {
            $property = Property::create([
                'title' => "Property $i",
                'description' => "Ovo je opis nekretnine broj $i. Predivna lokacija, odlična povezanost, miran kvart.",
                'price' => rand(50000, 500000),
                'category_id' => rand(1, 3),        // 1=Sale, 2=Rent, 3=New Construction
                'property_type_id' => rand(1, 3),   // 1=Apartment, 2=House, 3=Land
                'location' => $this->getRandomLocation(),
                'address' => "Ulica " . rand(1, 100) . ", " . $this->getRandomLocation(),
                'square_meters' => rand(30, 200),
                'number_of_rooms' => rand(1, 5),
            ]);

            // Svaki property ima 2 slike
            for ($j = 1; $j <= 2; $j++) {
                PropertyImage::create([
                    'property_id' => $property->id,
                    'image_url' => "https://picsum.photos/800/600?random=" . $property->id . $j,
                ]);
            }
        }
    }

    private function getRandomLocation(): string
    {
        $locations = [
            'Grad Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar',
            'Dubrovnik', 'Pula', 'Slavonski Brod', 'Karlovac', 'Varaždin'
        ];
        return $locations[array_rand($locations)];
    }
}