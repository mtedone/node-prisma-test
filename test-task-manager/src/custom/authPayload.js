const { typeDefs } = require('../generated/prisma-client/prisma-schema');

module.exports = {
  typeDefs: `type AuthPayload {
    user: User!
    token: String!
  }
  
  type Mutation {
    createUserAuth(data: UserCreateInput!): AuthPayload!
  }`,
};
