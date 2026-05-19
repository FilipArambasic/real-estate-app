import React, { useState } from 'react';
import Layout from '@/Layouts/Layout';
import { Link, Head, router } from '@inertiajs/react';

export default function Index({ properties, categories, propertyTypes, filters }) {
    const [searchParams, setSearchParams] = useState({
        search: filters.search || '',
        category: filters.category || '',
        property_type: filters.property_type || '',
        location: filters.location || '',
        min_price: filters.min_price || '',
        max_price: filters.max_price || '',
        sort: filters.sort || '',
    });

    const handleFilter = (e) => {
        const { name, value } = e.target;
        setSearchParams(prev => ({ ...prev, [name]: value }));
    };

    const applyFilters = () => {
        router.get('/properties', searchParams, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const clearFilters = () => {
        setSearchParams({
            search: '',
            category: '',
            property_type: '',
            location: '',
            min_price: '',
            max_price: '',
            sort: '',
        });
        router.get('/properties', {});
    };

    return (
        <Layout>
            <Head title="Properties" />

            <h1 className="text-3xl font-bold mb-6">All Properties</h1>

            {/* Filters section */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        value={searchParams.search}
                        onChange={handleFilter}
                        className="border rounded-lg px-3 py-2"
                    />
                    <select
                        name="category"
                        value={searchParams.category}
                        onChange={handleFilter}
                        className="border rounded-lg px-3 py-2"
                    >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                    <select
                        name="property_type"
                        value={searchParams.property_type}
                        onChange={handleFilter}
                        className="border rounded-lg px-3 py-2"
                    >
                        <option value="">All Types</option>
                        {propertyTypes.map(type => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={searchParams.location}
                        onChange={handleFilter}
                        className="border rounded-lg px-3 py-2"
                    />
                    <input
                        type="number"
                        name="min_price"
                        placeholder="Min Price"
                        value={searchParams.min_price}
                        onChange={handleFilter}
                        className="border rounded-lg px-3 py-2"
                    />
                    <input
                        type="number"
                        name="max_price"
                        placeholder="Max Price"
                        value={searchParams.max_price}
                        onChange={handleFilter}
                        className="border rounded-lg px-3 py-2"
                    />
                    <select
                        name="sort"
                        value={searchParams.sort}
                        onChange={handleFilter}
                        className="border rounded-lg px-3 py-2"
                    >
                        <option value="">Sort by</option>
                        <option value="name_asc">A-Z</option>
                        <option value="name_desc">Z-A</option>
                        <option value="price_asc">Price: Low to High</option>
                        <option value="price_desc">Price: High to Low</option>
                    </select>
                    <div className="flex gap-2">
                        <button
                            onClick={applyFilters}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Apply
                        </button>
                        <button
                            onClick={clearFilters}
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>

            {/* Properties grid */}
            {properties.data.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <p className="text-gray-500">No properties found.</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {properties.data.map((property) => (
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

                    {/* Pagination */}
                    {properties.links && properties.links.length > 3 && (
                        <div className="flex justify-center mt-8 gap-2">
                            {properties.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || '#'}
                                    className={`px-3 py-1 rounded ${link.active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
        </Layout>
    );
}