import React, { useState } from 'react';
import Layout from '@/Layouts/Layout';
import { Head, router } from '@inertiajs/react';

export default function Show({ property }) {
    const [mainImage, setMainImage] = useState(
        property.images && property.images.length > 0 
            ? property.images[0].image_url 
            : 'https://via.placeholder.com/800x400?text=No+Image'
    );

    const [inquiry, setInquiry] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleChange = (e) => {
        setInquiry({ ...inquiry, [e.target.name]: e.target.value });
    };

    const submitInquiry = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        setSuccess(false);

        try {
            await router.post('/api/inquiries', {
                property_id: property.id,
                ...inquiry,
            });
            setSuccess(true);
            setInquiry({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    const goToPreviousImage = () => {
        if (!property.images || property.images.length <= 1) return;
        const currentIndex = property.images.findIndex(img => img.image_url === mainImage);
        const prevIndex = (currentIndex - 1 + property.images.length) % property.images.length;
        setMainImage(property.images[prevIndex].image_url);
    };

    const goToNextImage = () => {
        if (!property.images || property.images.length <= 1) return;
        const currentIndex = property.images.findIndex(img => img.image_url === mainImage);
        const nextIndex = (currentIndex + 1) % property.images.length;
        setMainImage(property.images[nextIndex].image_url);
    };

    return (
        <Layout>
            <Head title={property.title} />

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Main image with navigation arrows */}
                <div className="relative">
                    <div className="relative w-full h-96 bg-gray-100 flex items-center justify-center">
                        <img 
                            src={mainImage} 
                            alt={property.title}
                            className="max-w-full max-h-full object-contain cursor-pointer"
                            onClick={() => {
                                const index = property.images?.findIndex(img => img.image_url === mainImage);
                                openLightbox(index >= 0 ? index : 0);
                            }}
                        />
                        
                        {/* Left arrow */}
                        {property.images && property.images.length > 1 && (
                            <button
                                onClick={goToPreviousImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl w-12 h-12 rounded-full hover:bg-opacity-75 hover:scale-110 transition focus:outline-none flex items-center justify-center"
                            >
                                ‹
                            </button>
                        )}
                        
                        {/* Right arrow */}
                        {property.images && property.images.length > 1 && (
                            <button
                                onClick={goToNextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl w-12 h-12 rounded-full hover:bg-opacity-75 hover:scale-110 transition focus:outline-none flex items-center justify-center"
                            >
                                ›
                            </button>
                        )}
                    </div>

                    {/* Thumbnails */}
                    {property.images && property.images.length > 1 && (
                        <div className="flex gap-2 p-4 bg-gray-50 overflow-x-auto">
                            {property.images.map((img, idx) => (
                                <img 
                                    key={idx}
                                    src={img.image_url}
                                    alt={`${property.title} - ${idx + 1}`}
                                    className={`w-24 h-24 object-cover rounded cursor-pointer hover:opacity-80 transition ${mainImage === img.image_url ? 'ring-2 ring-blue-500' : ''}`}
                                    onClick={() => setMainImage(img.image_url)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left column - Property details */}
                        <div className="lg:col-span-2">
                            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                            
                            <div className="flex gap-4 mb-4">
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    {property.category?.name}
                                </span>
                                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                    {property.property_type?.name}
                                </span>
                            </div>

                            <p className="text-3xl text-blue-600 font-bold mb-4">
                                €{property.price.toLocaleString()}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-50 p-3 rounded">
                                    <p className="text-gray-500 text-sm">Location</p>
                                    <p className="font-semibold">{property.location}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded">
                                    <p className="text-gray-500 text-sm">Address</p>
                                    <p className="font-semibold">{property.address}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded">
                                    <p className="text-gray-500 text-sm">Square Meters</p>
                                    <p className="font-semibold">{property.square_meters} m²</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded">
                                    <p className="text-gray-500 text-sm">Number of Rooms</p>
                                    <p className="font-semibold">{property.number_of_rooms}</p>
                                </div>
                            </div>

                            <h2 className="text-xl font-bold mb-2">Description</h2>
                            <p className="text-gray-700 mb-6">{property.description}</p>
                        </div>

                        {/* Right column - Inquiry form */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Send Inquiry</h2>
                            
                            {success && (
                                <div className="bg-green-100 text-green-800 p-3 rounded mb-4">
                                    Inquiry sent successfully!
                                </div>
                            )}
                            
                            {error && (
                                <div className="bg-red-100 text-red-800 p-3 rounded mb-4">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={submitInquiry}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-1">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={inquiry.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-1">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={inquiry.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={inquiry.phone}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-1">Message *</label>
                                    <textarea
                                        name="message"
                                        value={inquiry.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                                >
                                    {submitting ? 'Sending...' : 'Send Inquiry'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && property.images && property.images.length > 0 && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    <button 
                        className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
                        onClick={closeLightbox}
                    >
                        ✕
                    </button>
                    
                    <button 
                        className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10"
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    >
                        ‹
                    </button>
                    
                    <img 
                        src={property.images[currentImageIndex].image_url}
                        alt={property.title}
                        className="max-w-[90vw] max-h-[90vh] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                    
                    <button 
                        className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10"
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    >
                        ›
                    </button>
                    
                    <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                        {currentImageIndex + 1} / {property.images.length}
                    </div>
                </div>
            )}
        </Layout>
    );
}