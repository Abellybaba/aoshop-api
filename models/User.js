const mongoose = require("mongoose"); //import mongoose

const UserSchema = new mongoose.Schema( //User Schema Model for db
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: {type: String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema); //export for external use
