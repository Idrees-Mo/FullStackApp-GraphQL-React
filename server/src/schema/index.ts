import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_BOOKS } from "./mutations/book";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllBooks: GET_BOOKS,
  },
});

const Mutaion = new GraphQLObjectType({
  name: "Mutaion",
  fields: {},
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutaion,
});
