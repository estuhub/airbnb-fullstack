// Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')

// Models

// Routes
// Nested controllers routes
//	LOGIN
router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', async (req, res, next) => {
  // try to catch all errors
  try {
    // find the user in the db
    let user = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })
    // check if the user credentials are in the DB
    if (!user) {
      // send an error message
      throw new Error('Email or Password is wrong')
    } else {
      // keep the session logged in
      req.login(user, err => {
        if (err) {
          throw err
        }
      })
      // redirect to /houses
      res.redirect('/houses')
    }
  } catch (err) {
    next(err)
  }
})

//	SIGNUP
router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', async (req, res, next) => {
  // try to catch all errors
  try {
    // declare the newUser credentials before storing them in the DB
    let newUser = await Users.findOne({
      email: req.body.email,
      password: req.body.password
    })
    // check if the newUser credentials are in the DB
    if (newUser) {
      // send an error message
      throw new Error('User with this email already exists')
    } else {
      // create a new user in the db
      let user = await Users.create(req.body)
      // keep the session logged in
      req.login(user, err => {
        if (err) {
          throw err
        }
      })
      // redirect to /houses
      res.redirect('/houses')
    }
  } catch (err) {
    next(err)
  }
})

//	LOGOUT
router.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) {
      return next(err)
    }
    res.redirect('/auth/login')
  })
})

// Export
module.exports = router
