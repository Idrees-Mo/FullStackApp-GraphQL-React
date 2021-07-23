require("dotenv").config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

import connectDB from "./config/db";
import cors from "cors";

const app = express();
connectDB();
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
// };

app.use(cors());

app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => res.send("This is a basic graphQL server!"));
app.listen(3001, () => console.log("server is running on port 3001"));
