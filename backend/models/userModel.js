import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    
    phone: {
      type: String,
      default: "+91",
    },
    
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [8, "Password must be up to 8 characters"],
    },

    photo: {
      type: String,
      required: [true, "Please add a photo"],
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
























































// const mongoose = require("mongoose");
// // const bcrypt = require("bcryptjs");

// const userSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, "Please add a name"],
//           },
//           email: {
//             type: String,
//             required: [true, "Please add a email"],
//             unique: true,
//             trim: true,
//             match: [
//               /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//               "Please enter a valid email",
//             ],
//           },
//           password: {
//             type: String,
//             required: [true, "Please add a password"],
//             minLength: [8, "Password must be up to 8 characters"],
//             // maxLength: [23, "Password must not be more than 23 characters"],
//           },
//           photo: {
//             type: String,
//             required: [true, "Please add a photo"],
//             default: "https://i.ibb.co/4pDNDk1/avatar.png",
//           },
//           phone: {
//             type: String,
//             default: "+91",
//           },
//           bio: {
//             type: String,
//             maxLength: [250, "Bio must not be more than 250 characters"],
//             default: "bio",
//           },
//     },
//     {
//         timestamps: true,
//     }
// );

// const User = mongoose.model("User", userSchema);
// module.exports = User;
