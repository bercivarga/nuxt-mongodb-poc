<script setup lang="ts">
import JSConfetti from "js-confetti";

useSeoMeta({
  title: "Happy to have you here!",
  description:
    "Welcome to BYBORRE Create&trade;. Start creating your own unique BYBORRE fabric.",
});

onMounted(() => {
  setTimeout(() => {
    const confetti = new JSConfetti();
    confetti.addConfetti({
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
      confettiRadius: 6,
    });
  }, 1000);
});
</script>

<template>
  <main
    class="container mx-auto flex h-full flex-1 flex-col place-content-center place-items-center"
  >
    <p class="text-2xl">Sign up successful! Welcome to BYBORRE Create&trade;</p>
    <NuxtLink to="/dashboard" class="inline-block">
      <SharedPrimaryButton class="mt-4">
        <span>Get started</span>
        <IconRightArrow class="h-6 w-6" />
      </SharedPrimaryButton>
    </NuxtLink>
  </main>
</template>
