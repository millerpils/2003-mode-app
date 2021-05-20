const passport = require("passport");
const logoutController = require("../controllers/logout");
const express = require("express");
const router = express.Router();

// make login request to linkedin via passport
router.get("/linkedin", passport.authenticate("linkedin"));

// passport checks returned linkedin obj
router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/restaurants",
    failureRedirect: "/",
  })
);

// logout
router.get("/logout", logoutController);

module.exports = router;
