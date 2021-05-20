const express = require("express");
const router = express.Router();
const createRestaurantController = require("../controllers/createRestaurant");
const readRestaurantController = require("../controllers/readRestaurant");
const updateRestaurantController = require("../controllers/updateRestaurant");
const deleteRestaurantController = require("../controllers/updateRestaurant");
const restaurantsController = require("../controllers/restaurantsController");
const isLoggedIn = require("../middleware/isLoggedIn");

// create restaurant
router.post("/", isLoggedIn, createRestaurantController);

// read restaurant
router.get("/:id", isLoggedIn, readRestaurantController);

// update restaurant
router.put("/:id", isLoggedIn, updateRestaurantController);

// delete restaurant
router.delete("/:id", isLoggedIn, deleteRestaurantController);

// all restaurants controller
router.get("/", isLoggedIn, restaurantsController);

module.exports = router;
