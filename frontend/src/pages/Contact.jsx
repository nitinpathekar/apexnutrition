import React from 'react'


export default function Contact(){
const phone = import.meta.env.VITE_STORE_PHONE || '+911234567890';
const wa = phone.replace(/\D/g,'');
const address = '123 Fitness Street, Your City';
const gmaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
return (
<div className="space-y-4">
<h1 className="text-3xl font-bold">Contact</h1>
<p className="text-gray-300">Phone: <a href={`tel:${phone}`} className="text-green-400">{phone}</a></p>
<p>WhatsApp: <a href={`https://wa.me/${wa}`} className="text-green-400">Open Chat</a></p>
<p>Address: {address}</p>
<p><a href={gmaps} target="_blank" rel="noreferrer" className="underline">Open in Google Maps</a></p>
</div>
)
}