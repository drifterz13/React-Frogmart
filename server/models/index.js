const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ecom', {
  useNewUrlParser: true
})
mongoose.Promise = Promise

module.exports = {
  User: require('./user'),
  Order: require('./order'),
  Product: require('./product')
}