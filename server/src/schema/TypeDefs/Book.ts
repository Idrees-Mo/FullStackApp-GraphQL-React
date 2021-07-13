import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const BookType = new GraphQLObjectType({
  name: "Book",
  description: "This is the type for the book",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    authId: { type: GraphQLID },
  }),
});
