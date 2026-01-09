import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../api'


export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    useEffect(() => { if (id) API.get(`/products/${id}`).then(r => setProduct(r.data)).catch(() => { }); }, [id])
    if (!product) return <div>Loading...</div>
    const phone = import.meta.env.VITE_STORE_PHONE || '+911234567890';
    const wa = phone.replace(/\D/g, '');
    const waText = `Hi, is *${product.name}* available in-store?`;
    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <img src={product.images?.[0] || 'https://via.placeholder.com/600'} alt="" className="w-full h-96 object-cover rounded-lg" />
                <div>
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p className="text-gray-300 mt-2">{product.weight} {product.flavor && `• ${product.flavor}`}</p>
                    {product.mrp && <p className="mt-2">MRP: ₹{product.mrp}</p>}


                    <div className="mt-4 flex gap-3">
                        <a href={`https://wa.me/${wa}?text=${encodeURIComponent(waText)}`} className="btn-cta btn-whatsapp">Enquire on WhatsApp</a>
                        <a href={`tel:${phone}`} className="btn-cta btn-primary">Call Store</a>
                    </div>
                    <div className="mt-6">
                        <h3 className="font-semibold">Description</h3>
                        <p className="text-gray-300 mt-2">{product.description}</p>
                    </div>


                    {product.nutrition && (
                        <div className="mt-4">
                            <h3 className="font-semibold">Nutrition</h3>
                            <pre className="text-sm text-gray-300 mt-2">{JSON.stringify(product.nutrition, null, 2)}</pre>
                        </div>
                    )}


                    {product.manufacturer && (
                        <div className="mt-4">
                            <h3 className="font-semibold">Manufacturer</h3>
                            <p className="text-gray-300 mt-1">{product.manufacturer}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}