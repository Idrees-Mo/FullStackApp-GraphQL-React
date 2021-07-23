/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAuthors
// ====================================================

export interface GetAuthors_getAuthors_books {
  __typename: "Book";
  title: string | null;
  id: string | null;
}

export interface GetAuthors_getAuthors {
  __typename: "Author";
  id: string | null;
  name: string | null;
  books: (GetAuthors_getAuthors_books | null)[] | null;
}

export interface GetAuthors {
  /**
   * This will get all authors
   */
  getAuthors: (GetAuthors_getAuthors | null)[] | null;
}
