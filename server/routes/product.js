const express = require('express')
const router = express.Router()
const { getProducts } = require('../handlers/product')

router.get('/', getProducts)

module.exports = router