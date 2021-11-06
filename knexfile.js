// Update with your config settings.
const parse = require('pg-connection-string').parse
const pgconfig = parse(process.env.DATABASE_URL)
pgconfig.ssl = { rejectUnauthorized: false }

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cities',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'pg',
    connection: pgconfig,
    // process.env.DATABASE_URL + '?ssl=true&ssl=no-verify',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
}


