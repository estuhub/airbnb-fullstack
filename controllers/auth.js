// Packages
const express = require('express')
const router = express.Router()

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

router.post('/signup', (req, res) => {
  res.send('Signup from auth!')
})

//	LOGOUT
router.get('/logout', (req, res) => {
  res.render('login')
})

// Export
module.exports = router
