module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'obrio_app',
      user: 'obrio_app',
      password: 'obrio_app_password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
