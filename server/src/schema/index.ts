import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { ADD_AUTHOR } from "./mutations/author";
import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./mutations/book";
import { GET_AUTHORS, GET_AUTHOR } from "./queries/author";
import { GET_BOOK, GET_BOOKS } from "./queries/book";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllBooks: GET_BOOKS,
    getBook: GET_BOOK,
    getAuthors: GET_AUTHORS,
    getAuthor: GET_AUTHOR,
  },
});

const Mutaion = new GraphQLObjectType({
  name: "Mutaion",
  fields: {
    addAuthor: ADD_AUTHOR,
    addBook: ADD_BOOK,
    deleteBook: DELETE_BOOK,
    updateBook: UPDATE_BOOK,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutaion,
});
