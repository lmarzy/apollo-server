import { movies } from './movies.data';

export const resolvers = {
  Query: {
    movies: () => movies,
    film: () => 'testing 123 film...',
    test: () => 'test again',
  },
};
