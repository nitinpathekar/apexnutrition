import React from 'react'
import { Link } from 'react-router-dom'


export default function ProductCard({ product }) {
    const phone = import.meta.env.VITE_STORE_PHONE || '+911234567890';
    const wa = phone.replace(/\D/g, '');
    const waText = `Hi, is *${product.name}* available in-store?`;
    return (
        <section id="products" className="py-20">
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold mb-8 text-center">Our Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Example Product Card */}
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <img src="/protein.png" alt="Protein Powder" className="w-full h-48 object-cover rounded-md mb-4" />
                        <h4 className="font-semibold text-lg">Protein Powder</h4>
                        <p className="text-gray-600">High-quality whey-free protein for muscle gain.</p>
                        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Buy Now</button>
                    </div>
                    {/* Repeat cards */}
                </div>
            </div>
        </section>

    )
}