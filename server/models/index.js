const mongoose = require('mongoose')
mongoose.connect('mongodb://zencha:dsp41313@ds259351.mlab.com:59351/ecom', {
  useNewUrlParser: true
})
mongoose.Promise = Promise

module.exports = {
  User: require('./user'),
  Order: require('./order'),
  Product: require('./product')
}