import React, { useEffect, useState } from 'react'
import API from '../api'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'


export default function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => { API.get('/products').then(r => setProducts(r.data)).catch(() => { }); }, [])
    const categories = ['Protein', 'Creatine', 'Mass Gainer', 'Pre-workout', 'Oats']
    return (
        <div className="space-y-8">
            <Hero />


            <section><h2 className="text-2xl font-bold mb-4">Categories</h2>
                <div className="flex gap-3">
                    {categories.map(c => <div key={c} className="card px-4 py-3">{c}</div>)}
                </div>
            </section >


            <section>
                <h2 className="text-2xl font-bold">Popular Brands</h2>
                <div className="mt-3 flex gap-4 items-center">
                    {/* logos small, non-official */}
                    <img src="https://via.placeholder.com/100x40?text=MuscleX" alt="" />
                    <img src="https://via.placeholder.com/100x40?text=ProFuel" alt="" />
                    <img src="https://via.placeholder.com/100x40?text=GainKing" alt="" />
                </div>
            </section>


            <section>
                <h2 className="text-2xl font-bold">Popular Products</h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.slice(0, 6).map(p => <ProductCard key={p._id} product={p} />)}
                </div>
            </section>


            <section>
                <h2 className="text-2xl font-bold">Why choose us</h2>
                <p className="mt-2 text-gray-300">Local store · Genuine sourcing · Check availability before visiting — contact on WhatsApp or call.</p>
            </section>
        </div >
    )
}