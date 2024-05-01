<script setup lang="ts">
const { email, fullName, password, status, register } = useRegister();

async function handleRegister() {
  await register();

  if (status.value === "success") {
    await navigateTo("/signup/success");
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
      <SharedInput
        v-model="email"
        type="email"
        required
        placeholder="Email Address*"
      />
    </template>
    <template #fullName>
      <SharedInput
        v-model="fullName"
        type="text"
        required
        placeholder="Full Name*"
      />
    </template>
    <template #password>
      <div>
        <SharedInput
          v-model="password"
          required
          placeholder="Password"
          type="password"
        />
        <span class="text-gray-darker mt-1 block px-3 text-sm">
          Minimum of 8 characters
        </span>
      </div>
    </template>
  </SharedAuthModal>
</template>
