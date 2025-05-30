<script setup lang="ts">
import { onMounted, ref } from "vue";

import "./Navbar.css"; // Mengimpor file CSS

const newScrollPosition = ref(0);
const lastScrollPosition = ref(0);
const header = ref<HTMLElement | null>(null);

onMounted(() => {
  header.value = document.getElementById("stickyHeader");

  window.addEventListener("scroll", () => {
    lastScrollPosition.value = window.scrollY;

    // Jika scroll ke atas dan posisi lebih dari 100px
    if (
      newScrollPosition.value > lastScrollPosition.value &&
      lastScrollPosition.value > 100
    ) {
      header.value?.classList.remove("slideDown");
      header.value?.classList.add("slideUp");
    }
    // Jika posisi kurang dari 100px (bagian atas)
    else if (lastScrollPosition.value < 100) {
      header.value?.classList.remove("slideDown");
      header.value?.classList.remove("slideUp");
    }
    // Jika scroll ke bawah
    else if (newScrollPosition.value < lastScrollPosition.value) {
      header.value?.classList.remove("slideUp");
      header.value?.classList.add("slideDown");
    }

    newScrollPosition.value = lastScrollPosition.value;
  });
});
</script>

<template>
  <header id="stickyHeader">
    <div class="container">
      <div class="top-bar">
        <div class="logo">
          <a href="#">
            <img alt="logo" src="@/assets/img/logo.png" />
          </a>
        </div>
        <nav class="navbar">
          <ul class="navbar-links">
            <li class="navbar-dropdown">
              <a href="#about"> About </a>
            </li>
            <li class="navbar-dropdown">
              <a href="#services">Cara Order</a>
            </li>
            <li class="navbar-dropdown">
              <a href="#team">Spesifikasi</a>
            </li>
            <li class="navbar-dropdown">
              <a href="#faq">FAQ</a>
            </li>
            <li class="navbar-dropdown">
              <a href="#pricing">Harga</a>
            </li>
            <li class="navbar-dropdown">
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </nav>
        <a target="_blank" href="https://wa.me/6281234567890"
          ><i class="flaticon-smart-phone"></i><b>Contact</b></a
        >
      </div>
    </div>
  </header>
</template>
