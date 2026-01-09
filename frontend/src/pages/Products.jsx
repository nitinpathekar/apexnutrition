import React, { useEffect, useState } from 'react'
import API from '../api'
import ProductCard from '../components/ProductCard'


export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => { API.get('/products').then(r => setProducts(r.data)).catch(() => { }); }, [])
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map(p => <ProductCard key={p._id} product={p} />)}
            </div>
        </div>
    )
}