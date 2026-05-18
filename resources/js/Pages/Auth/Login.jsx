import React, { useEffect } from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <Layout>
            <Head title="Login" />
            
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                
                {status && (
                    <div className="mb-4 text-sm text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                        {errors.email && (
                            <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                        {errors.password && (
                            <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-4">
                    <Link href="/register" className="text-blue-600 hover:underline">
                        Don't have an account? Register
                    </Link>
                </div>
            </div>
        </Layout>
    );
}