import jwt from "jsonwebtoken";
import type { UserJWTData } from "./signUserJWT";

const JWT_SECRET = process.env.JWT_SECRET as string;

export default function validateUserJWT(token: string): UserJWTData | null {
  try {
    const data = jwt.verify(token, JWT_SECRET);
    return data as UserJWTData;
  } catch (error) {
    return null;
  }
}
