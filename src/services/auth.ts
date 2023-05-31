import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jw.handle";


const registerNewUser = async ({ email, password, name }: User) => {
  const userExists = await UserModel.findOne({ email: email });
  if (userExists) return 'user already exists';
  const passHash = await encrypt(password);
  const userCreated = await UserModel.create({ email, password: passHash, name });
  return userCreated;
}

const loginUser = async ({email, password}: Auth) => {
  const user = await UserModel.findOne({email:email});
  if (!user) return 'User not exists';
  const passVerified = await verified(password, user.password);
  if(!passVerified) return 'Pass verification faile';

  const token = generateToken(user.email);
  const data = {
    token, user
  }
  return data;
}

export { loginUser, registerNewUser }