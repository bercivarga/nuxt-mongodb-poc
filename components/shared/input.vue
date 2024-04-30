<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  emits("update:modelValue", (event.target as HTMLInputElement).value);
};

const attrs = useAttrs();

const type = ref(attrs.type || "text");

function updateType() {
  type.value = type.value === "text" ? "password" : "text";
}
</script>

<template>
  <div class="relative">
    <input
      v-bind="$attrs"
      :value="modelValue"
      class="w-full rounded-md border-[1px] border-gray p-4 text-base leading-4 transition-colors hover:border-black"
      @input="updateValue"
    />
    <button type="button" class="absolute right-4 top-4" @click="updateType">
      O
    </button>
  </div>
</template>
