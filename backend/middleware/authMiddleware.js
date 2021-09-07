import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/userSchema.js'

import asynchandler from 'express-async-handler'

const protect = asynchandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (err) {
        res.status(401);
        throw new Error("Token is not correct");
    }
  } else {
      res.status(404);
      throw new Error('Authorization token not found');
  }
})

const admin = asynchandler(async (req, res, next) => {
    if(req.user && req.user.isAdmin ) {
        next();
    } else {
        res.status(401);
        throw new Error('Sorry, the user is not a admin');
    }
});

export { protect, admin }
