
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments('id');
      tbl
        .string('username', 128)
        .notNullable()
        .unique();
      tbl
        .string('password', 255)
        .notNullable();
      tbl
        .integer('phone number', 10)
        .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('plants');
};
