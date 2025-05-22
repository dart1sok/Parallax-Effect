gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Ініціалізація ScrollSmoother (без ручного scroll listener)
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5, // плавність прокрутки (можна регулювати)
  effects: true, // дозволяє анімації працювати з паралаксом
});

// Анімації для шарів
gsap.to(".layers__base", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".main-header",
    start: "top top",
    scrub: true,
  },
});

gsap.to(".layers__middle", {
  yPercent: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".main-header",
    start: "top top",
    scrub: true,
  },
});

gsap.to(".layers__front", {
  yPercent: 80,
  ease: "none",
  scrollTrigger: {
    trigger: ".main-header",
    start: "top top",
    scrub: true,
  },
});

gsap.to(".layers__header", {
  yPercent: 60,
  ease: "none",
  scrollTrigger: {
    trigger: ".main-header",
    start: "top top",
    scrub: true,
  },
});
