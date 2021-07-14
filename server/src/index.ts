require("dotenv").config();
import express, { json } from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

// connecting to database - MongoDB
const URI: any = process.env.mongoURI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
});

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
