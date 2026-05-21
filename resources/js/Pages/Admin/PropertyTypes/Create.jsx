import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, Head, router } from '@inertiajs/react';

export default function Index({ propertyTypes }) {
    const handleDelete = (id, name) => {
        if (confirm(`Delete property type "${name}"? Properties with this type will also be deleted.`)) {
            router.delete(`/admin/property-types/${id}`);
        }
    };

    return (
        <AdminLayout>
            <Head title="Admin - Property Types" />

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Property Types</h1>
                <Link
                    href="/admin/property-types/create"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    + Add Property Type
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Properties</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {propertyTypes.map((type) => (
                            <tr key={type.id}>
                                <td className="px-6 py-4">{type.id}</td>
                                <td className="px-6 py-4">{type.name}</td>
                                <td className="px-6 py-4">{type.properties_count}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <Link
                                        href={`/admin/property-types/${type.id}/edit`}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(type.id, type.name)}
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
        </AdminLayout>
    );
}