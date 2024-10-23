<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import Logo from "$lib/components/particles/Logo.svelte";
  import Menu from "$lib/components/fragments/Menu.svelte";
  import { onMount, afterUpdate } from "svelte";

  export let color;

  gsap.registerPlugin(ScrollTrigger);

  afterUpdate(() => {
    document.documentElement.style.setProperty("--dynamic-color", color);
    gsap.to("#gsapNav", {
      delay: 0.5,
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    });

    if (color === "difference") {
      gsap.to("#gsapNav", {
        scrollTrigger: {
          trigger: "#about",
          start: "top-=78",
          end: "top-=78",
          scrub: true,
        },
        mixBlendMode: "difference",
      });
    }

    gsap.to(".navigation__open-to", {
      scrollTrigger: {
        trigger: "#about",
        start: "top-=78",
        end: "top-=78",
        scrub: true,
        duration: 2, // Duration of 2 seconds
      },
      y: "-10rem",
    });
  });
</script>

<nav class="navigation" id="gsapNav">
  <a href="/">
    <Logo {color} />
  </a>
  <div class="navigation__open-to">
    <p class="open-to__text">beschikbaar voor projecten</p>
    <svg
      width="255"
      height="7"
      viewBox="0 0 255 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M250 1L250 6L254 3.41379L250 1Z" fill="white" stroke="white" />
      <line y1="3.5" x2="250" y2="3.5" stroke="white" />
    </svg>
  </div>
  <div class="navigation__links">
    <a class="navigation__link" href="#contact">
      <span class="mix-blend">Contact</span>
    </a>
    <Menu />
  </div>
</nav>

<style>
  .navigation {
    position: fixed;
    inset: 0;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding: var(--padding-large);
    color: var(--dynamic-color);
    z-index: 100;
    opacity: 0;
    transform: translateY(-100%);
    z-index: 100;
    /* mix-blend-mode: difference; */
  }

  .navigation__open-to {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: var(--light);
  }

  .open-to__text {
    margin: 0 1rem;
    font-size: 0.9rem;
    font-weight: 200;
    color: var(--dynamic-color);
  }

  .navigation__links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
  }

  .navigation__link {
    color: var(--light);
    background-color: var(--light);
    text-decoration: none;
    font-family: var(--font-secondary);
    font-size: 1rem;
    font-weight: 400;
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    padding: 0 1.75rem;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .mix-blend {
    mix-blend-mode: difference;
  }

  .navigation__link::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    transition: top 0.3s;
    z-index: -1;
  }

  .navigation__link:hover::before {
    top: 0;
  }

  @media (max-width: 768px) {
    .navigation {
      padding: var(--padding-small);
      grid-template-columns: 1fr 1fr;
      height: 3rem;
    }

    .navigation__link {
      height: 2rem;
      padding: 0.75rem;
      font-size: 0.8rem;
    }

    .navigation__open-to {
      display: none;
    }
  }
</style>
