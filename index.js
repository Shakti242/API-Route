
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express()
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello from NODE API");
});
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})

mongoose.connect("mongodb+srv://shakti24201:Shina2421.@backend.5fa6s.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
    .then(() => {
        console.log("connected to DB");
        app.listen(3000, () => {
            console.log('listening on port 3000');
        })
    })
    .catch(() => {
        console.log("connection failed:");
    });
