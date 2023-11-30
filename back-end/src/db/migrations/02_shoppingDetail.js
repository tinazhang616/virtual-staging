exports.up = function (knex) {
  return knex.schema.createTable("shoppingdetails", (table) => {
    table.increments("order_id").primary();
    table.integer("Envision").defaultTo(0);
    table.integer("Virtual Staging").defaultTo(0);
    table.integer("virtual Staging Plus").defaultTo(0);
    table.integer("Remodel").defaultTo(0);
    table.integer("Restyle").defaultTo(0);
    table.integer("3D").defaultTo(0);
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
