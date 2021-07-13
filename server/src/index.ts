require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import cors from "cors";

const app = express();
const URI: any = process.env.mongoURI;

mongoose.connect(URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
});
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => res.send("This is a basic graphQL server!"));
app.listen(3001, () => console.log("server is running on port 3001"));
