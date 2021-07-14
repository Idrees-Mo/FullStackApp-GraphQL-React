import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import "./App.css";

const App = () => {
  const client = new ApolloClient({
    uri: "https://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>hello world!</ApolloProvider>;
};

export default App;
