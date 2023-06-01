
import { UserNonSensitiveData } from "./user.interface";
export interface Document {
  user: UserNonSensitiveData;
  procedure: string;
  subject: string;
  type_document: string;
  num_folio: number;
  decription: string;
  file: string
}

