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
    class="h-full max-h-[600px] w-full max-w-[421px] overflow-y-auto rounded-lg bg-white p-8 shadow-soft"
  >
    <h1 class="text-red-500 text-2xl font-semibold">
      {{ title }}
    </h1>
    <form
      class="mt-4 flex flex-col justify-between gap-4"
      @submit.prevent="onFormSubmit"
    >
      <div class="flex flex-col gap-4">
        <slot name="email"></slot>
        <slot name="fullName"></slot>
        <slot name="password"></slot>
      </div>

      <button
        type="submit"
        class="rounded-md bg-black p-4 text-base leading-4 text-white disabled:opacity-50"
      >
        <span v-if="submissionStatus === 'loading'">
          <svg
            class="mr-3 h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V2.83a1 1 0 011.7-.71l5.5 5.5a1 1 0 010 1.42l-5.5 5.5a1 1 0 01-1.41-1.42L14.59 12 4.7 2.11A1 1 0 013.3 2.82L9.8 9.3a1 1 0 011.41 0l5.5-5.5a1 1 0 011.7.7V4a8 8 0 01-8 8z"
            ></path>
          </svg>
        </span>

        <span v-else>
          {{ submitButtonLabel }}
        </span>
      </button>
      <p v-if="submissionStatus === 'error'" class="text-red">
        Something went wrong. Please try again.
      </p>
      <p v-if="version === 'login'">
        Don't have an account? <NuxtLink to="/signup">Sign up</NuxtLink>
      </p>
      <p v-if="version === 'register'">
        Already have an account? <NuxtLink to="/">Sign in</NuxtLink>
      </p>
    </form>
  </div>
</template>

<!-- <SharedInput v-model="email" placeholder="Email Address" />
<SharedInput v-model="fullName" placeholder="Full Name" />
<SharedInput
  v-model="password"
  placeholder="Create password"
  type="password"
/>
<button
  type="submit"
  class="rounded-md bg-black p-4 text-base leading-4 text-white"
>
  Sign up
</button> -->
