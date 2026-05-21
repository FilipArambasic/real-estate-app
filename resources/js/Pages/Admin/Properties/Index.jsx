import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, Head, router } from '@inertiajs/react';

export default function Index({ properties }) {
    const handleDelete = (id, title) => {
        if (confirm(`Delete "${title}"? This action cannot be undone.`)) {
            router.delete(`/admin/properties/${id}`);
        }
    };

    return (
        <AdminLayout>
            <Head title="Admin - Properties" />

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Properties</h1>
                <Link
                    href="/admin/properties/create"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    + Add Property
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {properties.data.map((property) => (
                            <tr key={property.id}>
                                <td className="px-6 py-4">{property.id}</td>
                                <td className="px-6 py-4">{property.title}</td>
                                <td className="px-6 py-4">€{property.price.toLocaleString()}</td>
                                <td className="px-6 py-4">{property.category?.name}</td>
                                <td className="px-6 py-4">{property.property_type?.name}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <Link
                                        href={`/admin/properties/${property.id}/edit`}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(property.id, property.title)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {properties.links && properties.links.length > 3 && (
                <div className="flex justify-center mt-6 gap-2">
                    {properties.links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.url || '#'}
                            className={`px-3 py-1 rounded ${link.active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            )}
        </AdminLayout>
    );
}