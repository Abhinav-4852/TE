module.exports = {
  SERVER: {
    PORT: process.env.PORT || 3000,
    ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost'
  },
  DATABASE: {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD
  },
  API: {
    BASE_URL: process.env.API_BASE_URL,
    VERSION: 'v1',
    PREFIX: '/api'
  },
  CORS: {
    ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:8080'
  }
};
