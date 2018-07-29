const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
})

userSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('password')) {
      return next()
    }
    const hashPassword = await bcrypt.hash(this.password, 5)
    this.password = hashPassword
    return next()
  } catch (err) {
    return next(err)
  }
})

userSchema.methods.comparePassword = async function(candidatePassword, next) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
  } catch (err) {
    return next({
      message: 'Incorrect Password!'
    })    
  }
}

const User = mongoose.model('User', userSchema)
module.exports = User