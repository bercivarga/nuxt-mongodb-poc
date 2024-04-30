import bcrypt from "bcrypt";

export default async function decryptPassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}
