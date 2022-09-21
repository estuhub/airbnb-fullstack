// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('profile', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})

router.patch('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('profile')
  } else {
    res.redirect('/auth/login')
  }
})

// Export
module.exports = router
