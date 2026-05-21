import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Edit({ category }) {
    const [name, setName] = useState(category.name);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        router.put(`/admin/categories/${category.id}`, { name });
    };

    return (
        <AdminLayout>
            <Head title="Admin - Edit Category" />

            <h1 className="text-2xl font-bold mb-6">Edit Category</h1>

            <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Category Name *</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full border rounded-lg px-3 py-2"
                        />
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                        >
                            {submitting ? 'Updating...' : 'Update Category'}
                        </button>
                        <Link
                            href="/admin/categories"
                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}