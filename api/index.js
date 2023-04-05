const app = require('./app');
require('dotenv').config({ path: '../.env' });

const port = process.env.APIPORTI;
const test =
  process.env.PG_CONNECTION_STRING ??
  `postgres://${process.env.DATABASEUSER}:${process.env.DATABASEPASSWORD}@${process.env.DBHOST}/${process.env.DATABASENAME}`;
// console.log(

// );

console.log(test);

app.listen(port, () => console.log(`server running on port ${port}`));
