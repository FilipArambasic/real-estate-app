import React from 'react';
import Layout from '@/Layouts/Layout';
import { Link, Head } from '@inertiajs/react';

export default function Home({ latestProperties, categories }) {
    return (
        <Layout>
            <Head title="Home" />

            {/* Hero section */}
            <div className="bg-blue-600 text-white rounded-lg p-8 mb-8">
                <h1 className="text-4xl font-bold mb-4">
                    Find Your Dream Property
                </h1>
                <p className="text-xl mb-6">
                    Discover the best real estate opportunities in Croatia
                </p>
                <Link
                    href="/properties"
                    className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                >
                    Browse Properties
                </Link>
            </div>

            {/* Categories section */}
            <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/category/${category.id}`}
                        className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">
                            {category.name}
                        </h3>
                    </Link>
                ))}
            </div>

            {/* Latest properties section */}
            <h2 className="text-2xl font-bold mb-4">Latest Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestProperties.map((property) => (
                    <Link
                        key={property.id}
                        href={`/properties/${property.id}`}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                        {property.images && property.images.length > 0 && (
                            <img
                                src={property.images[0].image_url}
                                alt={property.title}
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {property.title}
                            </h3>
                            <p className="text-blue-600 font-bold mt-2">
                                €{property.price.toLocaleString()}
                            </p>
                            <p className="text-gray-500 text-sm mt-1">
                                {property.location} • {property.square_meters} m²
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}