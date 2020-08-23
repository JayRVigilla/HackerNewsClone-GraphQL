/**
* type definition defines schema, shows the shape of the data
*/

  // NOTE: ! after String means that the value CANNOT be null
    // TWO ! in feed -> The array !== null and each link !== null

const typeDefs =`
    type Query {
    info: String!
    feed: [Link!]!
  }

    type Link {
      id: ID!
      description: String!
      url: String!
    }
  `

module.exports = typeDefs;