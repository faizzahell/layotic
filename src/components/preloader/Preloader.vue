<script setup lang="ts">
import { onMounted } from "vue";
import "./Preloader.css";

onMounted(() => {
  const handleLoad = () => {
    document.body.classList.add("page-loaded");
  };
  window.addEventListener("load", handleLoad);
});
</script>

<template>
  <div class="preloader">
    <div class="loading-text">
      <span>L</span>
      <span>A</span>
      <span>Y</span>
      <span>O</span>
      <span>T</span>
      <span>I</span>
      <span>C</span>
    </div>
  </div>
</template>
