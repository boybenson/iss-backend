import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    employee: {
      type: Schema.Types.ObjectId,
      ref: "employee",
    },
    asset: {
      type: Schema.Types.ObjectId,
      ref: "asset",
    },
  },
  {
    timestamps: true,
  }
);

const orderModel = model("order", orderSchema);

export default orderModel;
