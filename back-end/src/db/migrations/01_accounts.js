exports.up = function (knex) {
  return knex.schema.createTable("accounts", (t) => {
    t.increments("user_id").primary();
    t.string("name");
    t.string("email");
    t.string("password");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("accounts");
};
