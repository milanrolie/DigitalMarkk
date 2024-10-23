<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import SplitType from "split-type";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const text = new SplitType("#splitBlog", { types: "words" });
    gsap.from(text.words, {
      duration: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".gsap-load-blog",
        start: "top-=700",
      },
      opacity: 0,
      y: 20,

      onComplete() {
        SplitType.revert("#splitBlog");
      },
    });
  });
</script>

<div class="text__grid">
  <div></div>
  <p class="blog-text blog-text__introduction gsap-load-blog" id="splitBlog">
    Blogs, verhalen, onderzoek, bevindingen en ongezouten mening. Een
    maandelijks manifest vanuit eigen koker.
  </p>
</div>

<style>
  .text__grid {
    display: grid;
    grid-template-columns: 25fr 75fr;
    grid-gap: var(--gap-small);
    width: 100%;
  }

  .blog-text {
    font-size: 2em;
    width: 40rem;
    font-weight: 200;
  }

  @media (max-width: 768px) {
    .text__grid {
      grid-template-columns: 1fr;
    }

    .blog-text {
      font-size: 1.3rem;
      font-weight: 300;
      margin: 0;
      width: 90%;
      margin-left: 0;
      margin-top: 15svh;
    }
  }
</style>
