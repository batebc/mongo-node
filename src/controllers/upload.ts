import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerUpload } from "../services/storage";

const getFile = async ({body}: Request, res: Response) => {
  try {
    const response = await registerUpload(body);
    res.send('FILE SEND');
  } catch (error) {
    handleHttp(res, 'ERROR UPLOAD FILE');
  }
}

export { getFile };