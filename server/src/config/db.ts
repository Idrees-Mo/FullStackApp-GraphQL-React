require("dotenv").config();
import mongoose from "mongoose";

const URI: any = process.env.mongoURI;
export default () => {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  mongoose.connection.once("open", () => {
    console.log("connected to mongoDB");
  });
};
