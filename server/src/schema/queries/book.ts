import { GraphQLID, GraphQLList } from "graphql";
import { BookType } from "../TypeDefs/Book";
import Book from "../../models/Book";

export const GET_BOOKS = {
  type: new GraphQLList(BookType),
  resolve() {
    return Book.find({});
  },
};

export const GET_BOOK = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  async resolve(parent: any, args: any) {
    return await Book.findById(args.id);
  },
};
