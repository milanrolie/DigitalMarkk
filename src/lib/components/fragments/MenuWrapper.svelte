<script>
  import portrait from "$lib/assets/portrait.jpeg";
  import Logo from "$lib/components/particles/Logo.svelte";
  import { onMount } from "svelte";

  let menuButton;
  onMount(() => {
    let closeButton = document.querySelector(".close");
    let tl = gsap.timeline({ paused: true, reversed: true });

    menuButton.addEventListener("click", function () {
      if (tl.reversed()) {
        tl.timeScale(1.5).play();
      } else {
        tl.timeScale(2).reverse();
      }
    });

    // Listen for the custom event
    window.addEventListener("triggerMenuButton", () => {
      menuButton.click();
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        tl.timeScale(2).reverse();
      }
    });

    let mm = gsap.matchMedia();

    tl.to(".menu-wrapper", {
      width: "100%",
      duration: 1.2,
      ease: "Expo.easeInOut",
    });

    mm.add("(max-width: 700px)", () => {
      tl.to(
        ".menu-wrapper",
        {
          duration: 1.2,
          ease: "Expo.easeInOut",
          delay: 0,
        },
        "<"
      );
    });

    tl.to(
      ".menu-wrapper",
      { height: "80vh", duration: 1.5, ease: "Expo.easeOut", delay: 0.1 },
      "<"
    );
    tl.to(
      ".menu-text-gsap",
      { y: 0, duration: 2, ease: "Expo.easeOut", delay: 0.6 },
      "<"
    );
    tl.to(".number", { y: 0, duration: 1.7, ease: "Expo.easeOut" }, "<");
    tl.to(
      ".socials-gsap",
      { y: 0, duration: 1.5, stagger: 0.2, delay: 0.4, ease: "Expo.easeInOut" },
      "<"
    );

    menuButton.addEventListener("click", function () {
      if (tl.reversed()) {
        tl.timeScale(1.5).play();
      } else {
        tl.timeScale(2).reverse();
      }
    });

    closeButton.addEventListener("click", function () {
      tl.timeScale(2).reverse();
    });

    const links = document.querySelectorAll(".menu-text-gsap");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        tl.timeScale(2).reverse();
      });
    });
  });
</script>

<button bind:this={menuButton}>Menu Button</button>

<div class="menu-wrapper">
  <div class="content-wrapper">
    <div class="top-bar">
      <a href="/">
        <Logo />
      </a>
      <button class="close">Sluiten</button>
    </div>

    <div class="middle-bar">
      <img class="image" src={portrait} alt="Silver & Milan" />

      <nav>
        <ul>
          <li>
            <p class="number">01</p>
            <a class="menu-text-gsap" href="/#about">Team</a>
          </li>
          <li>
            <p class="number">02</p>
            <a class="menu-text-gsap projects" href="/#featured-projects"
              >Projecten</a
            >
          </li>
          <li>
            <p class="number">03</p>
            <a class="menu-text-gsap contact-link" href="/#blog">Inzichten</a>
          </li>
          <li>
            <p class="number">04</p>
            <a class="menu-text-gsap contact-link" href="/#contact">Diensten</a>
          </li>
          <li>
            <p class="number">05</p>
            <a class="menu-text-gsap contact-link" href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="bottom-bar">
      <p class="subhead">Leave your digital Markk.</p>
      <ul class="socials">
        <a href="/">
          <li>Instagram</li>
        </a>
        <a href="/">
          <li>LinkedIn</li>
        </a>
      </ul>
    </div>
  </div>
</div>

<style>
  .menu-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    background-color: rgb(20, 20, 20);
    z-index: 1000;
    overflow: hidden;
    background-color: var(--bright);
    backdrop-filter: blur(13.1px);
    -webkit-backdrop-filter: blur(13.1px);
    color: var(--light);
  }

  .content-wrapper {
    height: 80svh;
    width: 100%;
    padding: var(--padding-large);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
</style>
