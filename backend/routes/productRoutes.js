import express from 'express'
import Product from '../models/productModel'
import AsyncHandler from 'express-async-handler'

const router = express.Router()

// create json api from products.js and get on site
// @desc    Fetch all products
// @route   GET /api/products
// @access   Public

router.get('/', AsyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
}))

// create route to get single product by id
// @desc    Fetch single products
// @route   GET /api/products
// @access   Public
router.get('/:id', AsyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)

  if(product){
  res.json(product)
  }
  else {
    res.status(404).json({message: 'Product not found'})
  }
}))

export default router