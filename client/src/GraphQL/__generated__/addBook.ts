/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addBook
// ====================================================

export interface addBook_addBook_author {
  __typename: "Author";
  id: string | null;
  name: string | null;
}

export interface addBook_addBook {
  __typename: "Book";
  id: string | null;
  title: string | null;
  author: addBook_addBook_author | null;
}

export interface addBook {
  /**
   * Add new Book
   */
  addBook: addBook_addBook | null;
}

export interface addBookVariables {
  title: string;
  authId: string;
}
