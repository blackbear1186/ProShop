/*
  1. Copy userModel function and paste here
  2. Change to productSchema and add user
  3. Change email to image, password to brand, isAdmin to category String
  4, Add description, rating, numReviews, price, countInStock: Number, true, default 0
  5. Above rating place reviews: [reviewSchema],
  6. Above function place const reviewSchema = mongoose.Schema({})
  7. place const Product = mongoose.model
  8. export Product
*/

import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  name: {type: String, required: true },
  rating: {type: Number, required: true },
  comments: {type: String, required: true },

},{
  timestamps: true
})

const productSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String, 
    required: true
  },
  image: {
    type: String, 
    required: true, 
    // Make sure every email is unique
    unique: true
  },
  brand: {
    type: String, 
    required: true
  },
  category: {
    type: String, 
    required: true,
    default: false
  },
  description: {
    type: String, 
    required: true,
    default: false
  },
  rating: {
    type: Number, 
    required: true,
    default: 0
  },
  numReviews: {
    type: Number, 
    required: true,
    default: 0
  },
  price: {
    type: Number, 
    required: true,
    default: 0
  },
  countInStock: {
    type: Number, 
    required: true,
    default: 0
  },
}, {
  timestamps: true
})

const Product = mongoose.Schema('Product', productSchema)

export default Product