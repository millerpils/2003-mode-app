// plugins/index.js
require("dotenv").config();

const path = require("path");
const seeder = require("cypress-mongo-seeder");

const mongouri = "mongodb://localhost/2003-database";
const folder = "./json";
const dropCollections = true;

module.exports = (on, config) => {
  on("task", {
    "db:seed": () => {
      return seeder.seedAll(mongouri, folder, dropCollections);
    },
  });

  // copy any needed variables from process.env to config.env
  config.env.linkedin_email = process.env.LINKEDIN_EMAIL;
  config.env.linkedin_pw = process.env.LINKEDIN_PW;

  // do not forget to return the changed config object!
  return config;
};
