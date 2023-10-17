
exports.up = function(knex) {
    return knex.schema.createTable("shoppingdetails", (table) => {
        table.increments("order_id").primary();
        table.string("name");
        table.string("email");
        table.integer("envision");
        table.integer("virtual_staging");
        table.integer("remodel");
        table.integer("restyle");
        table.integer("floor_plan");
        table.string("order_status").defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("reservations");
};
