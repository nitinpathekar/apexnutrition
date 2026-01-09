import React from 'react'
import { Link } from 'react-router-dom'


export default function ProductCard({ product }) {
    const phone = import.meta.env.VITE_STORE_PHONE || '+911234567890';
    const wa = phone.replace(/\D/g, '');
    const waText = `Hi, is *${product.name}* available in-store?`;
    return (
        <div className="card">
            <Link to={`/products/${product._id}`}>
                <img src={product.images?.[0] || 'https://via.placeholder.com/400'} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
            </Link>
            <div className="mt-3">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-400">{product.weight} {product.flavor ? `• ${product.flavor}` : ''}</p>
                {product.mrp && <p className="mt-2 text-sm">MRP: ₹{product.mrp}</p>}
                <div className="mt-3 flex gap-2">
                    <a href={`https://wa.me/${wa}?text=${encodeURIComponent(waText)}`} className="btn-cta btn-whatsapp text-sm">Order on WhatsApp</a>
                    <a href={`tel:${phone}`} className="btn-cta btn-primary text-sm">Call Store</a>
                    <Link to={`/products/${product._id}`} className="ml-auto text-sm text-gray-300">Check Availability</Link>
                </div>
            </div>
        </div>
    )
}