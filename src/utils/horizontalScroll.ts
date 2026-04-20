import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function initScroll() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.getAll().forEach((t) => t.kill());

  const contenedor = document.querySelector(
    ".js-scroll-container",
  ) as HTMLElement;
  const paneles = gsap.utils.toArray<HTMLElement>(".js-panel");

  if (!contenedor || paneles.length === 0) return;

  gsap.to(contenedor, {
    x: () => -(contenedor.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".js-scroll-section",
      pin: true,
      scrub: 1,
      snap: 1 / (paneles.length - 1),
      end: () => `+=${contenedor.scrollWidth - window.innerWidth}`,
    },
  });
}

// Cubre carga directa sin View Transitions
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScroll);
} else {
  initScroll();
}

// Cubre navegación con View Transitions
document.addEventListener("astro:page-load", initScroll);
