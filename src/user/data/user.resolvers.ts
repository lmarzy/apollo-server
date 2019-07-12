export const resolvers = {
  Query: {
    getUser: async (source: void, { gender }: any, { dataSources }: any) => dataSources.RandomUser.getUser(gender),
    getUsers: async (source: void, { people, gender }: any, { dataSources }: any) =>
      dataSources.RandomUser.getUsers(people, gender),
  },
};
