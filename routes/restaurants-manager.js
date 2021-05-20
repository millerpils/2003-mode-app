const express = require("express");
const isLoggedIn = require("../middleware/isLoggedIn");
const router = express.Router();

// new resto form
router.get("/new", isLoggedIn, (req, res) => {
  res.render("newRestaurant", { user: req.user });
});

module.exports = router;
