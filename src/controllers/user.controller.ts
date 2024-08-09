import { NextFunction, Request, Response } from "express";
import {
  add_user,
  delete_user,
  get_users,
  sign_in,
} from "../services/user.service";

export const SIGN_IN = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: any = await sign_in(req.body, req.ip);
    res.status(200).json({
      message: "demo request successful",
      data: response,
    });
  } catch (error) {
    return next(error);
  }
};

export const ADD_USER = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: any = await add_user(req.body);
    res.status(200).json({
      message: "user added successfully",
      data: response,
    });
  } catch (error) {
    return next(error);
  }
};

export const REMOVE_USER = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: any = await delete_user(req.params);
    res.status(200).json({
      message: "user removed successfully",
      data: response,
    });
  } catch (error) {
    return next(error);
  }
};

export const GET_USERS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: any = await get_users(req.ip);
    res.status(200).json({
      message: "users",
      data: response,
    });
  } catch (error) {
    return next(error);
  }
};
