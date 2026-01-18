import React from 'react'


export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 text-center">
            <p>&copy; 2026 Apex Nutrition. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="hover:text-green-500">Facebook</a>
                <a href="#" className="hover:text-green-500">Instagram</a>
            </div>
        </footer>

    )
}