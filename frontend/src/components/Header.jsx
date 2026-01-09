import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    const phone = import.meta.env.VITE_STORE_PHONE || '+911234567890';
    const wa = phone.replace(/\D/g, '');
    return (
        <header className="bg-gray-900 border-b border-gray-800"
        
        style={{height:"50px"}}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold tracking-wide">Supplement Shop</Link>
                <nav className="flex  items-center gap-4" >
                    <Link to="/products" className="text-sm">Products</Link>
                    <Link to="/brands" className="text-sm">Brands</Link>
                    <Link to="/contact" className="text-sm">Contact</Link>
                    <a href={`https://wa.me/${wa}`} className="btn-cta btn-whatsapp">WhatsApp</a>
                    <a href={`tel:${phone}`} className="btn-cta btn-primary">Call</a>
                </nav>
            </div>
        </header>
    )
}