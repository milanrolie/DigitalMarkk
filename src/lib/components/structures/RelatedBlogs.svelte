<script>
  import Blog from "$lib/components/fragments/Blog.svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import BlogText from "$lib/components/particles/BlogText.svelte";
  import { onMount } from "svelte";

  export let data;

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {});
</script>

<section class="blogs__hero-section" id="blog">
  <div class="blogs__text-wrapper flex">
    <h3 class="blogs__title">Andere inzichten</h3>
  </div>
  <div class="line"></div>

  <div class="blogs__container">
    <h4 class="blogs__width mobile-hide">spotlight</h4>

    <div class="blogs__grid flex">
      {#each data.allBlogs as blog}
        <div class="blog__container">
          <Blog {blog} />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .blogs__hero-section {
    position: relative;
    width: 100%;
    background-color: var(--light);
    padding: 20vh var(--padding-large);
    overflow: hidden;
    z-index: 10;
  }

  .flex {
    display: flex;
  }

  .blogs__text-wrapper {
    width: 100%;
    height: max-content;
  }

  .blogs__width {
    width: 50%;
    font-size: 2rem;
    font-weight: 300;
    margin: 0;
  }

  .blogs__title {
    font-size: 2rem;
    font-weight: 300;
    margin: 0;
  }

  .blogs__container {
    position: relative;
    display: grid;
    grid-template-columns: 25fr 75fr;
    width: 100%;
    gap: var(--gap-medium);
    overflow: scroll;
  }

  .blogs__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap-medium);
  }

  @media (max-width: 1024px) {
    .blogs__hero-section {
      width: 100%;
      background-color: var(--light);
      padding: var(--padding-small);
      overflow: hidden;
    }
  }

  @media (max-width: 768px) {
    .blogs__hero-section {
      padding: 0;
      height: auto;
    }

    .blogs__text-wrapper {
      flex-direction: column;
    }

    .blogs__title {
      font-size: 1rem;
      letter-spacing: -0.06em;
      font-weight: 300;
      margin: 0;
      margin-bottom: 0rem;
      line-height: 1em;
      margin-top: 15svh;
    }

    .blogs__width {
      width: 100%;
      max-width: 100%;
    }

    .blogs__container {
      grid-template-columns: 1fr;
      gap: var(--gap-small);
    }

    .blogs__grid {
      grid-template-columns: 1fr;
      gap: var(--gap-small);
    }
  }
</style>
