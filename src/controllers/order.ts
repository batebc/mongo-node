import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const getOrder = (req:RequestExt, res:Response) => {
  try {
    res.send({
      data: 'AUTHORIZADED',
      user: req.user
    });
  } catch (error) {
    handleHttp(res, 'ERROR_ORDER');
  }
}

export { getOrder };
