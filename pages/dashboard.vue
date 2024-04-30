<script setup lang="ts">
useSeoMeta({
  title: "Happy to have you here!",
  description:
    "Welcome to BYBORRE Create&trade;. Start creating your own unique BYBORRE fabric.",
});

const { logout } = useLogout();
</script>

<template>
  <main
    class="container flex h-full flex-1 flex-col place-content-center place-items-center"
  >
    <p class="text-2xl">This is your dashboard</p>
    <p>(if your imagination is good enough)</p>
    <SharedPrimaryButton class="mt-4" @click="logout">
      <span>Log out</span>
    </SharedPrimaryButton>
  </main>
</template>
