import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
  mutation addBook($title: String!, $authId: ID!) {
    addBook(title: $title, authId: $authId) {
      id
      title
      author {
        id
        name
      }
    }
  }
`;

export const ADD_AUTHOR = gql`
  mutation addAuthor($name: String!) {
    addAuthor(name: $name) {
      name
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      title
    }
  }
`;
