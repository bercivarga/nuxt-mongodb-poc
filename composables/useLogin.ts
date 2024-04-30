import Cookies from "js-cookie";
import type { LoginApiResult } from "~/server/api/login.post";
import type { AuthStatus } from "./shared.types";

const email = ref("");
const password = ref("");
const status = ref<AuthStatus>("idle");

async function login() {
  if (!email.value || !password.value) {
    status.value = "error";
    return;
  }

  try {
    const res = await $fetch<LoginApiResult>("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (res.token) {
      Cookies.set("token", res.token);
      status.value = "success";

      // Reset the form
      email.value = "";
      password.value = "";
    } else {
      status.value = "unauthorized";
    }
  } catch (error) {
    console.error(error);
    status.value = "error";
  }
}

export default function useLogin() {
  return {
    email,
    password,
    status,
    login,
  };
}
