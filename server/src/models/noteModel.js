const { Schema, model } = require("mongoose");
const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    image: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

const Note = model("Note", noteSchema);
module.exports = Note;
