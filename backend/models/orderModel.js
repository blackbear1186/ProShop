/*
  1. Copy and paste userModel here
  2. Change function name
  3. Change name to user, email to orderItems[] {name, qty, image, price, product}
  4. Add shippingAddress, paymentMethodm, paymentResult, taxPrice
*/

import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref: 'User'
  },
  orderItems: [
    {
      name: { type: String, require: true},
      qty: { type: Number, require: true},
      image: { type: String, require: true},
      price: { type: Number, require: true},
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      }

    }
  ],
  shippingAddress: {
    address: {type: String, required: true},
    city: {type: String, required: true},
    postalCode: {type: String, required: true},
    Country: {type: String, required: true},

  },
  paymentMethod: {
    type: String, 
    required: true,
  },
  // data come from paypal
  paymentResult: {
    id: { type: String},
    status: { type: String},
    update_time: { type: String},
    email_address: { type: String},

  },
  totalPrice: {
    type: Number, 
    required: true,
    default: 0.0,
  },
  isPaid: {
    type: Boolean, 
    required: true,
    default: false,
  },
  paidAt: {
    type: Date,
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false
  },
  deliveredAt: {
    type: Date,
  }
}, {
  timestamps: true
})

const Order = mongoose.Schema('Order', orderSchema)

export default Order