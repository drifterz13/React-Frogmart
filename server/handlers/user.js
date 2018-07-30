const db = require('../models')
const jwt = require('jsonwebtoken')

exports.signup = async function (req, res, next) {
  try {
    const foundUser = await db.User.findOne({ email: req.body.email })
    if (foundUser) {
      return next({
        status: 401,
        message: 'This email is already taken!'
      })
    }
    
    const user = await db.User.create(req.body)
    user.save()
    const { email, username, _id } = user
    const token = jwt.sign(
      {
        email,
        username,
        _id
      },
      process.env.SECRET || 'thesecretone'
    )
    return res.status(200).json({
      email,
      username,
      _id,
      token
    })
  } catch (err) {
    return next(err)
  }
}

exports.signin = async function (req, res, next) {
  try {
    const user = await db.User.findOne({ email: req.body.email })
    const compared = await user.comparePassword(req.body.password) 
    if (user && compared) {
      const { email, username, _id } = user
      const token = jwt.sign(
        {
          email,
          username,
          _id
        },
        process.env.SECRET || 'thesecretone'
      )
      return res.status(200).json({
        email,
        username,
        _id,
        token
      })
    } else {
      return next({
        status: 401,
        message: 'Invalid credentials!'
      })
    }
  } catch (err) {
    return next({
      status: 401,
      message: 'Invalid credentials!'
    })
  }
}