import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jw.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}


const chekJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization || '';
    const jwt = token.split(' ').pop();
    const isUser = verifyToken(`${jwt}`);
    if (!isUser) {
      res.status(401);
      res.send('TOKEN IS INVALID');
    }
    req.user = isUser;
  } catch (error) {
    res.status(400);
    res.send('SESSION IS NOT VALIDE');
  }
  next();
}


export { chekJWT }