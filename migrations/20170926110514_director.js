
exports.up = function(knex, Promise) {
  return knex.schema.createTable('director', function(table) {
    table.increments('id').primary()
    table.varchar('name')
    table.varchar('nationality')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('director');
};
