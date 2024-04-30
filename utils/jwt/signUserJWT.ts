import jwt from "jsonwebtoken";
import type { UserDocument } from "~/server/models/user";

const JWT_SECRET = process.env.JWT_SECRET as string;

export type UserJWTData = Pick<UserDocument, "_id" | "email">;

export default function signUserJWT(user: UserJWTData): string {
  return jwt.sign({ ...user }, JWT_SECRET, {
    expiresIn: "24h",
  });
}
