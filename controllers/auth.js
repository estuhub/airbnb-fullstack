// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.get('/', (req, res) => {
  res.send('Hello from auth!')
})

// Nested controllers routes
//	LOGIN
router.get('/login', (req, res) => {
  res.send('Login from auth!')
})

router.post('/login', (req, res) => {
  res.send('Login from auth!')
})

//	SIGNUP
router.get('/signup', (req, res) => {
  res.send('Signup from auth!')
})

router.post('/signup', (req, res) => {
  res.send('Signup from auth!')
})

//	LOGOUT
router.get('/logout', (req, res) => {
  res.send('Logout from auth!')
})

// Export
module.exports = router
