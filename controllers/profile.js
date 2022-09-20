// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.get('/', (req, res) => {
  res.render('profile')
})

router.patch('/', (req, res) => {
  res.send('Hello from profile!')
})

// Export
module.exports = router
