const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

// API Routes
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Sample Cart Route (to be expanded with user authentication)
let cart = [];
app.post('/api/cart', (req, res) => {
  const { productId, action } = req.body;
  if (action === 'add') {
    cart.push(productId);
  } else if (action === 'remove') {
    cart = cart.filter(item => item !== productId);
  }
  res.json(cart);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
