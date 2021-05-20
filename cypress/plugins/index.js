/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

// plugins/index.js
require("dotenv").config();

module.exports = (on, config) => {
  // copy any needed variables from process.env to config.env
  config.env.linkedin_email = process.env.LINKEDIN_EMAIL;
  config.env.linkedin_pw = process.env.LINKEDIN_PW;

  // do not forget to return the changed config object!
  return config;
};
