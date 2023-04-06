/**
 * @param {Object} request - Express request object (commonly named 'req')
 * @param {Object} response - Express response object (commonly named 'res')
 * @param {Function} next - Express 'next()' function
 */

const cors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST, PATCH, DELETE');
    next();
}

module.exports = cors;