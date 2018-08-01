const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  order: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      amount: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  totalPrice: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order