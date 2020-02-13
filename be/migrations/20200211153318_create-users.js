exports.up = function(knex) {
  return knex.schema.createTable("user", table => {
    table.increments()
    table.string("name")
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user")
};
