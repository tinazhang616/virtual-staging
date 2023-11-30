const knex = require("../db/connection");

function list() {
  return knex("shoppingdetails").select("*").orderBy("order_id");
}
// function listByEmail(email) {
//   return knex("accounts").select("*").where({ email });
// }
//create new order
function create(orderData) {
  return knex("shoppingdetails")
    .insert(orderData)
    .returning("*")
    .then((data) => data[0]);
}
function read(order_id) {
  return knex("shoppingDetails").select("*").where({ order_id }).first();
}

function update(updatedAccount) {
  return knex("accounts")
    .select("*")
    .where({ user_id: updatedAccount.user_id })
    .update(updatedAccount, "*");
}
// function destroy(user_id) {
//   return knex("accounts").where({ user_id }).del();
// }
module.exports = {
  list,
  read,
  update,
  create,
  //   destroy,
};
