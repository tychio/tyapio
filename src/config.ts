import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export default () => ({
  prod: process.env.ENV === 'prod',
  port: parseInt(process.env.PORT, 10) || 3000,
  auth: {
    secret: process.env.JWT_SECRET
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ?? 3306,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  }
});