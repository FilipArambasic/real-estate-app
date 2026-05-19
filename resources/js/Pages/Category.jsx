import React from 'react';
import Layout from '@/Layouts/Layout';
import { Link, Head } from '@inertiajs/react';

export default function Category({ category }) {
    return (
        <Layout>
            <Head title={category.name} />

            <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
            <p className="text-gray-600 mb-6">
                {category.properties.length} properties found
            </p>

            {category.properties.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <p className="text-gray-500">No properties in this category yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.properties.map((property) => (
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
                                <p className="text-gray-400 text-xs mt-2">
                                    {property.property_type?.name}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </Layout>
    );
}