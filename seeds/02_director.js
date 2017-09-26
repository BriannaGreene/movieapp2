
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('director').del()
    .then(function () {
      // Inserts seed entries
      return knex('director').insert([
        {name: 'SoandSo', nationality: 'American'},
        {name: 'SoandSo', nationality: 'American'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
