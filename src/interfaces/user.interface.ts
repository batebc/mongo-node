import { Auth } from "./auth.interface";
interface User extends Auth {
  name: string;
  description: string;
  organization: string;
  email:string;
  address: string;
  phone: string;
  dni:string
}

type UserNonSensitiveData = Pick<User, 'name'|'description'|'organization'|'email'|'address'|'phone'|'dni' >

export { User, UserNonSensitiveData }
