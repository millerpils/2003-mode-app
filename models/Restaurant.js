const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  address: String,
  postcode: String,
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
