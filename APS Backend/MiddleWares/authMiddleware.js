const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('authtoken');
  if (!token) return res.status(401).json({ message: 'Access denied: Unauthorized access !!' });

  try {
    const decoded = jwt.verify(token, 'RBAC_APP_WITH_FULL_SECURITY');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
