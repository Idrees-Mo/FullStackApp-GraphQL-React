import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { AuthorType } from "./Author";
import Author from "./../../models/Author";

export const BookType: any = new GraphQLObjectType({
  name: "Book",
  description: "This is the type for the book",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    authId: { type: GraphQLID },
    author: {
      type: AuthorType,
      resolve: (parent, args) => {
        return Author.findById(parent.authId);
      },
    },
  }),
});
