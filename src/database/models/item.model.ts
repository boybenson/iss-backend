import { Schema, model } from "mongoose";

export type IUser = {
  name: string;
  tag: string;
  serialNumber: string;
  purchaseDate: string;
  expiryDate: string;
};

const itemSchema = new Schema<IUser>(
  {
    name: {
      type: String,
    },
    tag: {
      type: String,
    },
    serialNumber: {
      type: String,
    },
    purchaseDate: {
      type: String,
    },
    expiryDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const itemModel = model<IUser>("item", itemSchema);

export default itemModel;
