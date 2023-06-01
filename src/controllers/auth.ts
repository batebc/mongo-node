import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";
import { HttpResponse } from "../utils/error.handle";
import { validationResult } from "express-validator";

const httpResponse = new HttpResponse();
const register = async ({ body }: Request, res: Response) => {
  try {
    console.log(body);
    const responseUser = await registerNewUser(body);
    res.send(responseUser);
  } catch (e) {
    return httpResponse.Error(res, e);
  }
};

const login = async ( req : Request, res: Response) => {
  try {
    validationResult(req).throw();
    const responseUserLogin = await loginUser(req.body);
    if (responseUserLogin === "Pass verification faile") {
      return httpResponse.Forbidden(res, 'Pass verification faile')
    }
    res.send(responseUserLogin);
  } catch (e) {
    return httpResponse.Error(res, e);
  }
};

export { register, login };
