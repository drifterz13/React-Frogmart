require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const errorHandlers = require('./handlers/errors')
const userRoutes = require('./routes/user')
const orderRoutes = require('./routes/order')
const productRoutes = require('./routes/product')
const checkoutRoutes = require('./routes/checkout')

const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/products', productRoutes)
app.use('/api/checkout', checkoutRoutes)

app.use((req, res, next) => {
  const error = new Error('Not found!')
  error.status = 404
  next(error)
})

app.use(errorHandlers)

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))