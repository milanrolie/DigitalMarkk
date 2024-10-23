<script>
  import Project from "$lib/components/fragments/Project.svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  export let data;
</script>

<section id="projects">
  <h3>Projecten</h3>
  <div class="projects-wrapper">
    {#each data.allProjects as project}
      <article class="project">
        <Project {project} />
      </article>
    {/each}
  </div>
</section>

<style>
  section {
    position: relative;
    width: 100%;
    padding: var(--padding-large);
    padding-top: 20svh;
    z-index: 50;
    background-color: var(--dark);
  }

  h3 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: var(--light);
  }

  .projects-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--padding-medium);
    width: 100%;
  }

  article {
    position: relative;
    width: 100%;
    height: 70svh;
    margin-bottom: 3rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    section {
      padding: 1rem;
      padding-top: 10rem;
      width: 100%;
    }

    .projects-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: var(--padding);
    }

    h3 {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 2rem;
    }

    article {
      width: 100%;
      height: 50svh;
      margin-bottom: 4rem;
    }
  }
</style>
