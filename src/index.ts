/* eslint-disable import/first */
import * as path from 'path';
import dotenv from 'dotenv';

const { INSTANCE_TYPE } = process.env;

if (!INSTANCE_TYPE || INSTANCE_TYPE === 'production') {
  dotenv.config({ path: path.resolve('./src/api/.env.production') });
} else {
  dotenv.config({ path: path.resolve('./src/api/.env.qa') });
}

import awsServerlessExpress from 'aws-serverless-express';
import { Context, APIGatewayEvent } from 'aws-lambda';
import app from './app';

const server = awsServerlessExpress.createServer(app);

export const handler = (event: APIGatewayEvent, context: Context): void => {
  awsServerlessExpress.proxy(server, event, context);
};
