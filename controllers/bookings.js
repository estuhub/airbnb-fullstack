// Packages
const express = require('express')
const router = express.Router()

// Models
const Bookings = require('../models/bookings')

// Routes
router.post('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      // add the author _id to the booking object
      req.body.author = req.user._id
      // create a booking
      let booking = await Bookings.create(req.body)
      // redirect to the house you just booked
      res.redirect(`/houses/${req.body.house}`)
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})

// Export
module.exports = router
