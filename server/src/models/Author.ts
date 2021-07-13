import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Author", authorSchema);
