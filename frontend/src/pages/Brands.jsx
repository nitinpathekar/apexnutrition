import React, { useEffect, useState } from 'react'
import API from '../api'


export default function Brands() {
    const [brands, setBrands] = useState([])
    useEffect(() => { API.get('/brands').then(r => setBrands(r.data)).catch(() => { }); }, [])
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Brands We Stock</h1>
            <p className="text-gray-300 mb-4">We keep a variety of fitness nutrition brands available in-store. Brand availability may vary.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brands.map(b => (
                    <div key={b._id} className="card flex items-center gap-3">
                        <img src={b.logo || 'https://via.placeholder.com/100x40'} alt={b.name} />
                        <div>
                            <div className="font-semibold">{b.name}</div>
                            {b.note && <div className="text-sm text-gray-400">{b.note}</div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}