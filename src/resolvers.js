/**
 * implementation of the schema.
 * structure matches schema
 */

 // dummy data
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
},
{
  id: 'link-1',
  url: 'www.jayvigilla.com',
  description: 'Jay\'s kind of ugly portfolio site'
}
]

// NOTE: fields (info, feed, id, etc) match case and name in schema
const resolvers = {
  Query: {
    info: () => `This is the API of a Hacker News Clone`,
    feed: () => links,
  },

  /**
   * parent || root -> 'the result of previous resolver level'
    * meaning feed GETs ALL data from links then runs resolver on each item in links
    * parent || root is each item inside of links
  */
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
}

module.exports = resolvers;