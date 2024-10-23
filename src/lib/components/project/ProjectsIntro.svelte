<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import SplitType from "split-type";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const colortext = new SplitType("#colortext", { types: "words" });

    gsap.from(colortext.words, {
      scrollTrigger: {
        trigger: ".hallo",
        start: "top",
        end: "center",
        scrub: 1,
        steps: 1,
      },
      stagger: 0.5,
      color: "gray",
    });
  });
</script>

<section class="hallo">
  <p id="colortext">
    Dit zijn ons zorgvuldig geselecteerde projecten. We hebben ze met veel
    liefde gemaakt en zijn er trots op. We hopen dat je ze net zo leuk vindt als <span
    >
      wij.
    </span>
  </p>
</section>

<style>
  section {
    padding: 1rem var(--padding);
    height: 100svh;
    margin-bottom: -35svh;
  }

  p {
    position: sticky;
    top: var(--padding);
    font-size: 3.5rem;
    font-weight: 400;
    width: 70%;
    height: auto;
  }

  span {
    color: var(--main-bright);
  }
</style>
