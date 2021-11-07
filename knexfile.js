// const parse = require('pg-connection-string').parse
// const pgconfig = parse(process.env.DATABASE_URL)
// pgconfig.ssl = { rejectUnauthorized: false }

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

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true&ssl=no-verify',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
}


