import { NextFunction, Request, Response } from "express";
import {
  createAsset,
  deleteAsset,
  getAllOrders,
  getAssets,
  requestAsset,
} from "../services/asset.service";

export const CREATE_ASSET = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: any = await createAsset(req.body);
    res.status(200).json({
      message: "Asset creation successful",
      data: response,
    });
  } catch (error) {
    return next(error);
  }
};

export const GET_ASSETS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: any = await getAssets();
    res.status(200).json({
      message: "Assets",
      data: response,
    });
  } catch (error) {
    return next(error);
  }
};

export const DELETE_ASSET = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: any = await deleteAsset(req.body);
    res.status(200).json({
      message: "Asset deleted successfully",
      data: response,
    });
  } catch (error) {
    return next(error);
  }
};

export const REQUEST_ASSET = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: any = await requestAsset(req.body);

    res.status(200).json({
      message: "Asset request successful",
      data: response,
    });
  } catch (error) {
    return next(error);
  }
};

export const GET_ALL_ORDERS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: any = await getAllOrders();
    res.status(200).json({
      message: "orders",
      data: response,
    });
  } catch (error) {
    return next(error);
  }
};
