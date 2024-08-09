import { NextFunction, Request, Response } from "express";
import { getLogs } from "../services/log.service";

export const GET_LOGS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: any = await getLogs();
    res.status(200).json({
      message: "Logs",
      data: response,
    });
  } catch (error) {
    return next(error);
  }
};
