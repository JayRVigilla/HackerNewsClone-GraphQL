/**
 * implementation of the schema.
 * structure matches schema
 */

 // dummy data
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

// NOTE: fields (info, feed, id, etc) match case and name in schema
const resolvers = {
  Query: {
    info: () => `This is the API of a Hacker News Clone`,
    feed: () => links,
  },

  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
}

module.exports = resolvers;