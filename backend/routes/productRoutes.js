/*
  1. Import express
  2. Declare const router equals express.Router()
  3. Export default router bottom 
  4. Grab app.get->products & products:id from server.js and paste
  5. Change app to router & /api/products to '/' & /api/products/:id to '/:id'
  6. Import Product from productModel.js
  7. Set const products equal to Product.find({}) empty object to get everything
  8. Mongoose method returns promise so add async and await to function
  9. Install express-async-handler 
  10. Import AsyncHandler from express-async-handler
  11. Wrap asyc function with AsyncHandler
  12. Use Product.findById function for routre that get's single product by id
*/

import express from 'express'
import Product from '../models/productModel.js'
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