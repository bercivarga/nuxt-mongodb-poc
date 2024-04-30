<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  emits("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    class="w-full rounded-md border-[1px] border-gray p-4 text-base leading-4 transition-colors hover:border-black"
    @input="updateValue"
  />
</template>
