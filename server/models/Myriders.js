const mongoose = require("mongoose");

const motoSchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  groups: {
    type: String,
    required: true,
    enum: ["Family", "Friends", "New Group", "Single Rider"]
  },
  meetup: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  time: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 :]*$/
  },
  suggestedItems: [String]
});

const Myriders = mongoose.model("Myriders", motoSchema);

module.exports = Myriders;
