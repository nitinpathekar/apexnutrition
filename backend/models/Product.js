const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String },
    weight: { type: String },
    flavor: { type: String },
    mrp: { type: Number },
    images: { type: [String], default: [] },
    description: { type: String },
    nutrition: { type: Object },
    manufacturer: { type: String },
    inStore: { type: Boolean, default: true }
}, { timestamps: true });


module.exports = mongoose.model('Product', ProductSchema);