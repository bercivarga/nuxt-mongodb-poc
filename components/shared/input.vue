<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  emits("update:modelValue", (event.target as HTMLInputElement).value);
};

const attrs = useAttrs();

type InputType = "text" | "number" | "email" | "password";

const typeAttr = (attrs.type || "text") as InputType;

const inputType = ref<InputType>(typeAttr);

const togglePasswordVisibility = () => {
  inputType.value = inputType.value === "password" ? "text" : "password";
};

// In case you're wondering why I'm decoupling the input type from the type attribute,
// it's because I want to be able to render the password visibility toggle button conditionally.
// If I were to toggle the type attribute directly, I wouldn't be able to render the button conditionally
// because the type attribute would be updated immediately, and the button would disappear.
</script>

<template>
  <div class="relative">
    <input
      v-bind="$attrs"
      :type="inputType"
      :value="modelValue"
      class="w-full rounded-md border-[1px] border-gray p-4 text-base leading-4 transition-colors hover:border-black"
      @input="updateValue"
    />
    <button
      v-if="typeAttr === 'password'"
      type="button"
      class="absolute right-4 top-4 text-gray transition-colors hover:text-black active:scale-95"
      @click="togglePasswordVisibility"
    >
      <IconEyeClosed v-if="inputType === 'password'" class="h-6 w-6" />
      <IconEyeOpen v-else class="h-6 w-6" />
    </button>
  </div>
</template>
