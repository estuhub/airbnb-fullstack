// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.get('/', (req, res) => {
  res.render('houses/list')
})

router.post('/', (req, res) => {
  res.send('Hello from houses!')
})

// Nested controllers routes
//	NESTED GET
router.get('/create', (req, res) => {
  res.render('houses/create')
})

router.get('/:id', (req, res) => {
  res.render('houses/one')
})

router.get('/:id/edit', (req, res) => {
  res.render('houses/edit')
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
