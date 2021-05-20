const mongoose = require("mongoose");
const ejs = require("ejs");
const restaurants = require("./routes/restaurants");
const restaurants_manager = require("./routes/restaurants-manager");
const auth = require("./routes/auth");
const express = require("express");
const app = express();
const session = require("express-session");
const homeController = require("./controllers/homeController");
const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const config = require("./config/config");
const port = 3000;

// pass form encoded bodies
app.use(
  express.urlencoded({
    extended: true,
  })
);

// serve static assets
app.use(express.static("public"));

// set view engine = ejs
app.set("view engine", "ejs");

// connect to mongo
mongoose.connect(
  "mongodb://localhost/2003-database",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

// init express session
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET123!",
  })
);

// init passport and passport session
app.use(passport.initialize());
app.use(passport.session());

// saves user info to session
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

// fetches user info from session
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// init passport strategy using config deets
passport.use(
  new LinkedInStrategy(
    {
      clientID: config.linkedinAuth.clientID,
      clientSecret: config.linkedinAuth.clientSecret,
      callbackURL: config.linkedinAuth.callbackURL,
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    function (token, tokenSecret, profile, done) {
      return done(null, profile);
    }
  )
);

app.use("/restaurants-manager", restaurants_manager);

// restaurant routes
app.use("/restaurants", restaurants);

// auth routes
app.use("/auth", auth);

// home controller
app.get("/", homeController);

// listen on port
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
