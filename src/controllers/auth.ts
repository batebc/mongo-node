import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth"

const register = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
}

const login = async ({ body }: Request, res: Response) => {
  const responseUserLogin = await loginUser(body);
  if (responseUserLogin === 'Pass verification faile') {
    res.status(403).send(responseUserLogin);
  }
  res.send(responseUserLogin);
}

export { register, login }