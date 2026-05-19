import React from 'react';
import Layout from '@/Layouts/Layout';
import { Link, Head } from '@inertiajs/react';

export default function Categories({ categories }) {
    return (
        <Layout>
            <Head title="Categories" />

            <h1 className="text-3xl font-bold mb-6">Property Categories</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/category/${category.id}`}
                        className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {category.name}
                        </h2>
                        <p className="text-gray-500">
                            {category.properties_count} properties
                        </p>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}