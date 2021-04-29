const createRestaurantController = require("../controllers/createRestaurant");
const readRestaurantController = require("../controllers/readRestaurant");
const updateRestaurantController = require("../controllers/updateRestaurant");
const deleteRestaurantController = require("../controllers/updateRestaurant");
const isLoggedIn = require("../middleware/isLoggedIn");
const restaurantsController = require("../controllers/restaurantsController");
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

// create restaurant
router.post("/restaurants", createRestaurantController);

// read restaurant
router.get("/restaurants/:id", readRestaurantController);

// update restaurant
router.put("/restaurants", updateRestaurantController);

// delete restaurant
router.delete("/restaurants", deleteRestaurantController);

// all restaurants controller
router.get("/restaurants", restaurantsController);

// all restaurants controller
router.get("/", isLoggedIn);

// new resto form
router.get("/restaurants-manager/new", (req, res) => {
  res.render("newRestaurant");
});

module.exports = router;
