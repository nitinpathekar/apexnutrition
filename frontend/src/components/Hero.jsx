import React from 'react'


export default function Hero() {
    return (
        <section id="home" className="bg-gray-100 py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">Fuel Your Fitness with Apex Nutrition</h2>
                    <p className="text-gray-700 mb-6">Premium supplements for muscle gain, endurance, and overall health.</p>
                    <div className="space-x-4">
                        <a href="#products" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">Shop Now</a>
                        <a href="#contact" className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400">Contact Us</a>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img src="/hero-image.png" alt="Apex Nutrition" className="w-full rounded-lg" />
                </div>
            </div>
        </section>

    )
}