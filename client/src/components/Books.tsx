import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BOOKS } from "../GraphQL/Queries";
import { DELETE_BOOK } from "../GraphQL/Mutations";

const Books = () => {
  const { data } = useQuery(GET_BOOKS);
  const [deletUser, { error }] = useMutation(DELETE_BOOK);
  return (
    <>
      <h2>List of Books</h2>
      <div>
        {data &&
          data.getAllBooks.map((b: any) => {
            return (
              <div
                key={b.id}
                onDoubleClick={() => deletUser({ variables: { id: b.id } })}
              >
                <h3>Title:{b.title}</h3>
                <p>By: {b.author.name}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Books;
