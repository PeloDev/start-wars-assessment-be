import { ApolloServer } from 'apollo-server-lambda';

import { resolvers } from './schema/resolvers';
import { typeDefs } from './schema/type-defs';

const apolloServer = new ApolloServer({ resolvers, typeDefs });

export const graphqlHandler = apolloServer.createHandler();