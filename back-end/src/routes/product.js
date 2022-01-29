// Product.js
//Require Mongoose
const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/products', async (req, res) => {
    console.log(`inside routes`)
    try {
        const products = await product.find({});
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router;

/*
router.post('/', async (req, res) => {
    try {
        const product = new Product({
            title: req.body.title,
            price: req.body.price,
            image: req.body.image
        });

        const newProduct = await Product.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json(error.message);
    }
});
*/


