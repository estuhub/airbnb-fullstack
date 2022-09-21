// Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')

// Models

// Routes
router.get('/', (req, res) => {
  res.render('houses/list', { user: req.user })
})

router.post('/', async (req, res, next) => {
  if (req.isAuthenticated()) {
    // try to catch all errors
    try {
      // add the host _id to the house object
      req.body.host = req.user._id
      // declare the newHouse and create it to store it in the DB
      let house = await Houses.create(req.body)
      // use the newHouse _id to add it to the browser as template literals
      res.redirect(`/houses/${house._id}`)
    } catch (err) {
      next(err)
    }
  } else {
    res.redirect('/auth/login')
  }
})

// Nested controllers routes
//	NESTED GET
router.get('/create', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/create', { user: req.user })
  } else {
    res.redirect('/auth/login')
  }
})

router.get('/:id', (req, res) => {
  res.render('houses/one', { user: req.user })
})

router.get('/:id/edit', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('houses/edit', { user: req.user })
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
