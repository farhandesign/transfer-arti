const { check } = require('express-validator');
const usersRepo = require('../repositories/users');

module.exports = {
  requireEmail: check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Must be a valid email')
    .custom(async email => {
      //If Existing User
      const existingUser = await usersRepo.getOneBy({ email });
      if (existingUser) {
        throw new Error('Email in use');
      }
    }),
  requirePassword: check('password')
    .trim()
    .isLength({ min:4, max:20 })
    .withMessage('Must be betweeb 4 to 20 characters'),
  requireKey: check('key')
    .trim()
    .custom(async key => {
      // Compare Keys
      const validKey = await usersRepo.compareKeys(key);
      if (!validKey) {
        throw new Error('Wrong Key');
      }
    })  
};