import { User } from "~/server/models";
import decryptPassword from "~/utils/crypto/decryptPassword";
import signUserJWT from "~/utils/jwt/signUserJWT";

export type LoginApiResult = {
  token?: string;
  message?: string;
};

export default defineEventHandler(async (event): Promise<LoginApiResult> => {
  const { email, password } = await readBody(event);

  const user = await User.findOne({ email });

  if (!user || !(await decryptPassword(password, user.password))) {
    setResponseStatus(event, 401);

    return {
      message: "Invalid credentials",
    };
  }

  setResponseStatus(event, 200);

  const userJWT = signUserJWT({ _id: user._id, email: user.email });

  return {
    token: userJWT,
  };
});
