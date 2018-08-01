const db = require('../models')
const jwt = require('jsonwebtoken')

exports.purchaseConfirm = async function(req, res, next) {
  try {
    // const token = req.headers.authorization.split(' ')[1]
    const newOrders = await db.Order.create(req.body)
    newOrders.save((err, data) => {
      if (err) {
        return next(err)
      }
      data.order.map(async (order) => {
        const updateProduct = await db.Product.findById(order.productId, (err, product) => {
          if (err) {
            return next({
              status: 404,
              message: 'Item not found!'
            })
          }
          product.amount = product.amount - order.amount
          product.save()
        })
      })
      return res.status(200).json({
        orders: data
      })
    })

  } catch (err) {
    return next({
      status: 404,
      message: 'Item not found!'
    })
  }
}

exports.getOrdersDetail = async function(req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const user = jwt.verify(token, process.env.SECRET || 'thesecretone')
    if (!user) {
      return res.status(401).json({
        message: 'Invalid token'
      })
    }
    const orders = await db.Order
      .find({ user: user._id })
      .sort({ createdAt: -1 })
      .select('order.productId order.amount totalPrice createdAt')
      .populate('order.productId', {
        productName: true,
      })
    if (orders && orders.length > 0) {
      return res.status(200).json(orders)
    } else {
      return res.status(404).json({
        message: 'Order not found!'
      })
    }
  } catch (err) {
    return res.status(404).json({
      message: 'Order not found!'
    })
  }
}