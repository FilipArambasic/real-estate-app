import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Create() {
    const [name, setName] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        router.post('/admin/categories', { name });
    };

    return (
        <AdminLayout>
            <Head title="Admin - Create Category" />

            <h1 className="text-2xl font-bold mb-6">Create New Category</h1>

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
                            placeholder="e.g., Sale, Rent, New Construction"
                        />
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                        >
                            {submitting ? 'Creating...' : 'Create Category'}
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