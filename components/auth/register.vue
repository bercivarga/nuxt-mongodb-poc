<script setup lang="ts">
const { email, fullName, password, status, register } = useRegister();

async function handleRegister() {
  await register();

  if (status.value === "success") {
    await navigateTo("/dashboard");
  }
}
</script>

<template>
  <SharedAuthModal
    title="Sign up to Create&trade;"
    :on-form-submit="handleRegister"
    submit-button-label="Sign up"
    :submission-status="status"
    version="register"
  >
    <template #email>
      <SharedInput v-model="email" placeholder="Email Address" />
    </template>
    <template #fullName>
      <SharedInput v-model="fullName" placeholder="Full Name" />
    </template>
    <template #password>
      <SharedInput v-model="password" placeholder="Password" type="password" />
    </template>
  </SharedAuthModal>
</template>
