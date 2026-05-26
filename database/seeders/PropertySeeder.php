<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Property;
use App\Models\PropertyImage;

class PropertySeeder extends Seeder
{
    public function run(): void
    {
        $properties = [
            [
                'title' => 'Modern Apartment in City Center',
                'description' => 'Beautiful modern apartment in the heart of Zagreb. Fully renovated, close to all amenities. Perfect for young professionals or small families.',
                'price' => 250000,
                'category_id' => 1, // Sale
                'property_type_id' => 1, // Apartment
                'location' => 'Zagreb',
                'address' => 'Ilica 123, Zagreb',
                'square_meters' => 65,
                'number_of_rooms' => 2,
                'images' => [
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/765743318.jpg?k=f40cc361061c0679c102fdff78cd2ebdba5c8d548e09dc2c9b146d47cc6b6147&o=
                    //',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/740784517.jpg?k=502be2c112d2801477fd8832a186e19779d68d7208b239d2e9a3080558e279ca&o=',
                ],
            ],
            [
                'title' => 'Luxury Villa with Pool',
                'description' => 'Stunning luxury villa with private pool and garden. Located in a quiet neighborhood with beautiful sea view.',
                'price' => 850000,
                'category_id' => 1, // Sale
                'property_type_id' => 2, // House
                'location' => 'Split',
                'address' => 'Put Supavla 45, Split',
                'square_meters' => 220,
                'number_of_rooms' => 5,
                'images' => [
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/751603377.jpg?k=f51330666e4e49f1e1d4c6a119ef064f9568c3b0e1b6c4edb1f8ff024bf8a5fb&o=',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/751602829.jpg?k=c073151aa251cb23b2a9dbfe3a63e62908952197c634fbb55561443781113dc1&o=',
                ],
            ],
            [
                'title' => 'Cozy Apartment near Beach',
                'description' => 'Nice and cozy apartment just 200 meters from the beach. Perfect for summer vacation or year-round living.',
                'price' => 180000,
                'category_id' => 1, // Sale
                'property_type_id' => 1, // Apartment
                'location' => 'Zadar',
                'address' => 'Obala kneza Trpimira 8, Zadar',
                'square_meters' => 55,
                'number_of_rooms' => 2,
                'images' => [
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/466790708.jpg?k=63311ac9a967e69cf6e8fae8749690efe5799e99126b57b170eef2ba9740fa4b&o=',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/467024793.jpg?k=15bdb030b2324bfd102cb195ae660a20e116c62e36738264ece41fdf88a96df5&o=',
                ],
            ],
            [
                'title' => 'Spacious Family House',
                'description' => 'Large family house with big yard and garage. Quiet area, close to schools and kindergarten.',
                'price' => 320000,
                'category_id' => 1, // Sale
                'property_type_id' => 2, // House
                'location' => 'Osijek',
                'address' => 'Europska avenija 12, Osijek',
                'square_meters' => 180,
                'number_of_rooms' => 4,
                'images' => [
                    'https://www.njuskalo.hr/image-w920x690/nekretnine/prodajem-kucu-visnjevcu-katnica-kanadskog-stila-300.000-eur-a-slika-277931277.jpg',
                    'https://www.njuskalo.hr/image-w920x690/nekretnine/prodajem-kucu-visnjevcu-katnica-kanadskog-stila-300.000-eur-a-slika-277931279.jpg',
                ],
            ],
            [
                'title' => 'Modern Apartment New Construction',
                'description' => 'Brand new apartment in a modern building. Energy efficient, underfloor heating, and elevator.',
                'price' => 290000,
                'category_id' => 3, // New Construction
                'property_type_id' => 1, // Apartment
                'location' => 'Rijeka',
                'address' => 'Korzo 25, Rijeka',
                'square_meters' => 72,
                'number_of_rooms' => 3,
                'images' => [
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/825529195.jpg?k=d0329f7a10417713c776d04ac7ee74fb613d0a1533ae84ee85a4635ce166f22c&o=',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/825533508.jpg?k=97bbe1f92912e3fd83927dd7893237c5d63933321223a8354b77d678c1bca2a8&o=',
                ],
            ],
            [
                'title' => 'Seaside Apartment for Rent',
                'description' => 'Beautiful apartment with stunning sea view. Fully furnished, available for short-term or long-term rent.',
                'price' => 1200,
                'category_id' => 2, // Rent
                'property_type_id' => 1, // Apartment
                'location' => 'Dubrovnik',
                'address' => 'Ul. Iva Vojnovića 14, Dubrovnik',
                'square_meters' => 60,
                'number_of_rooms' => 2,
                'images' => [
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/655775915.jpg?k=4698355654338591f1d168a363b00878104578c816a127cdd5e08e8ac9bb7c09&o=',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/697484027.jpg?k=01b79a9e9da7b93814e82c7e0c80598f250b507b46afd9e29bfb601e4647ea40&o=',
                ],
            ],
            [
                'title' => 'Commercial Space in City Center',
                'description' => 'Excellent commercial space for office or retail. High foot traffic area, modern glass facade.',
                'price' => 450000,
                'category_id' => 1, // Sale
                'property_type_id' => 3, // Land (or can be Commercial)
                'location' => 'Zagreb',
                'address' => 'Trg bana Jelačića 5, Zagreb',
                'square_meters' => 120,
                'number_of_rooms' => 0,
                'images' => [
                    'https://www.njuskalo.hr/image-w920x690/nekretnine/zakup-ured-333m2-donji-grad-banjavciceva-ulica-slika-271895270.jpg',
                    'https://www.njuskalo.hr/image-w920x690/nekretnine/zakup-ured-333m2-donji-grad-banjavciceva-ulica-slika-270727323.jpg',
                ],
            ],
            [
                'title' => 'Studio Apartment for Students',
                'description' => 'Perfect studio apartment for students. Close to university, fully equipped, all bills included in rent.',
                'price' => 500,
                'category_id' => 2, // Rent
                'property_type_id' => 1, // Apartment
                'location' => 'Osijek',
                'address' => 'Trg slobode 7, Osijek',
                'square_meters' => 35,
                'number_of_rooms' => 1,
                'images' => [
                    'https://a0.muscache.com/im/pictures/miso/Hosting-52021604/original/41b6de95-720c-45fc-8995-7a5c1f0adce3.jpeg?im_w=1200',
                    'https://a0.muscache.com/im/pictures/miso/Hosting-52021604/original/fcee725a-c678-4a6f-a670-b9b8b03adff4.jpeg?im_w=720',
                ],
            ],
            [
                'title' => 'Luxury Penthouse with Terrace',
                'description' => 'Exclusive penthouse with large terrace and panoramic city view. High-end finishes and appliances.',
                'price' => 620000,
                'category_id' => 1, // Sale
                'property_type_id' => 1, // Apartment
                'location' => 'Split',
                'address' => 'Šetalište Ivana Pavla II 32, Split',
                'square_meters' => 150,
                'number_of_rooms' => 4,
                'images' => [
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/74035026.jpg?k=208ed5ab32feca882ed8d8e63de50550f7275a7b381135d4d0fc830244886d97&o=',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/74033332.jpg?k=2022f9aeb45107a68665a05eb295037832e1643103c234787edd19dcafda43ff&o=',
                ],
            ],
            [
                'title' => 'Building Plot for Construction',
                'description' => 'Beautiful building plot with permit ready. Close to the sea, infrastructure nearby.',
                'price' => 150000,
                'category_id' => 1, // Sale
                'property_type_id' => 3, // Land
                'location' => 'Zadar',
                'address' => 'Put Murvice 23, Zadar',
                'square_meters' => 500,
                'number_of_rooms' => 0,
                'images' => [
                    'https://images.croatiapropertysales.com/media/shared/real-estate-images/5611/5611-zadar-building-land-2.fit-632x412.jpeg',
                    'https://www.adrionika.com/uploaded_files/styles/480x394/public/property/135680-523125.jpg?itok=MCAZsk0e&timestamp=1741122257',
                ],
            ],
            [
                'title' => 'New Construction Apartment',
                'description' => 'Brand new apartment in 2024 building. Energy class A+, heat pump, solar panels.',
                'price' => 310000,
                'category_id' => 3, // New Construction
                'property_type_id' => 1, // Apartment
                'location' => 'Rijeka',
                'address' => 'Deltina 5, Rijeka',
                'square_meters' => 78,
                'number_of_rooms' => 3,
                'images' => [
                    'https://hener.hr/wp-content/uploads/2025/08/483507811_629205636530026_1175165202953276750_n.jpg',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/221680460.jpg?k=5e0c83b708a5e9ccde1cbc178bc1d4dfee6098603ecdf6f5557a176a1993308b&o=',
                ],
            ],
            [
                'title' => 'Mountain Cabin for Rent',
                'description' => 'Cozy mountain cabin perfect for weekend getaway. Fireplace, hiking trails nearby.',
                'price' => 800,
                'category_id' => 2, // Rent
                'property_type_id' => 2, // House
                'location' => 'Karlovac',
                'address' => 'Vukmanićki put 45, Karlovac',
                'square_meters' => 90,
                'number_of_rooms' => 3,
                'images' => [
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/561502216.jpg?k=c08214aa28bfb353b469ac3931e9e4c4b7c79364459bc61a5fdb3165007d663d&o=',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/473503856.jpg?k=3cbd531e6202b97304ccebfbde2b619dc42e083223c0fb349e95767bd77fe594&o=',
                ],
            ],
            [
                'title' => 'Downtown Office Space',
                'description' => 'Modern office space in the heart of the city. Fully renovated, open plan, great natural light.',
                'price' => 380000,
                'category_id' => 1, // Sale
                'property_type_id' => 3, // Commercial/Land
                'location' => 'Zagreb',
                'address' => 'Savska cesta 32, Zagreb',
                'square_meters' => 110,
                'number_of_rooms' => 3,
                'images' => [
                    'https://m3.spitogatos.gr/299094404_1600x1200.jpg?v=20130730',
                    'https://m3.spitogatos.gr/299094410_1600x1200.jpg?v=20130730',
                ],
            ],
            [
                'title' => 'Renovated Old Town House',
                'description' => 'Charming renovated house in the historic old town. Stone walls, modern interior.',
                'price' => 450000,
                'category_id' => 1, // Sale
                'property_type_id' => 2, // House
                'location' => 'Dubrovnik',
                'address' => 'Zamanjina ulica 9, Dubrovnik',
                'square_meters' => 140,
                'number_of_rooms' => 4,
                'images' => [
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/211614358.jpg?k=cd363e60387789c5d8060ea053e33dfafe9160b1d652fe56023d0a72b22a44f2&o=',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/211614344.jpg?k=9a8bb0be78744c6bd350ab83c336ef4b72aed13681cf577c69492925c1f6d042&o=',
                ],
            ],
            [
                'title' => 'Affordable Apartment First-time Buyers',
                'description' => 'Great starter apartment for first-time buyers. Recently renovated, good location, quiet building.',
                'price' => 145000,
                'category_id' => 1, // Sale
                'property_type_id' => 1, // Apartment
                'location' => 'Slavonski Brod',
                'address' => 'Ul. Andrije Hebranga 18, Slavonski Brod',
                'square_meters' => 52,
                'number_of_rooms' => 2,
                'images' => [
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/552116722.jpg?k=07cd74631a279bc84fe849c30a2d28fdf2be98293f82b1464351e0c2ad966eaf&o=',
                    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/552116645.jpg?k=d1ad0f7f66952168ebce1c10fa80b5d5972ab83a76cb35483cedf33bbfdc1b0c&o=',
                ],
            ],
        ];

        foreach ($properties as $propertyData) {
            $images = $propertyData['images'];
            unset($propertyData['images']);

            $property = Property::create($propertyData);

            foreach ($images as $imageUrl) {
                PropertyImage::create([
                    'property_id' => $property->id,
                    'image_url' => $imageUrl,
                ]);
            }
        }
    }
}