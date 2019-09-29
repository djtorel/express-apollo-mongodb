import { gql } from 'apollo-server-express';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Cat" type defines the queryable fields for every cat in our data source.
  type Cat {
    id: ID!
    name: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    cats: [Cat!]!
  }

  # The Mutation type is the entry point into our graph for modifying data.
  # Just like the Query type, the Mutation type is a special object type.
  type Mutation {
    createCat(name: String!): Cat!
  }
`;
