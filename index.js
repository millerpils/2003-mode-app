const mongoose = require("mongoose");
const express = require("express");
const ejs = require("ejs");
const createRestaurantController = require("./controllers/createRestaurant");
const readRestaurantController = require("./controllers/readRestaurant");
const updateRestaurantController = require("./controllers/updateRestaurant");
const deleteRestaurantController = require("./controllers/updateRestaurant");
const homeController = require("./controllers/home");

// launch express server
const app = new express();

// // to parse json bodies
// app.use(express.json());

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

// create restaurant
app.post("/restaurants", createRestaurantController);

// read restaurant
app.get("/restaurants", readRestaurantController);

// update restaurant
app.put("/restaurants", updateRestaurantController);

// delete restaurant
app.delete("/restaurants", deleteRestaurantController);

// home controller
app.get("/", homeController);

// new resto form
app.get("/restaurants/new", (req, res) => {
  res.render("newRestaurant");
});

// listen on port 3001
app.listen(3001, () => {
  console.log("Server running on 3001");
});
