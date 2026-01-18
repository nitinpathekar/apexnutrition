import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Apex Nutrition</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-green-500">Home</a>
          <a href="#products" className="hover:text-green-500">Products</a>
          <a href="#about" className="hover:text-green-500">About</a>
          <a href="#contact" className="hover:text-green-500">Contact</a>
          <a href="tel:+919522784645" className="ml-4 text-white bg-green-500 px-4 py-2 rounded">Call</a>
          <a href="https://wa.me/+919522784645" target="_blank" className="ml-2 text-white bg-green-600 px-4 py-2 rounded">WhatsApp</a>
        </nav>
      </div>
    </header>

  );
}
