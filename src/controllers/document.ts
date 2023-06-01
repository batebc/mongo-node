import { Request, Response } from "express";
import { HttpResponse } from "../utils/error.handle";
import { registerNewDocument } from "../services/document";

const httpResponse = new HttpResponse();
const register = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerNewDocument(body);
    return httpResponse.OK(res, responseUser);
  } catch (e) {
    return httpResponse.Error(res, e);
  }
};

export { register };
