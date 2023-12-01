import { NextFunction, Request, Response } from "express";

class ErrorHandler {
  static handleErrors(fn: any) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }
}
