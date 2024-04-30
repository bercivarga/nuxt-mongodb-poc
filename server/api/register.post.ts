import { User } from "~/server/models";

export default defineEventHandler(async (event) => {
  const { fullName, email, password } = await readBody(event);

  try {
    const user = new User({ fullName, email, password });

    await user.save();

    setResponseStatus(event, 201);

    return {
      body: JSON.stringify({ message: "User created successfully" }),
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
