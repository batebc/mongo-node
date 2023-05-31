import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'token.secret';

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: '2h' });
  return jwt;
}

const verifyToken = (jwt: string) => {
  const verified = verify(jwt, JWT_SECRET);
  return verified;
}

export { generateToken, verifyToken }