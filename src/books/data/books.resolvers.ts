import { books } from './books.data';

export const resolvers = {
  Query: {
    books: () => books,
  },
};
