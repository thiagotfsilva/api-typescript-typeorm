import { PagNotFoundError } from "../../utils/http/errors/PageNotFound";
import { NextFunction, Response, Request } from "express";

export function handler404(_: Request, res: Response, next: NextFunction) {
  new PagNotFoundError().sendMessageErro(res);
}
