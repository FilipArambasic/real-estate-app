import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ stats }) {
    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-500 text-sm">Properties</h3>
                    <p className="text-3xl font-bold">{stats.properties}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-500 text-sm">Categories</h3>
                    <p className="text-3xl font-bold">{stats.categories}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-500 text-sm">Property Types</h3>
                    <p className="text-3xl font-bold">{stats.propertyTypes}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-500 text-sm">Inquiries</h3>
                    <p className="text-3xl font-bold">{stats.inquiries}</p>
                </div>
            </div>
        </AdminLayout>
    );
}