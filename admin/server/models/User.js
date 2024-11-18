const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Make sure 'required' is set to true
    },
    email: {
      type: String,
      required: true, // Make sure 'required' is set to true
    },
    password: {
      type: String,
      required: true, // Make sure 'required' is set to true
    },
    age: {
      type: Number,
    },

    dateOfBirth: {
      type: Number,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String, // or Buffer if you're storing the image in MongoDB
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      postalCode: {
        type: String,
      },
    },
  },
  {
    timestamps: true, // Correctly specify timestamps as an option
  }
);

module.exports = mongoose.model("User", userSchema);
