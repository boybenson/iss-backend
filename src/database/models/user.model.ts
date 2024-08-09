import { Schema, model } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  password: string;
  role: string;
  staffId: string;
};

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "employee",
    },
    staffId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model<IUser>("user", userSchema);

export default userModel;
