exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function(table) {
    table.increments('id').primary()
    table.text('title')
    table.integer('year')
    table.integer('director_id').references('id').inTable('director').notNull().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('movie');
};
