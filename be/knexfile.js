module.exports = {
  development: {
    client: 'pg',
    connection: "postgres://postgres:password@db:5432",
  },
  test: {
    client: 'pg',
    connection: "postgres://postgres:password@db:5432",
  },
  ci: {
    client: 'pg',
    connection: "postgres://postgres:password@db:5432",
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
