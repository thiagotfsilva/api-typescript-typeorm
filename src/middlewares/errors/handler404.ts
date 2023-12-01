import PageNotFoundError from "../../utils/http/errors/PageNotFoundErro";
import { NextFunction, Request, Response } from "express";

export function handler404(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errorMessage = new PageNotFoundError().sendMessageErro(res);
  res.status(404).json(errorMessage);
  next(error);
}


