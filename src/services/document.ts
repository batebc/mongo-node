import { Document } from "../interfaces/doc.interface";
import { DocumentModel } from "../models/document";
const registerNewDocument = async ({ user, procedure, subject, type_document, num_folio, file }: Document) => {
  const userCreated = await DocumentModel.create({user, procedure, subject, type_document, num_folio, file });
  return userCreated;
}


export { registerNewDocument }