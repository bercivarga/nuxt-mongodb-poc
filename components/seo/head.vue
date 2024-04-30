<!-- This is the only place where disabling eslint is needed. -->
<!-- eslint-disable vue/html-self-closing -->

<script setup lang="ts">
useHead({
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#000000",
    },
  ],
  meta: [
    {
      name: "msapplication-TileColor",
      content: "#da532c",
    },
    {
      name: "theme-color",
      content: "#ffffff",
    },
  ],
});
</script>

<!-- Need to render the <Head /> component to avoid hydration mismatch with Nuxt layouts -->
<template>
  <Head></Head>
</template>
