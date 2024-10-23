<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.from(".big-text__title", {
      scrollTrigger: {
        trigger: ".big-text",
        start: "top-=100%",
        end: "top",
        scrub: 1,
      },
      y: 300,
      opacity: 0,
    });

    gsap.from(".big-text__paragraph", {
      scrollTrigger: {
        trigger: ".big-text",
        start: "top-=100%",
        end: "top",
        scrub: 1,
      },
      y: 400,
    });
  });
</script>

<section class="big-text">
  <div class="big-text__container">
    <h2 class="big-text__title">
      Wij helpen je jouw verhaal vertellen, via web -strategie, -design en
      -development.
    </h2>

    <p class="big-text__paragraph">
      Dit doen we 100% op maat in custom code of we bouwen in WordPress.
      Allemaal zodat zowel Google als jouw doelgroep er helemaal gelukkig van
      worden. Onderscheidend en altijd met ballen. Thuisbasis Utrecht, dus
      altijd in de buurt.
      <a class="big-text__link" href="/services">Lees meer over onze tactiek</a>
    </p>
  </div>
</section>

<style>
  .big-text {
    position: relative;
    padding: 0;
    padding-top: 0;
    width: 100%;
    height: 100svh;
    background-color: var(--light);
    z-index: 5;
  }

  .big-text__container {
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: 100%;
    height: 100%;
    gap: 1rem;
    padding: var(--padding-large);
    padding-right: 25%;
  }

  .big-text__title {
    font-size: 4rem;
    letter-spacing: -0.06em;
    font-weight: 200;
    margin: 0;
    line-height: 1.1em;
    text-indent: 25vw;
    width: 100%;
    margin-top: 10rem;
  }

  .big-text__paragraph {
    font-size: 1.2rem;
    line-height: 1.2em;
    margin-top: 10%;
    margin-left: 40vw;
    color: #909090;
    font-weight: 200;
    max-width: 31%;
  }

  .big-text__link {
    display: block;
    font-size: 1rem;
    color: #909090;
    text-decoration: underline;
    margin-top: 3rem;
    transition: 0.3s;
  }

  .big-text__link:hover {
    color: var(--light);
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    .big-text {
      height: max-content;
    }

    .big-text__container {
      padding: var(--padding-small);
      height: max-content;
      padding-bottom: 25svh;
    }

    .big-text__title {
      font-size: 2.5rem;
      text-indent: 0;
      margin-top: 0;
    }

    .big-text__paragraph {
      font-size: 1rem;
      margin-left: 0;
      max-width: 100%;
    }
  }
</style>
