
import cors from 'cors';
import dotenv from 'dotenv';
import * as path from 'path';
import log from 'lambda-log';
import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from "./graphqlDefi/bmiDefi"
// Initialize the app
const {
    INSTANCE_TYPE = "qa",
    ENABLE_TRACING = false,
} = process.env;

if (!INSTANCE_TYPE || INSTANCE_TYPE === 'production') {
    dotenv.config({ path: path.resolve('../.env.production') });
} else {
    dotenv.config({ path: path.resolve('./src/api/.env.qa') });
}
// Initialize the app
const app: Application = express();
// Initialize the ApolloServer
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    tracing: false,
});

app.use(cors({
    exposedHeaders: 'X-Entitlement',
}));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
log.info('app initialization');

const basePath = (INSTANCE_TYPE === undefined || INSTANCE_TYPE === 'production')
    ? 'bmi' : `bmi-${INSTANCE_TYPE}`;
const basePathWithStageName = `/${basePath}/v1`;
server.applyMiddleware({ app, path: basePathWithStageName });

export default app;

