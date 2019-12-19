// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/hobbits.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      afterCreate: (conn,done)=>{//make sure this is in production object too later
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      afterCreate: (conn,done)=>{//make sure this is in production object too later
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    }
  },
  production: {
    client: 'pg', //talking to postgres
    //don't need useNullAsDefault for postgres
    connection: process.env.DATABASE_URL,
  },
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  }
};
