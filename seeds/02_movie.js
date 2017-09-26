
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        {title: 'Bread and Cheese', year: 2002, director_id: 4},
        {title: 'Love and Romance', year: 2017, director_id: 2},
        {title: 'All of the snacks', year: 1994, director_id: 3},
        {title: 'The Art of Sending', year: 2015, director_id: 4}
      ]);
    });
};
