// Update with your config settings.
require("dotenv").config({ path: "../.env" });
const pgstring =
  process.env.PG_CONNECTION_STRING ??
  `postgres://${process.env.DATABASEUSER}:${process.env.DATABASEPASSWORD}@${process.env.DBHOST}/${process.env.DATABASENAME}`;
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: "sqlite3",
    connection: pgstring,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
