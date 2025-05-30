<template>
  <div id="scroll-percentage">
    <span id="scroll-percentage-value">0%</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import "./ScrollPercentage.css";

const scrollToTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function scrollTopPercentage() {
  const scrollPercentage = () => {
    const scrollTopPos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
    const scrollElementWrap = document.getElementById("scroll-percentage");

    // Memeriksa apakah scrollElementWrap tidak null
    if (scrollElementWrap) {
      // Menggunakan CSS untuk mengubah background
      scrollElementWrap.style.background = `conic-gradient(#fff ${scrollValue}%, #000 ${scrollValue}%)`;

      // ScrollProgress
      if (scrollTopPos > 100) {
        scrollElementWrap.classList.add("active");
      } else {
        scrollElementWrap.classList.remove("active");
      }

      const scrollPercentageValue = document.getElementById(
        "scroll-percentage-value"
      );
      if (scrollPercentageValue) {
        if (scrollValue < 99) {
          scrollPercentageValue.innerText = `${scrollValue}%`;
        } else {
          scrollPercentageValue.innerHTML =
            '<i class="fa-solid fa-arrow-up-long"></i>';
        }
      }
    }
  };

  window.onscroll = scrollPercentage;
  window.onload = scrollPercentage;

  // Menambahkan event listener untuk klik
  const scrollButton = document.getElementById("scroll-percentage");
  if (scrollButton) {
    scrollButton.addEventListener("click", scrollToTop);
  }
}

onMounted(() => {
  scrollTopPercentage();
});

onBeforeUnmount(() => {
  // Menghapus event listener saat komponen dihancurkan
  window.onscroll = null;
  const scrollButton = document.getElementById("scroll-percentage");
  if (scrollButton) {
    scrollButton.removeEventListener("click", scrollToTop);
  }
});
</script>

<style scoped>
/* 23. scroll-percentage */
#scroll-percentage {
  position: absolute;
  box-shadow: 0px 0px 20px 0px rgba(184, 184, 184, 0.75);
  height: 60px;
  width: 60px;
  background-color: var(--bgcolor);
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transform: scale(0);
  display: grid;
  place-items: center;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  z-index: 1011;
}

@media (max-width: 1400px) {
  #scroll-percentage {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 992px) {
  #scroll-percentage {
    right: 10px;
  }
}

#scroll-percentage.active {
  bottom: 30px;
  transform: scale(1);
  opacity: 1;
  visibility: visible;
  animation: 500ms ease-in-out 0s normal none 1 running scrollToTop;
  transition: 0.3s;
}

@media (max-width: 1400px) {
  #scroll-percentage.active {
    bottom: 20px;
  }
}

#scroll-percentage-value {
  height: calc(100% - 6px);
  width: calc(100% - 6px);
  background-color: #ffffff;
  color: #000;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 14px;
  font-weight: 600;
}

#scroll-percentage-value i {
  font-size: 20px;
}

@keyframes scrollToTop {
  0% {
    transform: translate3d(0, 80%, 0);
    visibility: visible;
  }
  to {
    transform: translateZ(0);
  }
}
</style>
