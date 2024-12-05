import dotenv from 'dotenv';

dotenv.config();

const corsConfig = {
  origin: [process.env.CORS_ORIGIN, 'http://localhost:3000'],
  credentials: true,
};

const dbConfig = {
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  ssl: !!process.env.DB_SSL,
};

export { corsConfig, dbConfig };
