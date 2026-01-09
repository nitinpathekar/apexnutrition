const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const productsRoute = require('./routes/products');
const brandsRoute = require('./routes/brands');
const contactRoute = require('./routes/contact');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/products', productsRoute);
app.use('/api/brands', brandsRoute);
app.use('/api/contact', contactRoute);


const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
console.log('MongoDB connected');
app.listen(PORT, () => console.log('Server running on', PORT));
})
.catch(err => console.error(err));