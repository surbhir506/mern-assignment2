const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/products', async (req, res) => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        res.send(data.products);
    } catch (error) {
        res.status(500).send('Error fetching product data');
    }
});

app.get('/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const product = await response.json();
        res.send(product);
    } catch (error) {
        res.status(500).send('Error fetching product data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
