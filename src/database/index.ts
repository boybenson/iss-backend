import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});

const connectDb = async () => {
  const connection = await mongoose.connect("mongodb://127.0.0.1:27017/Iss");
  if (connection) {
    console.log("Connected to MongoDB");
    return true;
  } else {
    return false;
  }
};

export default connectDb;
