export default () => ({
  environtment: process.env.ENV,
  port: parseInt(process.env.PORT, 10),
  database: {
    mysql: {
      host: process.env.HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  },
});
