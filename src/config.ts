import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  auth: {
    secret: process.env.JWT_SECRET
  }
});