const express = require('express')
const router = express.Router()
const { purchaseConfirm } = require('../handlers/order')

router.post('/', purchaseConfirm)

module.exports = router