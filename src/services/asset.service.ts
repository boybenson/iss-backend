import itemModel from "../database/models/item.model";
import orderModel from "../database/models/orders.model";

export const getAssets = async () => {
  const assets = await itemModel.find({});
  return assets;
};

export const createAsset = async (payload: any) => {
  const newAsset = await itemModel.create({ ...payload?.data });
  return newAsset;
};

export const deleteAsset = async (payload: any) => {
  const deletedAsset = await itemModel.findByIdAndDelete(payload);
  return deletedAsset;
};

export const requestAsset = async (payload) => {
  const newOrder = await orderModel.create({ ...payload });
  return newOrder;
};

export const getAllOrders = async () => {
  const allorders = await orderModel.aggregate([
    {
      $match: {},
    },
    {
      $lookup: {
        from: "users",
        localField: "employee",
        foreignField: "_id",
        as: "employee",
      },
    },
    {
      $unwind: {
        path: "$employee",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "items",
        localField: "asset",
        foreignField: "_id",
        as: "asset",
      },
    },
    {
      $unwind: {
        path: "$asset",
        preserveNullAndEmptyArrays: true,
      },
    },
  ]);

  return allorders;
};
