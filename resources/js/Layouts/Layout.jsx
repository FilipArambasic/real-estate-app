import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Layout({ children }) {
    const { auth } = usePage().props;
    const user = auth?.user;

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Header / Navigation */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Logo / Home link */}
                        <div className="flex items-center">
                            <Link href="/" className="text-xl font-bold text-blue-600">
                                KnightX Real Estate
                            </Link>
                        </div>

                        {/* Navigation links */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link href="/properties" className="text-gray-700 hover:text-blue-600">
                                Properties
                            </Link>
                            <Link href="/categories" className="text-gray-700 hover:text-blue-600">
                                Categories
                            </Link>
                        </div>

                        {/* User menu or Login/Register */}
                        <div className="flex items-center space-x-4">
                            {user ? (
                                <>
                                    <span className="text-gray-700">
                                        Welcome, {user.name}
                                    </span>
                                    {user.role === 'admin' && (
                                        <Link href="/admin" className="text-gray-700 hover:text-blue-600">
                                            Admin
                                        </Link>
                                    )}
                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Logout
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link href="/login" className="text-gray-700 hover:text-blue-600">
                                        Login
                                    </Link>
                                    <Link href="/register" className="text-gray-700 hover:text-blue-600">
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main content - grows to push footer down */}
            <main className="flex-grow py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>

            {/* Footer - stays at bottom */}
            <footer className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-gray-500">
                        © {new Date().getFullYear()} KnightX Real Estate. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}