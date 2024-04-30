// @eslint-ignore
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt().overrideRules({
  "vue/html-self-closing": "off",
});
