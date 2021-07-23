/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBooks
// ====================================================

export interface getBooks_getAllBooks_author {
  __typename: "Author";
  name: string | null;
}

export interface getBooks_getAllBooks {
  __typename: "Book";
  id: string | null;
  title: string | null;
  author: getBooks_getAllBooks_author | null;
}

export interface getBooks {
  getAllBooks: (getBooks_getAllBooks | null)[] | null;
}
