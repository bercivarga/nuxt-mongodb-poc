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
    title="Log in to Create&trade;"
    :on-form-submit="handleLogin"
    submit-button-label="Log in"
    :submission-status="status"
    version="login"
  >
    <template #email>
      <SharedInput
        v-model="email"
        type="email"
        required
        placeholder="Email Address"
      />
    </template>
    <template #password>
      <SharedInput
        v-model="password"
        required
        placeholder="Password"
        type="password"
        :skip-validation="true"
      />
    </template>
  </SharedAuthModal>
</template>
