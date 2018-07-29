module.exports = function(err, req, res, next) {
  return res.status(err.status || 404).json({
    error: {
      message: err.message || 'Oops! Something went wrong.'
    }
  })
}