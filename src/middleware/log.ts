import { NextFunction, Request, Response } from "express";


const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers;
  const logCliente = header["user-agent"];
  console.log(logCliente);
  next();
};

export { logMiddleware };