/* eslint-disable import/first */
import * as path from 'path';
import dotenv from 'dotenv';

const { INSTANCE_TYPE } = process.env;

if (!INSTANCE_TYPE || INSTANCE_TYPE === 'production') {
  dotenv.config({ path: path.resolve('./src/api/.env.production') });
} else {
  dotenv.config({ path: path.resolve('./src/api/.env.qa') });
}

import serverlessExpress from '@vendia/serverless-express';
import app from './app';


export const handler = serverlessExpress({app});
