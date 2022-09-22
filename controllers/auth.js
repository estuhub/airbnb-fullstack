// Packages
const express = require('express')
const router = express.Router()

// Models
const Users = require('../models/users')

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
        } else {
          // redirect to /houses
          res.redirect('/houses')
        }
      })
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
        } else {
          // redirect to /houses
          res.redirect('/houses')
        }
      })
    }
  } catch (err) {
    next(err)
  }
})

//	LOGOUT
router.get('/logout', (req, res, next) => {
  // try to catch all errors
  try {
    // add logout method from passport
    req.logout(err => {
      if (err) {
        throw err
      }
      // deletes the session in the DB
      req.session.destroy(err => {
        if (err) {
          throw err
        }
        res.clearCookie('connect.sid')
        // redirects to log in page
        res.redirect('/auth/login')
      })
    })
  } catch (err) {
    next(err)
  }
})

// Export
module.exports = router
