<script>
  import Footer from "$lib/components/structures/Footer.svelte";
  import ProjectIntro from "$lib/components/project/ProjectIntro.svelte";
  import Navigation from "$lib/components/structures/Navigation.svelte";
  import ProjectListPage from "$lib/components/project/ProjectListPage.svelte";
  import gsap from "gsap";
  import Menu from "$lib/components/fragments/Menu.svelte";
  import PageTransition from "$lib/components/fragments/PageTransition.svelte";

  import { onMount } from "svelte";

  export let data;

  onMount(() => {
    gsap.to("#gsapLoad", {
      delay: 0,
      duration: 1,
      opacity: 1,
      ease: "power2.Inout",
      stagger: 0.2,
    });

    gsap.to(".header-image", {
      delay: 0,
      duration: 2,
      y: 0,
      ease: "power4.out",
    });
  });
</script>

<PageTransition />
<Navigation color="var(--light)" />

<section class="first-content">
  <h2 id="gsapLoad">{data.projectData.data.project.projectLabel}</h2>
  <a id="gsapLoad" href={data.projectData.data.project.projectLink}
    >{data.projectData.data.project.linkName}</a
  >
  <img
    class="header-image"
    src={data.projectData.data.project.featuredImage.url}
    alt=""
  />
</section>

<ProjectIntro {data} />

<section>
  <figure>
    <img
      data-fadeIn
      class="project-image"
      src={data.projectData.data.project.projectImages[0].url}
      alt=""
      loading="lazy"
    />
  </figure>

  <div class="results">
    <div class="results__text">
      <div class="results__wrapper">
        <h2 class="results__title">Resultaat</h2>
        <p class="result-text">
          {@html data.projectData.data.project.resultText}
        </p>
      </div>
    </div>
    <video
      class="project-video"
      playsinline
      autoplay
      muted
      loop
      src={data.projectData.data.project.verticalVideo.url}
    ></video>
  </div>

  <div class="two-column-grid">
    <figure>
      <img
        data-fadeIn
        class="project-image right-image"
        data-gsap-image="true"
        src={data.projectData.data.project.projectImages[1].url}
        alt=""
        loading="lazy"
      />
    </figure>

    {#if data.projectData.data.project.projectImages[2]}
      <figure>
        <img
          data-fadeIn
          class="project-image"
          data-gsap-image="true"
          src={data.projectData.data.project.projectImages[2].url}
          alt=""
          loading="lazy"
        />
      </figure>
    {/if}
  </div>
</section>

<ProjectListPage {data} />

<Footer />

<style>
  section {
    position: relative;
    padding: var(--padding-large);
    background-color: var(--light);
    z-index: 2;
  }

  figure {
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    margin-top: var(--padding-large);
  }

  .first-content {
    margin-top: 30svh;
  }

  h2 {
    font-size: 0.9rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  a {
    color: var(----dark);
    text-decoration: none;
    font-size: 2rem;
    transition: 0.3s;
    text-transform: uppercase;
    cursor: pointer;
  }

  a:hover {
    color: var(--main-bright);
  }

  #gsapLoad {
    opacity: 0;
  }

  .header-image {
    position: sticky;
    top: 0;
    width: 100%;
    height: 70svh;
    margin-top: var(--padding-large);
    object-fit: cover;
    transform: translateY(100%);
  }

  .project-image {
    position: absolute;
    inset: 0;
    height: auto;
    width: 100%;
    height: 100%;
    margin: var(--padding-large) 0;
    object-fit: cover;
    transform: scale(1.1);
  }

  .results {
    display: grid;
    grid-template-columns: 1fr 1fr;

    font-size: 1.1rem;
    margin: 2rem 0;
  }

  .results__wrapper {
    width: 50%;
  }

  .results__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .results__title {
    margin-bottom: var(--padding-small);
  }

  .project-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1;
  }

  @media (max-width: 768px) {
    section {
      padding: var(--padding-small);
    }

    a {
      font-size: 1rem;
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

    .header-image {
      height: 50svh;
    }

    .project-image {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .results {
      width: 100%;
      padding: var(--padding-small);
      grid-template-columns: 1fr;
      padding: 0;
      margin: 0;
      padding-top: 2rem;
    }

    .results__wrapper {
      width: 100%;
      padding-bottom: 2rem;
    }
  }
</style>
