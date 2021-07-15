import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query getBooks {
    getAllBooks {
      id
      title
      author {
        name
      }
    }
  }
`;
export const GET_AUTHORS = gql`
  query GetAuthors {
    getAuthors {
      id
      name
      books {
        title
        id
      }
    }
  }
`;
