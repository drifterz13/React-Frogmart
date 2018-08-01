const express = require('express')
const router = express.Router()
const { purchaseConfirm, getOrdersDetail } = require('../handlers/order')

router.post('/', purchaseConfirm)
router.get('/', getOrdersDetail)

module.exports = router