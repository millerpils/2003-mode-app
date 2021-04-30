const createRestaurantController = require("../controllers/createRestaurant");
const readRestaurantController = require("../controllers/readRestaurant");
const updateRestaurantController = require("../controllers/updateRestaurant");
const deleteRestaurantController = require("../controllers/updateRestaurant");
const homeController = require("../controllers/homeController");
const logoutController = require("../controllers/logout");
const restaurantsController = require("../controllers/restaurantsController");
const isLoggedIn = require("../middleware/isLoggedIn");
const passport = require("passport");
const express = require("express");
const router = express.Router();

// make login request to linkedin via passport
router.get("/auth/linkedin", passport.authenticate("linkedin"));

// passport checks returned linkedin obj
router.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/restaurants",
    failureRedirect: "/",
  })
);

// logout
router.get("/auth/logout", logoutController);

// create restaurant
router.post("/restaurants", isLoggedIn, createRestaurantController);

// read restaurant
router.get("/restaurants/:id", isLoggedIn, readRestaurantController);

// update restaurant
router.put("/restaurants/:id", isLoggedIn, updateRestaurantController);

// delete restaurant
router.delete("/restaurants/:id", isLoggedIn, deleteRestaurantController);

// all restaurants controller
router.get("/restaurants", isLoggedIn, restaurantsController);

// all restaurants controller
router.get("/", isLoggedIn, homeController);

// new resto form
router.get("/restaurants-manager/new", (req, res) => {
  res.render("newRestaurant");
});

module.exports = router;
