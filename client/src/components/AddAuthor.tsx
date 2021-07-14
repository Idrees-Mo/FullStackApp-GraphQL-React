import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../GraphQL/Mutations";

const AddAuthor = () => {
  const [name, setName] = useState("");
  const [addAuthor, { error, loading, data }] = useMutation(ADD_AUTHOR);

  const onsubmit = (e: any) => {
    e.preventDefault();
    addAuthor({
      variables: {
        name,
      },
    });
  };

  return (
    <>
      <h1>New Author</h1>
      <form onSubmit={onsubmit}>
        <label>Add Author:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Author</button>
      </form>
    </>
  );
};

export default AddAuthor;
