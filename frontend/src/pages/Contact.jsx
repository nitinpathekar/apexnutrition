import React from 'react'


export default function Contact() {
    const phone = import.meta.env.VITE_STORE_PHONE || '+911234567890';
    const wa = phone.replace(/\D/g, '');
    const address = '1st floor, Ekta Gym Building, Apex Nutrition, Sagourkuti Dhar, Madhya Pradesh, India, 54775';
    const gmaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src="/about-image.png" alt="About Apex" className="rounded-lg w-full" />
                </div>
                <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-3xl font-bold mb-4">About Apex Nutrition</h3>
                    <p className="text-gray-700">We provide premium gym supplements to help you achieve your fitness goals, with personalized advice and fast delivery.</p>
                </div>
            </div>
        </section>

    )
}