<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  import portrait from "$lib/assets/portrait.jpeg";
  import Logo from "$lib/components/particles/Logo.svelte";
  export let color;

  onMount(() => {
    let menuButton = document.querySelector(".menu-button");
    let closeButton = document.querySelector(".close");
    let tl = gsap.timeline({ paused: true, reversed: true });

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

    tl.to(
      "#gsapNav",
      { mixBlendMode: "normal", duration: 2, ease: "Expo.easeInOut" },
      "<"
    );

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

<button class="menu-button">
  <svg
    width="13"
    height="14"
    viewBox="0 0 13 14"
    fill=""
    xmlns="http://www.w3.org/2000/svg"
  >
    <line y1="1" x2="13" y2="1" stroke="" stroke-width="2" />
    <line y1="6.57147" x2="13" y2="6.57147" stroke="" stroke-width="2" />
    <line y1="12.1428" x2="13" y2="12.1428" stroke="" stroke-width="2" />
  </svg>
</button>
<div class="menu-wrapper">
  <div class="content-wrapper">
    <div class="top-bar">
      <a href="/">
        <Logo {color} />
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
          <!-- <li>
            <p class="number">03</p>
            <a class="menu-text-gsap" href="/#taktiek">Taktiek</a>
          </li> -->
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

  .menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    cursor: pointer;
    mix-blend-mode: difference;
    background-color: var(--light);
    stroke: var(--dark);
    height: 2.5rem;
    aspect-ratio: 1;
    margin: 0;
    transition: 0.3s;
    position: relative;
    overflow: hidden;
  }

  .menu-button::before {
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

  .menu-button:hover::before {
    top: 0;
  }

  .menu-button:hover {
    background-color: transparent; /* Ensure background color doesn't override the pseudo-element */
    stroke: var(--light);
  }

  button {
    position: relative;
    border: 0;
    background: none;
    margin-top: 4px;
  }

  button:hover {
    cursor: pointer;
  }

  .close {
    color: var(--light);
    font-family: var(--main-font);
    font-size: 1rem;
    border-bottom: 1px solid var(--light);
  }

  .close:hover {
    border-bottom: 1px solid #ffffff00;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
  }

  .middle-bar {
    display: flex;
    justify-content: space-between;
    height: 60%;
  }

  .bottom-bar {
    display: flex;
    justify-content: space-between;
    border-top: 0.5px solid var(--light);
    padding-top: 1em;
  }

  nav {
    width: 40vw;
  }

  .image {
    width: 23vw;
    height: 25vh;
    object-fit: cover;
  }

  nav li {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: baseline;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    color: var(--light);
  }

  .number {
    transform: translateY(300%);
    font-size: 0.8rem;
    font-weight: 200;
  }

  a {
    text-decoration: none;
    color: var(--gunMetal);
  }
  nav a {
    font-size: 3em;
    font-weight: 300;
    transform: translateY(-130%);
    transition: margin 0.2s;
  }

  nav a:hover {
    margin-left: 0.5rem;
  }

  .subhead {
    letter-spacing: 1px;
    font-size: 1em;
    font-weight: 400;
    margin-bottom: 5px;
  }

  .socials {
    display: flex;
    list-style-type: none;
    gap: 2em;
    font-size: 0.8em;
  }

  @media screen and (max-width: 1122px) {
  }

  @media screen and (max-width: 700px) {
    .menu-wrapper {
      top: 0;
      right: 3%;
    }

    .menu-button {
      height: 2rem;
    }

    nav {
      margin-top: 10%;
      width: 100%;
    }

    nav a {
      margin-top: 3%;
      font-size: 10vw;
    }

    .socials a {
      font-size: 0.8em;
    }

    .image {
      display: none;
    }

    .number {
      font-size: 0.8rem;
    }

    .middle-bar {
      width: max-content;
    }

    .bottom-bar {
      flex-direction: column;
      gap: 2rem;
    }

    .subhead {
      display: none;
    }
  }
</style>
