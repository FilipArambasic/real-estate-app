import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    const { auth } = usePage().props;
    const user = auth?.user;

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Admin Header */}
            <nav className="bg-gray-800 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center space-x-6">
                            <Link href="/admin" className="text-xl font-bold">
                                Admin Panel
                            </Link>
                            <Link href="/admin/properties" className="hover:text-gray-300">
                                Properties
                            </Link>
                            <Link href="/admin/categories" className="hover:text-gray-300">
                                Categories
                            </Link>
                            <Link href="/admin/property-types" className="hover:text-gray-300">
                                Property Types
                            </Link>
                            <Link href="/admin/inquiries" className="hover:text-gray-300">
                                Inquiries
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span>{user?.name}</span>
                            <Link href="/" className="hover:text-gray-300">
                                View Site
                            </Link>
                            <Link href="/logout" method="post" as="button" className="text-red-400 hover:text-red-300">
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main content */}
            <main className="flex-grow py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    );
}