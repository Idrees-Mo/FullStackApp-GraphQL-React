import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { BookType } from "../TypeDefs/Book";
import Book from "../../models/Book";

export const ADD_BOOK = {
  type: BookType,
  description: "Add new Book",
  args: { title: { type: GraphQLString }, authId: { type: GraphQLID } },
  async resolve(parent: any, args: any) {
    let book = new Book({
      title: args.title,
      authId: args.authId,
    });
    return book.save();
  },
};
