import { Schema, model } from "mongoose";

export type ILog = {
  name: string;
  action: string;
  dateTime: string;
  staffId: string;
  ipAddress: string;
};

const logSchema = new Schema<ILog>(
  {
    name: {
      type: String,
    },
    action: {
      type: String,
    },
    dateTime: {
      type: String,
      required: true,
    },
    staffId: {
      type: String,
      default: "employee",
    },
    ipAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const logModel = model<ILog>("log", logSchema);

export default logModel;
