// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.get('/', (req, res) => {
  res.send('Hello from houses!')
})

router.post('/', (req, res) => {
  res.send('Hello from houses!')
})

// Nested controllers routes
//	NESTED GET
router.get('/create', (req, res) => {
  res.send('Create from houses!')
})

router.get('/:id', (req, res) => {
  res.send(':id from houses!')
})

router.get('/:id/edit', (req, res) => {
  res.send(':id/edit from houses!')
})

//	NESTED PATCH
router.patch('/:id', (req, res) => {
  res.send(':id from houses!')
})

//	NESTED DELETE
router.delete('/:id', (req, res) => {
  res.send(':id from houses!')
})

// Export
module.exports = router
