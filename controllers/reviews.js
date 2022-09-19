// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.get('/', (req, res) => {
  res.send('Hello from reviews!')
})

router.post('/', (req, res) => {
  res.send('Hello from reviews!')
})

// Export
module.exports = router
