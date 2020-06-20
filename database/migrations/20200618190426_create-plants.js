
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments('id');
      tbl
        .string('username', 128)
        .notNullable()
        .unique();
      tbl
        .string('password', 128)
        .notNullable();
      tbl
        .integer('phoneNumber', 10)
        .notNullable();
    })
    .createTable('plants', tbl => {
      tbl.increments('id');
      tbl
        .string('nickname', 128)
        .notNullable()
        .unique();
      tbl
        .string('species')
        .notNullable()
        .unique();
      tbl
        .integer('h2oFrequency');
      tbl
        .integer('user_id')
        .unsigned()
        // .notNullable()
        .references('id')
        .inTable('users');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('plants')
    .dropTableIfExists('users');
};
