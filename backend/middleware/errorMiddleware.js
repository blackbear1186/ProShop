/*
  1. Cut 404 error function put in notFound
  2. Cut middleware function put in errorHandler
  3. Export notFound, errorHandler
*/
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  // Response with json message
  res.json({
    message: err.message,
    // Stack trace only in production
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }