<template>
  <button
    v-bind="$attrs"
    class="w-full rounded-full bg-black p-4 text-base font-bold leading-4 text-white transition-colors hover:bg-gray disabled:opacity-50"
  >
    <slot></slot>
  </button>
</template>
