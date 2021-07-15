const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers/restaurantsController');
const isLoggedIn = require('../middleware/isLoggedIn');

// CREATE
router.post('/', isLoggedIn, (req, res, next) => {
  console.log(req.body);
  restaurantsController.post(req, res, next);
});

// READ ALL
router.get('/', isLoggedIn, (req, res, next) => {
  restaurantsController.get(req, res, next);
});

// READ ONE
router.get('/:id', isLoggedIn, (req, res, next) => {
  restaurantsController.get(req, res, next);
});

// UPDATE
router.put('/:id', isLoggedIn, (req, res, next) => {
  restaurantsController.put(req, res, next);
});

// DELETE
router.delete('/:id', isLoggedIn, (req, res, next) => {
  // needs writing
});

module.exports = router;
