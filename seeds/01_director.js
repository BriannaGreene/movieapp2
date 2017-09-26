
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('director').del()
    .then(function () {
      // Inserts seed entries
      return knex('director').insert([
        {id: 1, name: 'SoandSo', nationality: 'American'},
        {id: 2, name: 'Brianna Greene', nationality: 'French'},
        {id: 3, name: 'Cat P', nationality: 'Chilean'},
        {id: 4, name: 'Jonny Hork', nationality: 'Mars and Med'},
        {id: 5, name: 'Adam', nationality: 'Kiwi'}
      ]);
    });
};
