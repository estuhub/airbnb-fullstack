// Packages
const express = require('express')
const router = express.Router()

// Models

// Routes
router.get('/', (req, res) => {
  res.render('houses/list')
})

router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('/')
  } else {
    res.redirect('/auth/login')
  }
})

// Nested controllers routes
//	NESTED GET
router.get('/create', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/create')
  } else {
    res.redirect('/auth/login')
  }
})

router.get('/:id', (req, res) => {
  res.render('houses/one')
})

router.get('/:id/edit', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/edit')
  } else {
    res.redirect('/auth/login')
  }
})

//	NESTED PATCH
router.patch('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/one')
  } else {
    res.redirect('/auth/login')
  }
})

//	NESTED DELETE
router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/list')
  } else {
    res.redirect('/auth/login')
  }
})

// Export
module.exports = router
