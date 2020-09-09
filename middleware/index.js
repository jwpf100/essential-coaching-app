const env = process.env.NODE_ENV || 'development'

module.exports.forceSSL = (req, res, next) => {
  // const secure = !!(req.secure === true || req.headers['x-forwarded-proto'] === 'https')
  if (req.headers['x-forwarded-proto'] !== 'https' && env !== 'development') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`)
  }
  return next()
}