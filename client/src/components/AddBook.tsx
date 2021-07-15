import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { ADD_BOOK } from "../GraphQL/Mutations";
import { GET_AUTHORS, GET_BOOKS } from "../GraphQL/Queries";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [authId, setAuthId] = useState("");
  const { data: authorData } = useQuery(GET_AUTHORS);
  const [addBook, { data, error }] = useMutation(ADD_BOOK);

  useEffect(() => {
    if (authorData) {
      setAuthId(authorData.getAuthors[0].id);
    }
  }, [authorData]);

  const onsubmit = (e: any) => {
    e.preventDefault();
    addBook({
      variables: { title, authId },
      refetchQueries: [{ query: GET_BOOKS }],
    });
    setTitle("");
  };

  return (
    <>
      <h1>+ New Book</h1>
      <form onSubmit={onsubmit}>
        <label>Book Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Please enter book title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Select Author:</label>
        <select name="author" onChange={(e) => setAuthId(e.target.value)}>
          {authorData &&
            authorData.getAuthors.map((author: any) => {
              return (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              );
            })}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
