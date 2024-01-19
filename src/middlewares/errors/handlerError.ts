import HttpErro from "../../utils/http/errors/HttpErro";
import { Request, Response, NextFunction } from "express";

export function handleErrors(
  error: Error,
  _: Request,
  res: Response,
  next: NextFunction,
) {
  const err = new HttpErro();
  err.message = error.message;
  err.sendMessageErro(res);
}
