const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // References the User model
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
    },
    pages: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["Reading", "Completed", "Want to Read"],
      default: "Reading",
    },
    dateStarted: {
      type: Date,
    },
    dateFinished: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
