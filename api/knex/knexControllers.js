const knex = require('./knexConnection');

// get one item by name
const getItems = (item) => {
  return knex('item').where({ item_name: item.item_name }).select();
};

// get all items
const getAllItems = () => {
  return knex.select().from('item');
};

// create user
const createUser = (user) => {
  return knex('users').insert(user);
};

// create one item
const createItem = async (item) => {
  const user = await knex('users')
    .where({ username: item.username })
    .select('id');
  item.userid = user[0].id;
  const { username, ...itemToInser } = item;
  // console.log(itemToInser);
  return knex('item').insert(itemToInser);
};

// update one item
const updateItem = async ({ item_name }, item) => {
  const id = await knex('item').where({ item_name }).select();
  return knex('item').where({ id: id[0].id }).update(item[0]);
};

// delete one item
const deleteItem = async ({ item_name }, item) => {
  const id = await knex('item').where({ item_name }).select();
  return knex('item').where({ id: id[0].id }).del();
};

module.exports = {
  createUser,
  createItem,
  getItems,
  getAllItems,
  updateItem,
  deleteItem,
};
