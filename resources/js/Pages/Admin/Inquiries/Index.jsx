import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ inquiries }) {
    const [updating, setUpdating] = useState(null);

    const handleStatusChange = (id, status) => {
        setUpdating(id);
        router.put(`/admin/inquiries/${id}`, { status }, {
            preserveScroll: true,
            onFinish: () => setUpdating(null),
        });
    };

    const getStatusBadge = (status) => {
        const colors = {
            new: 'bg-yellow-100 text-yellow-800',
            contacted: 'bg-blue-100 text-blue-800',
            closed: 'bg-green-100 text-green-800',
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    return (
        <AdminLayout>
            <Head title="Admin - Inquiries" />

            <h1 className="text-2xl font-bold mb-6">Property Inquiries</h1>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {inquiries.data.map((inquiry) => (
                            <tr key={inquiry.id}>
                                <td className="px-6 py-4">{inquiry.id}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        href={`/properties/${inquiry.property_id}`}
                                        target="_blank"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        {inquiry.property?.title || `Property #${inquiry.property_id}`}
                                    </Link>
                                </td>
                                <td className="px-6 py-4">{inquiry.name}</td>
                                <td className="px-6 py-4">{inquiry.email}</td>
                                <td className="px-6 py-4">{inquiry.phone}</td>
                                <td className="px-6 py-4 max-w-xs truncate" title={inquiry.message}>
                                    {inquiry.message}
                                </td>
                                <td className="px-6 py-4">
                                    <select
                                        value={inquiry.status}
                                        onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                                        disabled={updating === inquiry.id}
                                        className={`px-2 py-1 rounded text-sm font-medium border ${getStatusBadge(inquiry.status)}`}
                                    >
                                        <option value="new">New</option>
                                        <option value="contacted">Contacted</option>
                                        <option value="closed">Closed</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(inquiry.created_at).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {inquiries.links && inquiries.links.length > 3 && (
                <div className="flex justify-center mt-6 gap-2">
                    {inquiries.links.map((link, i) => (
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