const knex = require('./knexConnection');

const createUser = (user) => {
  return knex('users').insert(user);
};
const createItem = async (item) => {
  const user = await knex('users')
    .where({ username: item.username })
    .select('id');
  item.userid = user[0].id;
  const { username, ...itemToInser } = item;
  // console.log(itemToInser);
  return knex('item').insert(itemToInser);
};

module.exports = { createUser, createItem };
