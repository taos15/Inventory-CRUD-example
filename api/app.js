const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const {
  createUser,
  createItem,
  getItems,
  getAllItems,
  updateItem,
  deleteItem,
} = require('./knex/knexControllers');

const app = express();

//parse json in the req
app.use(express.json());

// change to 'tiny' on production
app.use(morgan('dev'));

// can pass a {origin: someOrigin, optionsSuccessStatus: 200} to limit the cors
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('server up and running');
});

// get one item
app.get('/api/v1/item/:item_name', async (req, res) => {
  try {
    const item = await getItems(req.params);
    res.status(201).send(item);
  } catch (e) {
    console.log(e);
  }
});

// update one item
app.patch('/api/v1/item/:item_name', async (req, res) => {
  try {
    await updateItem(req.params, req.body);
    const item = await getItems(req.params);
    res.status(201).send(item);
  } catch (e) {
    console.log(e);
  }
});

// delete one item
app.delete('/api/v1/item/:item_name', async (req, res) => {
  try {
    await deleteItem(req.params);
    const item = await getItems(req.params);
    res
      .status(201)
      .send(JSON.stringify(`Record: ${req.params.item_name} has been deleted`));
  } catch (e) {
    console.log(e);
  }
});

// get all item
app.get('/api/v1/item', async (req, res) => {
  try {
    const items = await getAllItems();
    res.status(201).send(items);
  } catch (e) {
    console.log(e);
  }
});

app.post('/api/v1/createuser', async (req, res) => {
  try {
    await createUser(req.body);
    res.status(201).send(req.body);
  } catch (e) {
    if (e.code === '23505') {
      res.status(400).send('User already exists');
    } else {
      console.log(e);
      res.status(500).send('Internal server error');
    }
  }
});

app.post('/api/v1/createitem', async (req, res) => {
  try {
    await createItem(req.body);
    res.status(201).send(req.body);
  } catch (e) {
    console.log(e);
  }
});

module.exports = app;
