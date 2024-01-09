<script setup lang="ts">
import '@unocss/reset/tailwind.css'

</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@font-face {
  font-family: MiSans-Medium;
  src: url("/font/MiSans-Medium.ttf");
}

:root {
  font-family: -apple-system, MiSans-Medium, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
}

body {
  background-image: linear-gradient(to right bottom, #158bff, #6166c3, #654789, #532e56, #361c2d, #3b1b2a, #3f1a26, #431a22, #74272e, #a53733, #d44d30, #ff6b1f);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 500px;
  color: white;
}

.dark-mode body {
  background-color: var(--dark-bg-color);
  color: var(--light-bg-color);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
