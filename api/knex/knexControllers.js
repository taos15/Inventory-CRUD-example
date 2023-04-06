const knex = require('./knexConnection');

const createUser = (user) => {
  return knex('users').insert(user);
};

module.exports = { createUser };
