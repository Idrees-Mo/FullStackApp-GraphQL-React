import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { BookType } from "./Book";

import Book from "../../models/Book";

export const AuthorType: any = new GraphQLObjectType({
  name: "Author",
  description: "This is the type for Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {
        return Book.where({ authId: parent.id });
      },
    },
  }),
});
