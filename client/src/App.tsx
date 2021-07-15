import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import "./App.css";
import AddAuthor from "./components/AddAuthor";
import AddBook from "./components/AddBook";
import Books from "./components/Books";

const App = () => {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <AddBook />
      <Books />
      <AddAuthor />
    </ApolloProvider>
  );
};

export default App;
