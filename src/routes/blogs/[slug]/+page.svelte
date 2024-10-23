<script>
  import Footer from "$lib/components/structures/Footer.svelte";
  import Navigation from "$lib/components/structures/Navigation.svelte";
  import RelatedBlogs from "$lib/components/structures/RelatedBlogs.svelte";
  import PageTransition from "$lib/components/fragments/PageTransition.svelte";
  import gsap from "gsap";

  import { onMount } from "svelte";

  export let data;

  onMount(() => {
    gsap.to("#gsapLoadIn", {
      delay: 0.5,
      duration: 1,
      ease: "power4.out",
      y: 0,
    });
  });
</script>

<PageTransition />
<Navigation color="var(----dark)" />

<section class="first-content">
  <div class="text__container">
    <h1 id="sentenceDown">{data.blogData.data.blog.title}</h1>
    <div class="info-wrapper" id="sentence">
      <p>{data.blogData.data.blog.date}</p>

      <p class="horizontal-line">
        {data.blogData.data.blog.readingTime} leestijd
      </p>
    </div>
  </div>
  <figure id="gsapLoadIn">
    <img
      data-fadeIn="true"
      class="first-image"
      src={data.blogData.data.blog.featuredImage.url}
      alt=""
    />
  </figure>
  <div class="line"></div>

  <div class="blog__content">
    <h2 class="blog__title">Actueel</h2>
    <p class="blog-text">
      {@html data.blogData.data.blog.blogText}
    </p>
  </div>

  <RelatedBlogs {data} />
</section>

<Footer />

<style>
  #gsapLoadIn {
    transform: translateY(50vh);
  }

  section {
    position: relative;
    padding: var(--padding-large);
    background-color: var(--light);
    z-index: 2;
    padding-top: 25svh;
  }

  .text__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10svh;
  }

  h1 {
    font-size: 100px;
    font-weight: 400;
    font-family: var(--font-secondary);
    margin: 0;
  }

  .info-wrapper {
    display: flex;
    align-items: center;
    margin: 0;
    gap: 1rem;
    font-weight: 200;
  }

  figure {
    position: relative;
    width: 100%;
    height: 80vh;
    margin-top: 5rem;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .horizontal-line {
    border-left: 1px solid var(----dark);
    padding-left: 1rem;
  }

  .blog__content {
    display: grid;
    grid-template-columns: 25fr 75fr;
    gap: 2rem;
  }

  .blog__title {
    font-size: 2rem;
    font-weight: 300;
    margin: 0;
  }

  .blog-text {
    width: 60%;
    font-size: 1.2rem;
    font-weight: 200;
    margin: 0;
    transform: translateY(-1rem);
  }

  @media (max-width: 768px) {
    section {
      padding: var(--padding-small);
      padding-top: 25svh;
    }

    h1 {
      font-size: 3rem;
    }

    figure {
      position: relative;
      width: 100%;
      height: 40vh;
      margin-top: 5rem;
    }

    .info-wrapper {
      font-size: 0.8rem;
    }

    .blog__content {
      display: grid;
      grid-template-columns: 15fr 85fr;
      gap: 2rem;
    }

    .blog__title {
      font-size: 1rem;
    }

    .blog-text {
      font-size: 0.9rem;
      width: 90%;
    }
  }
</style>
