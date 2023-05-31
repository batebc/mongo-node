import { StorageModel } from "../models/storage"
const registerUpload = async ({ filename, path, idUser }: Storage) => {
  const responseFile = StorageModel.create({ filename, path, idUser });
  return responseFile;
}
export { registerUpload }