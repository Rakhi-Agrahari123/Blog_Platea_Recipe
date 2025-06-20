const jwt = require('jsonwebtoken');
 
const auth = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  // console.log(token);
 
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
 
  try {
    
    // console.log("JWT_SECRET in use:", process.env.JWT_SECRET);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = decoded;
    next();

  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
 
module.exports = auth;
 