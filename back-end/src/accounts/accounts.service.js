const knex = require("../db/connection");

function list() {
  return knex("accounts").select("*").orderBy("user_id");
}
function create(accountData) {
  return knex("accounts")
    .insert(accountData)
    .returning("*")
    .then((data) => data[0]);
}
function read(user_id) {
  return knex("accounts").select("*").where({ user_id }).first();
}

function update(updatedAccount) {
  return knex("accounts")
    .select("*")
    .where({ user_id: updatedAccount.user_id })
    .update(updatedAccount, "*");
}
function destroy(user_id) {
  return knex("accounts").where({ user_id }).del();
}
module.exports = {
  list,
  read,
  update,
  create,
  destroy,
};
