<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import SplitType from "split-type";
  import { onMount } from "svelte";

  export let data;

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const text = new SplitType("#split", { types: "words" });
    const subtext = new SplitType("#subtext", { types: "words" });

    gsap.from(text.words, {
      duration: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".gsap-load",
        start: "top-=400",
      },
      opacity: 0,
      y: 20,
    });

    gsap.from(subtext.words, {
      duration: 1,
      stagger: 0.005,
      scrollTrigger: {
        trigger: ".gsap-load",
        start: "top-=300",
      },
      opacity: 0,
      y: 20,
    });

    gsap.from(".line", {
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".line",
        start: "top-=400",
      },
      "--progress": 1,
    });

    gsap.from(".button-gsap", {
      delay: 0.3,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".line",
        start: "top-=400",
      },
      opacity: 0,
      y: 20,
    });
  });
</script>

<section id="about">
  <div class="flex-wrapper">
    <div class="left">
      <h3>{data.projectData.data.project.projectTitle}</h3>
    </div>
    <div class="right">
      <div class="left-text">
        <h2>Context</h2>
        <p class="introduction gsap-load" id="split">
          {@html data.projectData.data.project.contextText}
        </p>
      </div>

      <div class="right-text">
        <h2>Concept</h2>
        <p class="subtext gsap-load" id="subtext">
          {@html data.projectData.data.project.conceptText}
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    padding: 1rem var(--padding-large);
    height: auto;
    padding-bottom: 20svh;
  }

  .flex-wrapper {
    display: flex;
  }

  .left {
    width: 40%;
  }

  .right {
    position: relative;
    display: flex;
    width: 60%;
    gap: 3rem;
    padding-right: 1rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .introduction {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    width: 100%;
  }

  .subtext {
    width: 100%;
    font-size: 1.1rem;
  }

  .left-text {
    width: 54%;
  }

  .right-text {
    width: 45%;
    line-height: 1.5em;
  }

  p:last-of-type {
    margin-bottom: 1rem;
  }

  button {
    background-color: var(----dark);
    color: var(--light);
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: none;
    text-transform: uppercase;
    font-family: var(--main-font);
    cursor: pointer;
    /* transition: 0.2s; */
    font-size: 0.8rem;
    margin-right: 0.5rem;
  }

  button:hover {
    background-color: var(--main-bright);
  }

  @media (max-width: 1024px) {
    .left {
      width: 30%;
    }

    .right {
      width: 100%;
      flex-direction: column;
    }

    .left-text {
      width: 100%;
    }

    .right-text {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    section {
      height: auto;
      padding-bottom: 0;
      padding: var(--padding-small);
    }

    .flex-wrapper {
      flex-direction: column;
    }

    .left {
      width: 100%;
      display: none;
    }

    .right {
      width: 100%;
      flex-direction: column;
    }

    h2 {
      font-size: 1rem;
      letter-spacing: -0.06em;
      font-weight: 300;
      margin: 0;
      margin-bottom: 0.5rem;
      line-height: 1em;
      text-transform: lowercase;
    }

    .introduction {
      margin: 0;
      font-size: 1.2rem;
      width: 100%;
    }

    .subtext {
      width: 100%;
      font-size: 1.1rem;
    }

    .left-text {
      width: 100%;
    }

    .right-text {
      width: 100%;
      line-height: 1.5em;
    }

    p:last-of-type {
      margin-bottom: 1rem;
    }

    button {
      background-color: var(----dark);
      color: var(--light);
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      border: none;
      text-transform: uppercase;
      font-family: var(--main-font);
      cursor: pointer;
      /* transition: 0.2s; */
      font-size: 0.8rem;
      margin-right: 0.5rem;
    }

    button:hover {
      background-color: var(--main-bright);
    }
  }
</style>
