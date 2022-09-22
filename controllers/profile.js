// Packages
const express = require('express')
const router = express.Router()

// Models
const Users = require('../models/users')
const Houses = require('../models/houses')

// Routes
router.get('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      let houses = await Houses.find({
        host: req.user._id
      })
      res.render('profile', { user: req.user, houses })
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})

router.patch('/', async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      // findByIdAndUpdate using the logged in user, passing the information from the form and refreshing with the new data
      let user = await Users.findByIdAndUpdate(req.user._id, req.body, {
        new: true
      })
      // login the user again to kill the previous session and open a new one with updated data
      req.login(user, err => {
        if (err) {
          throw err
        } else {
          // redirect to /profile
          res.redirect('/profile')
        }
      })
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})

// Export
module.exports = router
