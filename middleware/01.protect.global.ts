const publicRoutes = ["/", "/signup"];

// Middleware that protects routes from unauthorized access
// Very simple, but given the constraints of the project, it's enough
export default defineNuxtRouteMiddleware(async (to) => {
  if (publicRoutes.includes(to.path)) {
    return;
  }
  const jwtCookie = useCookie("token");

  if (!jwtCookie.value) {
    return navigateTo("/");
  }

  return;
});
