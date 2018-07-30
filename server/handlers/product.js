const db = require('../models')

exports.getProducts = async function(req, res, next) {
  try {
    const products = await db.Product.find()
    return res.status(200).json(products)
  } catch (err) {
    return next(err)
  }
}