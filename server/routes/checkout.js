const express = require('express')
const router = express.Router()
const omise = require('omise')({
      'secretKey': 'skey_test_5csogdclivrkc8z0v1t',
      'omiseVersion': '2015-09-10'
    })

router.post('/', async function(req, res, next) {
  try {
    omise.charges.create(
      {
        description: 'FogMart Payment',
        amount: '3000', // 1 Baht
        currency: 'thb',
        capture: true,
        card: req.body.tokenId
      },
      function(err, resp) {
        if (err) {
          return next(err)
        }

        if (resp.status === 'successful') {
          return res.status(200).json({
            message: 'Payment Success'
          })
        } else {
          return next(err)
        }
      }
    );
  } catch (error) {
    return next(error)
  }
})


module.exports = router