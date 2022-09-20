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

router.post('/login', (req, res) => {
  res.send('Login from auth!')
})

//	SIGNUP
router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', async (req, res, next) => {
  // try to catch all errors
  try {
    // declare the newUser credentials before storing them in the DB
    let findUser = await Users.findOne({
      email: req.body.email
    })
    // check if the newUser credentials are in the DB
    if (req.body.email == findUser.email) {
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
router.get('/logout', (req, res) => {
  res.render('login')
})

// Export
module.exports = router
