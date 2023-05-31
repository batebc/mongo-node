import { hash, compare } from 'bcryptjs';

const encrypt = (password:string) => {
  const passwordHash = hash(password, 8); 
  return passwordHash;
}

const verified = (password: string, passHash: string) => {
  const isEqual = compare(password, passHash);
  return isEqual;
}

export { encrypt, verified };