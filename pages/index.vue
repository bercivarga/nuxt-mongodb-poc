<script setup lang="ts">
useSeoMeta({
  title: "Welcome to BYBORRE Create. Sign in to get started.",
  description:
    "Sign in to your account to start creating your own unique BYBORRE fabric.",
});
</script>

<template>
  <main
    class="container flex h-full flex-1 place-content-center place-items-center"
  >
    <AuthLogin />
  </main>
</template>
