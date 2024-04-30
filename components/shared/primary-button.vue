<template>
  <button
    v-bind="$attrs"
    class="flex items-center justify-center gap-2 rounded-full bg-black p-4 text-base font-bold leading-4 text-white transition-all hover:bg-gray hover:text-black hover:shadow-soft active:scale-95 disabled:opacity-50"
  >
    <slot></slot>
  </button>
</template>
