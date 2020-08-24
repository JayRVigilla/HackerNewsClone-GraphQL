/**
 * implementation of the schema.
 * structure matches schema
 */

// dummy data
let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
  {
    id: "link-1",
    url: "www.jayvigilla.com",
    description: "Jay's kind of ugly portfolio site",
  },
];

let idCount = links.length;
// NOTE: fields (info, feed, id, etc) match case and name in schema
const resolvers = {
  Query: {
    info: () => `This is the API of a Hacker News Clone`,
    feed: () => links,
    // find link with given id
    link: (_, { id }) => {
      // iterate links
      // if link.id === id then return that
      const matchId = links.filter(link => link.id === `link-${id}`);
      return matchId[0];
    }
  },
  Mutation: {
    post: (_, { description, url }) => {
      const link = {
        id: `link-${idCount++}`,
        description: description,
        url: url,
      }
      links.push(link);
      return link;
    },

    updateLink: (_, { id, description, url }) => {
      // create replacement obj from args
      // find matching linkId
      // overwrite with replacement obj
      const updatedLink = { id, description, url }
      const index = links.findIndex((link) => link.id === `link-${updatedLink.id}`)
      links[index] = updatedLink;
      return updatedLink;
    },

    deleteLink: (_, { id }) => {

      const deleted = {description: `link-${id} deleted`}
      const index = links.findIndex((link) => link.id === `link-${id}`)
      links.splice(index, 1);
      return deleted;
      }
    },
};

module.exports = resolvers;
