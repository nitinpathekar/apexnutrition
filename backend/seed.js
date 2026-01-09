const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');
const Brand = require('./models/Brand');


const data = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    await Product.deleteMany({});
    await Brand.deleteMany({});


    const brands = [
        { name: 'MuscleX', logo: 'https://via.placeholder.com/80x40?text=MuscleX' },
        { name: 'ProFuel', logo: 'https://via.placeholder.com/80x40?text=ProFuel' },
        { name: 'GainKing', logo: 'https://via.placeholder.com/80x40?text=GainKing' }
    ];
    await Brand.insertMany(brands);


    const products = [
        {
            name: 'MuscleX Whey Protein', brand: 'MuscleX', weight: '2 kg', flavor: 'Chocolate',
            mrp: 2999, images: ['https://via.placeholder.com/600x600?text=Whey+Protein'],
            description: 'High-quality whey concentrate. Post-workout recovery support.',
            nutrition: { servingSize: '30g', protein: '24g', carbs: '3g', fat: '1.5g' },
            manufacturer: 'MuscleX Labs'
        },
        {
            name: 'ProFuel Creatine Monohydrate', brand: 'ProFuel', weight: '300g', flavor: 'Unflavored',
            mrp: 799, images: ['https://via.placeholder.com/600x600?text=Creatine'],
            description: 'Micronized creatine for strength and power.',
            manufacturer: 'ProFuel Pvt Ltd'
        }
    ];


    await Product.insertMany(products);
    console.log('Seeded DB');
    process.exit();
};


data();