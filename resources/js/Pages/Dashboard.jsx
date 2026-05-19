import React from 'react';
import Layout from '@/Layouts/Layout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;
    
    return (
        <Layout>
            <Head title="Dashboard" />
            
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                {auth && auth.user ? (
                    <>
                        <p className="text-gray-600">
                            Welcome, {auth.user.name}!
                        </p>
                        <p className="text-gray-500 mt-2">
                            Your role: {auth.user.role}
                        </p>
                    </>
                ) : (
                    <p className="text-gray-600">Loading...</p>
                )}
            </div>
        </Layout>
    );
}