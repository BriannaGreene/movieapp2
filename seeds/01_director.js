
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('director').del()
    .then(function () {
      // Inserts seed entries
      return knex('director').insert([
        {name: 'SoandSo', nationality: 'American'},
        {name: 'Brianna Greene', nationality: 'French'},
        {name: 'Cat P', nationality: 'Chilean'},
        {name: 'Jonny Hork', nationality: 'Mars and Med'}
      ]);
    });
};
