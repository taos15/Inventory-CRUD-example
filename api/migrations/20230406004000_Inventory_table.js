/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id');
      table.string('first_name');
      table.string('last_name');
      table.string('username').unique();
      table.string('password');
    })
    .createTable('item', (table) => {
      table.increments('id');
      table.integer('userid');
      table.foreign('userid').references('users.id');
      table.string('item_name').unique();
      table.string('description');
      table.integer('quantity');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable('item', (table) => {
      table.dropForeign('userid');
    })
    .then(() => {
      return knex.schema.dropTableIfExists('item');
    })
    .then(() => {
      return knex.schema.dropTableIfExists('users');
    });
};
