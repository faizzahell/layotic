<script>
import { onMounted, onUnmounted } from "vue";
import { useTextAnimation } from "@/composables/useTextAnimation";
import Navbar from "../components/navbar/Navbar.vue";
import Preloader from "../components/preloader/Preloader.vue";
import ScrollPercentage from "../components/scrollPercentage/ScrollPercentage.vue";
import Hero from "../components/hero/Hero.vue";
import About from "../components/about/About.vue";
import Service from "../components/service/Service.vue";
import Specification from "../components/specification/Specification.vue";
import Faq from "../components/faq/Faq.vue";
import Price from "../components/price/Price.vue";
import Review from "../components/review/Review.vue";
import Blog from "../components/blog/Blog.vue";
import Tag from "../components/tag/Tag.vue";
import Footer from "../components/footer/Footer.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Preloader,
    Hero,
    ScrollPercentage,
    About,
    Service,
    Specification,
    Faq,
    Price,
    Review,
    Blog,
    Tag,
    Footer,
  },
  setup() {
    const { setupAnimation, cleanupAnimation } = useTextAnimation();

    onMounted(() => {
      setupAnimation();
    });

    onUnmounted(() => {
      cleanupAnimation();
    });

    return {};
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<template>
  <Preloader />
  <Navbar />
  <Hero />
  <About />
  <Service />
  <Specification />
  <Faq />
  <Price />
  <Review />
  <!-- <Blog /> -->
  <!-- <Tag /> -->
  <Footer />

  <ScrollPercentage />
</template>
