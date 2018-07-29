const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  order: [
    {
      productId: {
        type: String,
        required: true
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
  }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order