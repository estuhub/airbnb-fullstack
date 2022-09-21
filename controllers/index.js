// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.get('/', (req, res) => {
  res.redirect('/houses', { user: req.user })
})

// Export
module.exports = router
