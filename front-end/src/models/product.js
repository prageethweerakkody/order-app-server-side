// Product model.js
//Require Mongoose
const mongoose = require('mongoose');
console.log(`inside models`)
const productSchema = new  mongoose.Schema({
    title: String, // String is shorthand for {type: String}
    price: Number,
    image: String
});

module.exports = mongoose.model('Product', productSchema);