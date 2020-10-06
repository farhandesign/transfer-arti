const express = require('express');


const usersRepo = require('../repositories/users');
const { check, validationResult } = require('express-validator');


const signinTemplate = require('../views/auth/signin');
const signupTemplate = require('../views/auth/signup');
const dashboardTemplate = require('../views/auth/dashboard');
const { requireEmail, requirePassword, requireKey } = require('./validators');

const router = express.Router();


router.get('/admin/signup', (req, res) => {
  res.send(signupTemplate({ req }));
});

// Sign Up
router.post('/admin/signup',
  [requireEmail, requirePassword, requireKey],
  async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.send(signupTemplate({ req, errors }));
    }
    const { email, password, key } = req.body;
    // Create a User in our user repo
    const user = await usersRepo.create({ email, password });
    // Store the if of the user inside cookie
    req.session.userId = user.id;

    res.send(`
      <h2>Account Created</h2>
      <a href="/admin">Go to Sign In Page</a>
    `);
  }
);

//Sign Out
router.get('/admin/signout', (req, res) => {
  req.session = null;
  res.redirect(301, '/admin');
});

// Sign In
router.get('/admin', (req, res) => {
  res.send(signinTemplate());
});

router.post('/admin', async (req, res) => {
  const { email, password } = req.body;

  const user = await usersRepo.getOneBy({ email });

  if (!user) {
    return res.send('Email not found');
  }
   
  const validPassword = await usersRepo.comparePasswords(
    user.password,
    password
  );
  if (!validPassword) {
    return res.send('Invalid Password');
  }

  req.session.userId = user.id;

  res.send(dashboardTemplate());
});

module.exports = router;