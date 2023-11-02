const accounts = require("./00-acounts.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE accounts RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("accounts").insert(accounts);
    });
};
