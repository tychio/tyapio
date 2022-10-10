import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  runn: {
    url: process.env.RUNN_API_URL,
    token: process.env.RUNN_API_TOKEN,
    teamId: process.env.RUNN_TEAM_ID,
    roleDefaultId: process.env.RUNN_DEFAULT_ROLE_ID
  },
  auth: {
    secret: process.env.JWT_SECRET
  },
  page: {
    first: 1,
    limit: 5000
  },
  datastore: {
    kind: process.env.DATASTORE_KIND
  }
});