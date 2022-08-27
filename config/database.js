module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("NF_DATABASE_HOST", "127.0.0.1"),
      port: env.int("NF_DATABASE_PORT", 5432),
      database: env("NF_DATABASE_DATABASE", ""),
      user: env("NF_DATABASE_USERNAME", ""),
      password: env("NF_DATABASE_PASSWORD", ""),
      ssl: env.bool("NF_DATABASE_TLS_ENABLED", false),
    },
  },
});
