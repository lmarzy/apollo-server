import { ApolloServer, gql } from 'apollo-server';

import books from './books';
import movies from './movies';
import user from './user';

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDef, books.typeDefs, movies.typeDefs, user.typeDefs],
  resolvers: [books.resolvers, movies.resolvers, user.resolvers],
  dataSources: () => ({
    RandomUser: new user.RandomUser(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// const books = [
//   {
//     title: 'Harry Potter and the Chamber of Secrets',
//     author: 'J.K. Rowling',
//   },
//   {
//     title: 'Jurassic Park',
//     author: 'Michael Crichton',
//   },
// ];

// const movies = [
//   {
//     title: 'Avengers',
//     producer: 'Disney',
//   },
//   {
//     title: 'Jurassic Park',
//     producer: 'Someone',
//   },
// ];

// const typeDefs = gql`
//   type Book {
//     title: String
//     author: String
//   }

//   type Movies {
//     title: String
//     producer: String
//   }

//   type Query {
//     books: [Book]
//     movies: [Movies]
//   }
// `;

// const resolvers = {
//   Query: {
//     books: () => books,
//     movies: () => movies,
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

// // server.listen({port}, () => {
// //   console.log('Server ready');
// // });
