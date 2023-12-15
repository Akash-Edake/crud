const mongoose = require("mongoose");
const { Schema } = mongoose;

const recordSchema = new Schema({
  albumId: {
    type: Number,
    required: [true, "please enter a albumId"],
  },
  id: {
    type: Number,
    required: [true, "please enter a id"],
  },
  title: {
    type: String,
    required: [true, "please enter a title"],
  },
  url: {
    type: String,
    required: [true, "please enter a url"],
  },
  thumbnailUrl: {
    type: String,
    required: [true, "please enter a thumbnailUrl"],
  },
});

const Records = mongoose.model("records5000", recordSchema);

module.exports = Records;
