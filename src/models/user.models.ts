import mongoose from "mongoose";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // yeslai mathi nai declare garda ni huncha and it can also be used inside match

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "FirstName is required"],
      max: [50, "Firstname cannot be empty and contain uoto 50 chaarcters"], // Shows how much charater it cna contain
      min: [3, "Firstename should atleast be three character"],
    },
    lastName: {
      type: String,
      required: [true, "FirstName is required"],
      max: [50, "lastname cannot be empty and contain uoto 50 chaarcters"], // Shows how much charater it cna contain
      min: [3, "lastname should atleast be three character"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "User with email is required"],
      match: [emailRegex, "The mail doesnot match enter valid format"],
    },
    // phoneNumber:{
    //     type:Number,
    //     required:false,
    //     min:[10,'Phone number must be at least 10 digits'],
    // },
    password: {
      type: String,
      required: true,
      min: [6, "Password must be atleaset 6 characters"],
    },
    // gender:{
    //     type:String,
    // }
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
