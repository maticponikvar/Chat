const jwt = require('jsonwebtoken');
const secret = 'nepovem';

const withAuth = function (req, res, next) {
  console.log(req.headers)
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;

  console.log(token, "token")

  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        req.username = decoded.username;
        console.log(req.email, req.username, "MAIL & USERNAME")
        next();
      }
    });
  }
}

module.exports = withAuth;