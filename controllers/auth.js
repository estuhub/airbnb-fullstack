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

router.post('/signup', async (req, res) => {
  let user = await Users.create(req.body)
  req.login(user, err => {
    if (err) {
      throw err
    }
  })
  res.send('Signup from auth!')
})

//	LOGOUT
router.get('/logout', (req, res) => {
  res.render('login')
})

// Export
module.exports = router
