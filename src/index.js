/**
 * typeDefs & resolvers passed into server.
 * Tells accepted API operations & how to resolve.
 *    like a route and model method (respectively) as with REST
*/

const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  // importing file inline
  typeDefs: 'src/schemas.graphql',
  resolvers,
})
server.start( () => console.log(`Server is running on http://localhost:4000`))