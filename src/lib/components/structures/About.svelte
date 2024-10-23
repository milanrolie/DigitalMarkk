<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import SplitType from "split-type";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const text = new SplitType("#split", { types: "words" });
    const subtext = new SplitType("#subtext", { types: "words" });

    gsap.from("#gsapLoad", {
      scrollTrigger: {
        trigger: "#gsapLoad",
        start: "top center",
      },
      duration: 1,
      opacity: 0,
      y: 20,
    });

    gsap.from(text.words, {
      scrollTrigger: {
        trigger: text.words,
        start: "top center",
      },
      delay: 0,
      duration: 1,
      stagger: 0.01,
      opacity: 0,
      y: 20,
      onComplete() {
        SplitType.revert("#split");
      },
    });

    gsap.from(subtext.words, {
      scrollTrigger: {
        trigger: subtext.words,
        start: "top bottom",
      },
      duration: 1,
      stagger: 0.005,
      opacity: 0,
      y: 20,
      onComplete() {
        SplitType.revert("#subtext");
      },
    });

    gsap.from(".line", {
      scrollTrigger: {
        trigger: ".line",
        start: "top bottom",
      },
      duration: 1,
      stagger: 0.5,
      "--progress": 1,
    });

    gsap.from(".button-gsap", {
      scrollTrigger: {
        trigger: ".line",
        start: "top bottom",
      },
      delay: 0.3,
      duration: 1,
      stagger: 0.2,
      opacity: 0,
      y: 20,
    });
  });
</script>

<section id="about">
  <div class="about__container">
    <h2 class="about__title" id="gsapLoad">Webbureau met ballen</h2>
    <div class="about__paragraph">
      <p class="paragraph__introduction gsap-load" id="split">
        Wij zijn <span class="blue">markk</span>, twee spontane jongens uit het
        noorden van het westen van het land. Als er iets is waar onze hartjes
        sneller van gaan kloppen is het supermooie en rete goed werkende
        websites maken, waar andermans hartjes dan weer sneller van gaan
        kloppen.
      </p>
      <a href="/team" class="about__link">
        <span class="bekijk"> Bekijk </span> het team
        <svg
          class="arrow"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0.043796L8.8692 2.23351e-05C9.96053 -0.00536481 10.8104 0.964567 10.6574 2.04085L9.41409 10.7878L7.6574 10.5172L8.66123 3.45517L1.51242 9.66967L0.337256 8.32849L7.87566 1.77533L0.0315291 1.81404L0 0.043796Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  section {
    padding: var(--padding-large);
    background-color: var(--light);
    /* height: 80vh; */
  }

  .about__container {
    display: grid;
    grid-template-columns: 25% 50% 20%;
  }

  .about__title {
    font-size: 0.9rem;
    font-weight: 400;
    max-width: 20rem;
    font-family: var(--font-secondary);
    margin: 0;
  }

  .paragraph__introduction {
    margin-bottom: 2rem;
    font-size: 2rem;
    line-height: 1.1em;
    font-weight: 400;
    letter-spacing: 0.1px;
    margin: 0;
  }

  .about__link {
    width: max-content;
    margin-top: 20svh;
    display: flex;
    flex-direction: column;
    line-height: 1em;
    gap: 3px;
  }

  .bekijk {
    display: block;
    font-family: var(--font-secondary);
    text-transform: lowercase;
  }

  .about__link:hover {
    text-decoration: underline;
  }

  .arrow {
    margin-top: 0.2rem;
  }

  @media (max-width: 1024px) {
    .about__container {
      grid-template-columns: 25% 70% 5%;
    }
  }

  @media (max-width: 768px) {
    section {
      height: auto;
      padding: var(--padding-small);
    }

    .about__container {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .about__title {
      max-width: 15rem;
      font-weight: 200;
    }

    .paragraph__introduction {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    .about__number {
      display: none;
    }
  }
</style>
