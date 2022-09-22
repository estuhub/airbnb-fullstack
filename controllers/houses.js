// Packages
const express = require('express')
const router = express.Router()

// Models
const Houses = require('../models/houses')

// Routes
router.get('/', async (req, res, next) => {
  try {
    // start with an empty object
    let query = {}
    // check if there's a location in the query, if there is, then add it to the empty object
    if (req.query.location) {
      query.location = req.query.location
    }
    // check if there's a rooms in the query, if there is, then add it to the empty object
    if (req.query.rooms) {
      query.rooms = req.query.rooms
    }
    // check if there's a price in the query, if there is, then add it to the empty object, because we are asking for the max, we use $lte
    if (req.query.price) {
      query.price = { $lte: req.query.price }
    }
    // check if there's a search in the query, if there is, then add it to the empty object, for a fuzzy search we add the $regex and $options for case sensitivity
    if (req.query.search) {
      query.search = {
        $regex: 'req.query.search',
        $options: 'i'
      }
    }
    // .find function works with an empty object to find all the documents available, if we pass the conditions to the query, it'll look only the documents with the condition
    let houses = await Houses.find(query).sort('price')
    // missing sort by price in descending way
    res.render('houses/list', { user: req.user, houses })
  } catch (err) {
    next(err)
  }
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

router.get('/:id', async (req, res, next) => {
  try {
    // find the document in the houses collection by .findById(req.params.id)
    // because the whole object has the host ID already (added when created the house), you can populate by .populate('host')
    let house = await Houses.findById(req.params.id).populate('host')
    // the second parameters inside the render { user: req.user, house } are the information we are sending to the HTML/HBS views
    res.render('houses/one', { user: req.user, house })
  } catch (err) {
    next(err)
  }
})

router.get('/:id/edit', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      let house = await Houses.findById(req.params.id)
      res.render('houses/edit', { user: req.user, house })
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})

//	NESTED PATCH
router.patch('/:id', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      // findByIdAndUpdate using the logged in user, passing the information from the form and refreshing with the new data
      let house = await Houses.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      })
      res.redirect(`/houses/${req.params.id}`)
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
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
