exports.up = function (knex) {
  return knex.schema.createTable("shoppingdetails", (table) => {
    table.increments("order_id").primary();
    table.string("name");
    table.string("email");
    table.integer("envision").defaultTo(0);
    table.integer("virtual_staging").defaultTo(0);
    table.integer("remodel").defaultTo(0);
    table.integer("restyle").defaultTo(0);
    table.integer("floor_plan").defaultTo(0);
    table.string("order_status").defaultTo(false);
    table.integer("user_id").unsigned();
    table
      .foreign("user_id")
      .references("user_id")
      .inTable("accounts")
      .onDelete("cascade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("shoppingdetails");
};
