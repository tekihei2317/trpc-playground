import { Request, Response, NextFunction } from "express";

export function allowCrossOrigin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // TODO:
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  return next();
}
