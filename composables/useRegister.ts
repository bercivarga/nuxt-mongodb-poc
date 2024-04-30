import Cookies from "js-cookie";
import type { RegisterApiResult } from "~/server/api/register.post";
import type { AuthStatus } from "./shared.types";

const email = ref("");
const password = ref("");
const fullName = ref("");
const status = ref<AuthStatus>("idle");

async function register() {
  if (
    !email.value ||
    !password.value ||
    !fullName.value ||
    password.value.length < 8 // this could also be done with a client-side validation library but due to time constraints, I'm keeping it simple
  ) {
    status.value = "error";
    return;
  }

  try {
    const res = await $fetch<RegisterApiResult>("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        fullName: fullName.value,
      }),
    });

    if (res.token) {
      Cookies.set("token", res.token);
      status.value = "success";

      // Reset the form
      email.value = "";
      password.value = "";
      fullName.value = "";
    } else {
      status.value = "unauthorized";
    }
  } catch (error) {
    console.error(error);
    status.value = "error";
  }
}

export default function useRegister() {
  return {
    email,
    password,
    status,
    fullName,
    register,
  };
}
