import { GraphQLList } from "graphql";
import { BookType } from "../TypeDefs/Book";

const books = [
  { id: 1, title: "Harry Potter and the Chamber of Secrets", authId: 1 },
  { id: 2, title: "Harry Potter and the Prisoner of Azkaban", authId: 1 },
  { id: 3, title: "Harry Potter and the Goblet of Fire", authId: 1 },
  { id: 4, title: "The Fellowship of the Ring", authId: 2 },
  { id: 5, title: "The Two Towers", authId: 2 },
  { id: 6, title: "The Return of the King", authId: 2 },
  { id: 7, title: "The Way of Shadows", authId: 3 },
  { id: 8, title: "Beyond the Shadows", authId: 3 },
];

export const GET_BOOKS = {
  type: new GraphQLList(BookType),
  resolve() {
    return books;
  },
};
