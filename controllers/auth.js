// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.get('/', (req, res) => {
  res.send('Hello from auth!')
})

// Export
module.exports = router
