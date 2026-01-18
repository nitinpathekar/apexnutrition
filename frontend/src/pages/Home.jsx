import React, { useEffect, useState } from 'react'
import API from '../api'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import PopularBrands from '../components/PopularBrands'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from './Contact.jsx'


export default function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => { API.get('/products').then(r => setProducts(r.data)).catch(() => { }); }, [])
    const categories = ['Protein', 'Creatine', 'Mass Gainer', 'Pre-workout', 'Oats']
    return (
        <div className="space-y-8">
            <Hero />

            <section>



           <Categories />
            </section>


            <section>
                <PopularBrands/>
            </section>



            <section>
               <WhyChooseUs />
                <p className="mt-2 text-gray-300">Local store · Genuine sourcing · Check availability before visiting — contact on WhatsApp or call.</p>
            </section>

            <Contact />
        </div >
    )
}