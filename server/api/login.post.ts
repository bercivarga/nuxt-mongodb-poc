import { User } from "~/server/models";
import decryptPassword from "~/utils/crypto/decryptPassword";
import signUserJWT from "~/utils/jwt/signUserJWT";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const user = await User.findOne({ email });

  if (!user || !(await decryptPassword(password, user.password))) {
    setResponseStatus(event, 401);

    return {
      body: JSON.stringify({ message: "Invalid credentials" }),
    };
  }

  setResponseStatus(event, 200);

  const userJWT = signUserJWT({ _id: user._id, email: user.email });

  return {
    token: userJWT,
  };
});
