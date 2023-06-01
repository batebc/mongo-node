import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jw.handle";


const registerNewUser = async ({ dni,
  password,
  name,
  description,
  organization,
  address,
  phone,
  email }: User) => {
  const userExists = await UserModel.findOne({ dni: dni });
  if (userExists) return 'user already exists';
  const passHash = await encrypt(password);
  const userCreated = await UserModel.create({ dni, password: passHash, name, description, organization, address, phone, email});
  return userCreated;
}

const loginUser = async ({dni, password}: Auth) => {
  const user = await UserModel.findOne({dni:dni});
  if (!user) return 'User not exists';
  const passVerified = await verified(password, user.password);
  if(!passVerified) return 'Pass verification faile';

  const token = generateToken(user.dni);
  const data = {
    token, user
  }
  return data;
}

export { loginUser, registerNewUser }