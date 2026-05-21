import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Create({ categories, propertyTypes }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        price: '',
        category_id: '',
        property_type_id: '',
        location: '',
        address: '',
        square_meters: '',
        number_of_rooms: '',
    });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        router.post('/admin/properties', form);
    };

    return (
        <AdminLayout>
            <Head title="Admin - Create Property" />

            <h1 className="text-2xl font-bold mb-6">Create New Property</h1>

            <div className="bg-white rounded-lg shadow-md p-6">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Title *</label>
                            <input
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Price (€) *</label>
                            <input
                                type="number"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Category *</label>
                            <select
                                name="category_id"
                                value={form.category_id}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2"
                            >
                                <option value="">Select Category</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Property Type *</label>
                            <select
                                name="property_type_id"
                                value={form.property_type_id}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2"
                            >
                                <option value="">Select Type</option>
                                {propertyTypes.map(type => (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Location *</label>
                            <input
                                type="text"
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Address *</label>
                            <input
                                type="text"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Square Meters *</label>
                            <input
                                type="number"
                                name="square_meters"
                                value={form.square_meters}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Number of Rooms *</label>
                            <input
                                type="number"
                                name="number_of_rooms"
                                value={form.number_of_rooms}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-gray-700 mb-1">Description *</label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full border rounded-lg px-3 py-2"
                            ></textarea>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                        >
                            {submitting ? 'Creating...' : 'Create Property'}
                        </button>
                        <Link
                            href="/admin/properties"
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