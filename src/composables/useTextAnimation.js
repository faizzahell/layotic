import { onMounted, onUnmounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function useTextAnimation() {
  const titleAnimation = () => {
    const tgVar = document.querySelectorAll(".sec-title-animation");
    if (!tgVar.length) {
      return;
    }

    const quotes = document.querySelectorAll(
      ".sec-title-animation .title-animation"
    );

    quotes.forEach((quote) => {
      // Reset if needed
      if (quote.animation) {
        quote.animation.progress(1).kill();
        quote.split.revert();
      }

      const getclass = quote.closest(".sec-title-animation").className;
      const animation = getclass.split("animation-");

      if (animation[1] === "style4") return;

      quote.split = new SplitText(quote, {
        type: "lines,words,chars",
        linesClass: "split-line",
      });

      gsap.set(quote, {
        perspective: 400,
      });

      if (animation[1] === "style2") {
        gsap.set(quote.split.chars, {
          opacity: 0,
          x: "50",
        });
      }

      quote.animation = gsap.to(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          start: "top 90%",
        },
        x: "0",
        y: "0",
        rotateX: "0",
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.02,
      });
    });
  };

  const initAnimation = async () => {
    await nextTick();
    titleAnimation();
  };

  const refreshAnimation = () => {
    titleAnimation();
  };

  const setupAnimation = () => {
    initAnimation();
    ScrollTrigger.addEventListener("refresh", refreshAnimation);
    window.addEventListener("load", initAnimation);
  };

  const cleanupAnimation = () => {
    ScrollTrigger.removeEventListener("refresh", refreshAnimation);
    window.removeEventListener("load", initAnimation);

    const quotes = document.querySelectorAll(
      ".sec-title-animation .title-animation"
    );
    quotes.forEach((quote) => {
      if (quote.animation) {
        quote.animation.kill();
      }
      if (quote.split) {
        quote.split.revert();
      }
    });

    ScrollTrigger.refresh();
  };

  return {
    titleAnimation,
    initAnimation,
    setupAnimation,
    cleanupAnimation,
  };
}
