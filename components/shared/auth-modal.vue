<script setup lang="ts">
defineProps<{
  title: string;
  onFormSubmit: (event: Event) => void;
  submitButtonLabel: string;
  submissionStatus: AuthStatus;
  version: "login" | "register";
}>();
</script>

<template>
  <div
    class="flex h-full w-full max-w-[421px] flex-col overflow-y-auto rounded-2xl bg-white p-8 shadow-soft md:min-h-[600px]"
  >
    <h1 class="text-3xl">
      {{ title }}
    </h1>
    <form
      class="mt-4 flex flex-1 flex-col justify-between gap-[200px]"
      @submit.prevent="onFormSubmit"
    >
      <div class="flex flex-col gap-4">
        <slot name="email"></slot>
        <slot name="fullName"></slot>
        <slot name="password"></slot>
      </div>

      <div class="flex w-full flex-col gap-4">
        <SharedPrimaryButton>
          <span>
            {{ submitButtonLabel }}
          </span>
          <IconRightArrow class="h-6 w-6" />
        </SharedPrimaryButton>
        <p v-if="submissionStatus === 'error'" class="text-red">
          Something went wrong. Please check your details and try again.
        </p>
        <p>
          <span v-if="version === 'login'"> Don't have an account? </span>
          <span v-else> Already have an account? </span>
          <NuxtLink
            :to="version === 'login' ? '/signup' : '/'"
            class="font-bold hover:underline"
          >
            <span v-if="version === 'login'">Sign up</span>
            <span v-else>Sign in</span>
          </NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>
