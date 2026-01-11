import React from 'react'


export default function Hero() {
    return (
        <section className="card flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
                <h1 className="text-4xl font-bold">Real Supplements. Real Store.</h1>
                <p className="mt-2 text-gray-300">Genuine products, local stock. Check availability on WhatsApp or call us.</p>
                <div className="mt-4 flex gap-3">
                    <a href="#" className="btn-cta btn-whatsapp">Order on WhatsApp</a>
                    <a href="#" className="btn-cta btn-primary">Call Store</a>
                </div>
            </div>
            <div className="w-56 h-56 bg-gray-800 rounded-xl flex items-center justify-center">
                <span className="text-gray-500">Gym Image</span>
            </div>
        </section>
    )
}