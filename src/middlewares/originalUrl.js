/**
 * @param {Object} request - Express request object (commonly named 'req')
 * @param {Object} response - Express response object (commonly named 'res')
 * @param {Function} next - Express 'next()' function
 */
function logOriginalUrl(request, response, next) {
    console.log(originalUrl);
    next();
  }

module.exports = logOriginalUrl;