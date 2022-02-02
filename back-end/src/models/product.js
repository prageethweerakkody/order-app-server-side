// Product model.js
//Require Mongoose
const mongoose = require('mongoose');
console.log(`inside models`)
const productSchema = new  mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    price: Number,
    image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);