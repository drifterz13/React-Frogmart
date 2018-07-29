const db = require('../models')

exports.purchaseConfirm = async function(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const newOrders = await db.Order.create({
      order: req.body.order,
      user: token._id
    })
    newOrders.save()

    newOrders.map(async (order) => {
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
      orders: newOrders
    })
  } catch (err) {
    return next({
      status: 404,
      message: 'Item not found!'
    })
  }
}