/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteBook
// ====================================================

export interface DeleteBook_deleteBook {
  __typename: "Book";
  title: string | null;
}

export interface DeleteBook {
  /**
   * Remove a book
   */
  deleteBook: DeleteBook_deleteBook | null;
}

export interface DeleteBookVariables {
  id: string;
}
