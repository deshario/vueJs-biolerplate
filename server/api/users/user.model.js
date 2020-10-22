const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  }
},{ timestamps: true, versionKey: false })

module.exports = mongoose.model("User", userSchema)