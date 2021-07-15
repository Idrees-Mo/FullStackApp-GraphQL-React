import { gql } from "@apollo/client";

export const ADD_AUTHOR = gql`
  mutation addAuthor($name: String!) {
    addAuthor(name: $name) {
      name
    }
  }
`;
