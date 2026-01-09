import React from 'react'


export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800 text-gray-400 py-6">
            <div className="container mx-auto px-4 text-center text-sm">
                <p>© {new Date().getFullYear()} Local Supplement Shop — We show products available in-store.</p>
                <p className="mt-2">This website is intended to showcase products available at our store. We do not process online payments or offer direct online sales. For availability and purchase, please contact us directly.</p>
            </div>
        </footer>
    )
}