import { Response } from "express";

export default class ResponseHandler {
  static sendResponse<T>(
    res: Response,
    data: T,
    message: string,
    statusCode = 200,
    paginationInfo: any = null,
  ): Response<T> {
    return res.status(statusCode).json({
      sucees: true,
      message,
      data,
      paginationInfo,
    });
  }

  static sendError<T>(
    res: Response,
    error: T,
    message: string,
    statusCode = 500,
  ): Response<T> {
    return res.status(statusCode).json({
      sucees: false,
      message,
      error,
    });
  }
}
