import dotenv from 'dotenv';
import { env } from 'process';
dotenv.config();

export const BGQAConnectionConfig = {
  host: 'backoffice-bgtwy-npr-db-usa.backoffice.npr.aws.asurion.net',
  port: 3330,
  user: env.BG_DB_USERNAME,
  password: env.BG_DB_PASSWORD,
  database: 'bgqa'
};
