<script setup lang="ts">
const { email, password, status, login } = useLogin();

async function handleLogin() {
  await login();

  if (status.value === "success") {
    await navigateTo("/dashboard");
  }
}
</script>

<template>
  <SharedAuthModal
    title="Log in to Create &trade;"
    :on-form-submit="handleLogin"
    submit-button-label="Log in"
    :submission-status="status"
    version="login"
  >
    <template #email>
      <SharedInput v-model="email" placeholder="Email Address" />
    </template>
    <template #password>
      <SharedInput v-model="password" placeholder="Password" type="password" />
    </template>
  </SharedAuthModal>
</template>
