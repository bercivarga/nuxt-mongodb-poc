import Cookies from "js-cookie";
import type { AuthStatus } from "./shared.types";

const status = ref<AuthStatus>("idle");

async function logout() {
  status.value = "loading";
  Cookies.remove("token");
  status.value = "idle";
  await navigateTo("/");
}

export default function useLogout() {
  return {
    status,
    logout,
  };
}
