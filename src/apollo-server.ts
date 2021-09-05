import { ApolloServer } from 'apollo-server-lambda';
import cors from 'cors';
import express from 'express';

import { resolvers } from './schema/resolvers';
import { typeDefs } from './schema/type-defs';

const apolloServer = new ApolloServer({ resolvers, typeDefs });

export const graphqlHandler = apolloServer.createHandler({
    expressAppFromMiddleware(middleware) {
        const app = express();
        app.use(cors());
        app.use(function(_req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        app.use(middleware);
        return app;
    }
});