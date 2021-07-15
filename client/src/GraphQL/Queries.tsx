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
