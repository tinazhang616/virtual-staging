const shoppingDetails = require("./11-shoppingDetails.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE shoppingDetails RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("shoppingDetails").insert(shoppingDetails);
    });
};
