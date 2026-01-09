const mongoose = require('mongoose');


const BrandSchema = new mongoose.Schema({
name: { type: String, required: true },
logo: { type: String },
note: { type: String }
});


module.exports = mongoose.model('Brand', BrandSchema);