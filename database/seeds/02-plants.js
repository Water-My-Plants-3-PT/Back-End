
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        { 
          nickname: 'milo',
          species: `bird's nest fern`,
          h2oFrequency: 2
        },

        { 
          nickname: 'bella',
          species: `hibiscus`,
          h2oFrequency: 3
        }
      ]);
    });
};
