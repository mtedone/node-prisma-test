import jwt from 'jsonwebtoken';
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const generateToken = (userId) => {
  return jwt.sign({ userId }, secret, { expiresIn: '7 days' });
};

module.exports = { generateToken };
