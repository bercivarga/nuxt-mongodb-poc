import Cookies from "js-cookie";
import type { AuthStatus } from "./shared.types";

export default function useLogout() {
  const status = ref<AuthStatus>("idle");

  async function logout() {
    status.value = "loading";
    Cookies.remove("token");
    status.value = "idle";
    await navigateTo("/");
  }

  return {
    status,
    logout,
  };
}
