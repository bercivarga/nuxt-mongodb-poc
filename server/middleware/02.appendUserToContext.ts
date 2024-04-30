import validateUserJWT from "~/utils/jwt/validateUserJWT";

// Middleware that appends the user to the context if a valid JWT is provided
export default defineEventHandler(async (event) => {
  const token = getHeader(event, "Authorization");

  const jwt = token?.split("Bearer ")[1];

  if (!jwt) {
    return;
  }

  const user = validateUserJWT(jwt);

  if (!user) {
    return;
  }

  event.context.user = { ...user };
});
