import dotenv from 'dotenv';

dotenv.config();

const appConfig = {
  appPort: process.env.PORT,
  appHost: process.env.HOST,
  appUrl: process.env.APP_URL ? process.env.APP_URL : process.env.HOST + ':' + process.env.PORT,
};

const corsConfig = {
  origin: [process.env.CORS_ORIGIN, 'http://localhost:3000'],
  credentials: true,
};

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: !!process.env.DB_SSL,
};

export { appConfig, corsConfig, dbConfig };
