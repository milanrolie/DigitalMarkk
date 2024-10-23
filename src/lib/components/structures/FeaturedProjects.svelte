<script>
  import Project from "$lib/components/fragments/Project.svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  export let data;

  onMount(() => {
    const circle = document.querySelector(".circle");
    const AnimateSvg = document.querySelector(".rotate-svg");
    const projects = document.querySelectorAll(".project-wrapper");

    let circleX = 0;
    let circleY = 0;
    let lastCircleX = 0;
    let lastCircleY = 0;
    let targetX = 0;
    let targetY = 0;

    const smoothFactor = 0.05;

    projects.forEach((project) => {
      project.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;

        circle.classList.add("show");
        AnimateSvg.classList.add("rotate");
      });

      project.addEventListener("mouseout", () => {
        targetX = lastCircleX;
        targetY = lastCircleY;

        circle.classList.remove("show");
        AnimateSvg.classList.remove("rotate");
      });
    });

    document.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function updateCirclePosition() {
      const dx = targetX - circleX;
      const dy = targetY - circleY;

      circleX += dx * smoothFactor;
      circleY += dy * smoothFactor;

      circle.style.left = circleX - circle.offsetWidth / 2 + "px";
      circle.style.top = circleY - circle.offsetHeight / 2 + "px";

      lastCircleX = circleX;
      lastCircleY = circleY;

      requestAnimationFrame(updateCirclePosition);
    }

    updateCirclePosition();
  });
</script>

<section class="featured-projects">
  <div class="featured-projects__container">
    <div class="circle mobile-hide">
      <svg
        class="rotate-svg"
        width="30"
        height="33"
        viewBox="0 0 30 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 17H29" stroke="black" stroke-width="4"></path>
        <path
          d="M12 31L27.216 18.0217C28.1521 17.2232 28.1521 15.7768 27.216 14.9783L12 2"
          stroke="black"
          stroke-width="4"
        ></path>
      </svg>
    </div>
    <h2 class="featured-projects__title">Onze projecten</h2>
    <div class="line desktop-hide"></div>

    {#each data.allProjects.slice(0, 1) as project}
      <article class="project">
        <Project {project} />
      </article>
    {/each}
  </div>
  <div class="project__grid">
    {#each data.allProjects.slice(1, 3) as project}
      <article class="project-wrapper">
        <Project {project} />
      </article>
    {/each}
  </div>
  <div class="project__fullwidth mobile-hide">
    {#each data.allProjects.slice(3, 4) as project}
      <article class="project">
        <Project {project} />
      </article>
    {/each}
  </div>

  <p class="projects__description mobile-hide">
    Wij zijn markk, twee spontane jongens uit het noorden van het westen van het
    land. Als er iets is waar onze hartjes sneller van gaan kloppen is het
    supermooie en rete goed werkende websites maken, waar andermans hartjes dan
    weer sneller van gaan kloppen.

    <a class="projects__link" href="/projects">Bekijk alle projecten</a>
  </p>
  <a class="projects__link desktop-hide" href="/projects"
    >Bekijk alle projecten</a
  >
</section>

<style>
  .featured-projects {
    position: relative;
    height: auto;
    width: 100%;
    padding: var(--padding-large);
    padding: 10svh var(--padding-large);
    z-index: 50;
    background-color: var(--dark);
  }

  .featured-projects__title {
    font-size: 1rem;
    letter-spacing: -0.06em;
    font-weight: 200;
    color: var(--light);

    margin: 0;
    line-height: 1em;
  }

  .featured-projects__container {
    display: grid;
    width: 100%;
    grid-template-columns: 40fr 60fr;
    gap: var(--padding-large);
  }

  article {
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: var(--padding-small);
  }

  article:nth-of-type(1) {
    aspect-ratio: 4/3;
  }

  article:nth-of-type(2) {
    aspect-ratio: 4/3;
  }

  article:nth-of-type(3) {
    aspect-ratio: 4/3;
  }

  .circle {
    position: fixed;
    top: 50%;
    height: 10em;
    border-radius: 100%;
    aspect-ratio: 1;
    background-color: var(--light);
    z-index: 10;
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.83, 0, 0.17, 1);
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :is(.show) {
    transform: scale(1);
    opacity: 1;
  }

  .rotate-svg {
    transition: 0.3s;
    transition-delay: 0.1s;
    stroke: var(--dark);
    transform: scale(0.5);
  }

  :is(.rotate) {
    transform: scale(1.5) rotate(-45deg);
  }

  .line {
    color: var(--light);
  }

  .project__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--padding-large);
    padding-top: 15svh;
  }

  .project__fullwidth {
    display: grid;
    grid-template-columns: 60fr 40fr;
    gap: var(--padding-large);
    padding-top: 15svh;
  }

  .projects__description {
    font-size: 2rem;
    line-height: 1.1em;
    color: var(--light);
    font-weight: 200;
    margin-top: 15svh;
    width: 45%;
  }

  .projects__link {
    display: block;
    font-size: 1rem;
    color: var(--light);
    text-decoration: underline;
    margin-top: 3rem;
    transition: 0.3s;
  }

  .projects__link:hover {
    text-decoration: none;
    color: #909090;
  }

  @media (max-width: 768px) {
    .line {
      position: relative;
      background-color: var(--grey-dark);
      width: 100%;
      height: 2px;
      margin: 0;
    }

    .featured-projects {
      padding: var(--padding-small);
      overflow: hidden;
    }

    .featured-projects__container {
      position: relative;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-bottom: 5rem;
      padding: 0;
      padding-right: var(--padding-small);
    }

    .project__grid {
      grid-template-columns: 1fr;
      padding-top: 0;
      width: 100%;
      padding-right: var(--padding-small);

      grid-gap: 5rem;
    }

    article:nth-of-type(3) {
      aspect-ratio: auto;
      padding-left: 0;
      transform: translateY(0);
    }

    article {
      width: 100%;
      height: 100%;
    }

    article:nth-of-type(1) {
      aspect-ratio: 1;
    }

    article:nth-of-type(2) {
      aspect-ratio: 1;
    }

    article:nth-of-type(3) {
      aspect-ratio: 1;
    }

    article:nth-of-type(3) {
      aspect-ratio: 1;
    }

    .projects__link {
      margin-top: 15svh;
      margin-bottom: var(--padding-large);
      font-weight: 200;
    }
  }
</style>
