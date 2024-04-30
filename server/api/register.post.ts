import { User } from "~/server/models";
import hashPassword from "~/utils/crypto/hashPassword";
import signUserJWT from "~/utils/jwt/signUserJWT";

export default defineEventHandler(async (event) => {
  const { fullName, email, password } = await readBody(event);

  try {
    const hashedPassword = await hashPassword(password);

    const user = new User({ fullName, email, password: hashedPassword });

    await user.save();

    setResponseStatus(event, 201);

    const userJWT = signUserJWT({ _id: user._id, email: user.email });

    return {
      token: userJWT,
    };
  } catch (error) {
    setResponseStatus(event, 500);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to create user",
      }),
    };
  }
});
