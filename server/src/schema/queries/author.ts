import { GraphQLID, GraphQLList } from "graphql";
import { AuthorType } from "../TypeDefs/Author";
import Author from "../../models/Author";

export const GET_AUTHORS = {
  type: new GraphQLList(AuthorType),
  resolve() {
    return Author.find({});
  },
};

export const GET_AUTHOR = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve(parent: any, args: any) {
    return Author.findById(args.id);
  },
};
