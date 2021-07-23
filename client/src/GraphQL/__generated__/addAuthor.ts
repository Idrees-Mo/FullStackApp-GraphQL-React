/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addAuthor
// ====================================================

export interface addAuthor_addAuthor {
  __typename: "Author";
  name: string | null;
}

export interface addAuthor {
  /**
   * Add new author
   */
  addAuthor: addAuthor_addAuthor | null;
}

export interface addAuthorVariables {
  name: string;
}
