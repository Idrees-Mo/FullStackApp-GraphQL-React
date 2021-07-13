import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  // authId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   require: true,
  // },
});

export default mongoose.model("Book", bookSchema);
