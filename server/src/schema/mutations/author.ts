import { GraphQLNonNull, GraphQLString } from "graphql";
import { AuthorType } from "../TypeDefs/Author";
import Author from "../../models/Author";

export const ADD_AUTHOR = {
  type: AuthorType,
  description: "Add new author",
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent: any, args: any) => {
    let author = new Author({
      name: args.name,
    });
    return author.save();
  },
};
