import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Name {
    title: String
    first: String
    last: String
  }

  type Location {
    street: String
    city: String
    state: String
    postcode: String
  }

  type Picture {
    large: String
    medium: String
    thumbnail: String
  }

  type User {
    gender: String
    name: Name
    location: Location
    email: String
    phone: String
    cell: String
    picture: Picture
    nat: String
  }

  extend type Query {
    getUser(gender: String): User
    getUsers(people: Int, gender: String): [User]
  }
`;
