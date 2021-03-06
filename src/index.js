import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const app = express();

const startServer = async () => {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });

  await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Launch the server
  const port = process.env.PORT || 4000;
  app.listen(port, () =>
    console.log(
      `🚀  Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

startServer();
