import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    title: String
    producer: String
  }

  extend type Query {
    movies: [Movie]
    film: String
    test: String
  }
`;
