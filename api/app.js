const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const app = express();

// change to 'tiny' on production
app.use(morgan('dev'));

// can pass a {origin: someOrigin, optionsSuccessStatus: 200} to limit the cors
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('server up and running');
});

module.exports = app
