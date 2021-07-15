import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../GraphQL/Queries";

const Books = () => {
  const { data } = useQuery(GET_BOOKS);
  return (
    <>
      <h2>List of Books</h2>
      <div>
        {data &&
          data.getAllBooks.map((b: any) => {
            <>
              <h3>Title:{b.title}</h3>
              <p>By: {b.author.name}</p>
            </>;
          })}
      </div>
    </>
  );
};

export default Books;
