const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: String,
  des: String,
  thumb: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
