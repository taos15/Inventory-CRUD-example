const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const { createUser } = require('./knex/knexControllers');

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

app.post('/api/v1/createuser', async (req, res) => {
  try {
    await createUser(req.body);
    res.status(201).send(req.body);
  } catch (e) {
    console.log(e);
  }
});

module.exports = app;
