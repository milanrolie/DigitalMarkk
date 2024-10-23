<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (isDesktop) {
      gsap.to(".gsap-wrapper", {
        scrollTrigger: {
          trigger: ".gsap-ruler",
          scrub: 1,
          start: "top",
          end: "bottom",
        },
        y: "-95%",
      });

      gsap.from(".bar", {
        scrollTrigger: {
          trigger: ".gsap-ruler",
          scrub: 1,
          start: "top",
          end: "bottom-=700",
        },
        "--progress": 1,
      });

      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            scrub: 1,
            start: "top-=100",
            end: "top+=50",
          },
          scale: 0.9,
        });
      });
    }
  });
</script>

<section class="gsap-ruler" id="tactiek">
  <div class="left">
    <h6>tactiek</h6>
    <div class="scrolling-title">
      <div class="gsap-wrapper">
        <p>Koffie</p>
        <p>Jouw verhaal</p>
        <p>Strategie</p>
        <p>Ontwerp</p>
        <p>Content</p>
        <p>Bouwen</p>
        <p>Scoren</p>
      </div>
    </div>
    <div class="progress">
      <div class="bar" />
    </div>
    <p class="subscript">
      Scoren doe je samen, wij geven de voorzet, jij kopt hem in. Samen scoren
      met ons ziet er vaak als volgt uit:
    </p>
    <!-- <button>Samenwerken?</button> -->
  </div>

  <div class="right">
    <div class="card1 card">
      <div class="number">1/8</div>
      <!-- <img class="card-icon" src={coffee} alt="" /> -->
      <div class="card-text-wrapper">
        <p class="margin card-title">Koffie drinken</p>
        <p class="description">
          Omdat alle goede samenwerkingen beginnen met koffie. (Thee is
          natuurlijk ook goed)
        </p>
      </div>
    </div>
    <div class="card2 card">
      <div class="number">2/8</div>
      <!-- <img class="card-icon" src={map} alt="" /> -->
      <div class="card-text-wrapper">
        <p class="margin card-title">Jouw verhaal in kaart</p>

        <p class="description">
          Het verhaal van jouw onderneming retegoed begrijpen is misschien wel
          de allerbelangrijkste stap in ons proces.
        </p>
      </div>
    </div>
    <div class="card3 card">
      <div class="number">3/8</div>
      <!-- <img class="card-icon" src={lightBulb} alt="" /> -->
      <div class="card-text-wrapper">
        <p class="margin card-title">Concept & Strategie</p>

        <p class="description">
          Vervolgens gaan wij de creatieve motor eens flink aanzetten om een
          concept en strategie te bedenken.
        </p>
      </div>
    </div>
    <div class="card4 card">
      <div class="number">4/8</div>
      <!-- <img class="card-icon" src={art} alt="" /> -->
      <div class="card-text-wrapper">
        <p class="margin card-title">Ontwerp</p>

        <p class="description">
          Hier rolt een ontwerp uit waarin we kijken naar opbouw en structuur
          van de site. En als deze is goedgekeurd…
        </p>
      </div>
    </div>
    <div class="card5 card">
      <div class="number">5/8</div>
      <!-- <img class="card-icon" src={content} alt="" /> -->
      <div class="card-text-wrapper">
        <p class="margin card-title">Content</p>

        <p class="description">
          Content vormt de <i>ziel</i> van je site. Tijd om je verhaal te vertellen
          met tekst, foto, video en animatie.
        </p>
      </div>
    </div>
    <div class="card6 card">
      <div class="number">6/8</div>
      <!-- <img class="card-icon" src={build} alt="" /> -->
      <div class="card-text-wrapper">
        <p class="margin card-title">Bouwen</p>

        <p class="description">
          Nu begint het echte werk en gaan we de site voor het eggie bouwen.
          Laag voor laag, pagina voor pagina.
        </p>
      </div>
    </div>

    <div class="card7 card">
      <div class="number">7/8</div>
      <!-- <img class="card-icon" src={test} alt="" /> -->
      <div class="card-text-wrapper">
        <p class="margin card-title">Feedback & Testen</p>

        <p class="description">
          Tijd voor de puntjes op de ï, en testen tot we een ons wegen. Werkt
          alles zoals het hoort?
        </p>
      </div>
    </div>

    <div class="card8 card">
      <div class="number">8/8</div>
      <!-- <img class="card-icon" src={flag} alt="" /> -->
      <div class="card-text-wrapper">
        <p class="margin card-title">Scoren maar!</p>

        <p class="description">
          Dan kop jij hem in en is het tijd om te scoren met je gloednieuwe
          online identiteit!
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    background-color: var(--grey);
    padding: var(--padding-large);
    gap: 5rem;
    z-index: 150;
  }

  .left {
    position: sticky;
    top: var(--padding-small);
    width: 50%;
    height: 100vh;
    padding-right: 10%;
  }

  h6 {
    font-size: 1vw;
    font-weight: 300;
    padding: 1em 0;
    transform: translateX(5px);
  }

  .ball {
    transform: scale(0.7) translateY(5px);
  }

  .scrolling-title {
    height: 2.5rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  .scrolling-title p {
    font-size: 3rem;
    font-weight: 500;
    line-height: 1em;
  }

  .progress {
    position: relative;
    width: 100%;
    border-bottom: 1px solid #bababa;
    margin: 1rem 0;
  }

  .bar {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-bottom: 1px solid var(--dark);
    clip-path: polygon(
      0 0,
      calc((1 - var(--progress)) * 100%) 0,
      calc((1 - var(--progress)) * 100%) 100%,
      0% 100%
    );
  }

  .subscript {
    font-size: 1.2rem;
    line-height: 1.2em;
    font-weight: 200;
    letter-spacing: 0.1px;
    max-width: 75%;
  }

  .right {
    width: 54%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card {
    position: sticky;
    top: 1rem;
    height: 40vh;
    width: 100%;
    background-color: var(--bright);
    padding: 2rem;
    color: var(--light);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
  }

  .number {
    font-size: 2em;
  }

  .card-icon {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: auto;
    height: 3rem;
  }

  .card-title {
    font-size: 3rem;
    font-weight: 500;
    width: 50%;
    line-height: 1em;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1rem;
    opacity: 0.8;
    max-width: 80%;
  }

  .card1 {
    background-color: var(--bright);
    top: 1rem;
  }

  .card2 {
    background-color: #2b2b2b;
    top: 2rem;
  }

  .card3 {
    background-color: #d9d9d9;
    top: 3rem;
  }

  .card4 {
    background-color: #bababa;
    top: 4rem;
  }

  .card5 {
    background-color: #808080;
    top: 5rem;
  }

  .card6 {
    background-color: #595959;
    top: 6rem;
  }

  .card7 {
    background-color: #bababa;
    top: 7rem;
  }

  .card8 {
    background-color: #2b2b2b;
    top: 8rem;
  }

  @media screen and (max-width: 700px) {
    section {
      height: max-content;
      width: 100%;
      display: flex;
      padding: var(--padding-small);
      padding-top: var(--padding-large);
      gap: 0rem;
      flex-direction: column;
    }

    .left {
      position: sticky;
      top: 1rem;
      width: 100%;
      height: auto;
      margin-bottom: 2rem;
      padding-top: 0;
    }

    .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    h6 {
      font-size: 1rem;
      letter-spacing: -0.06em;
      font-weight: 300;
      margin: 0;
      margin-bottom: 0;
      line-height: 1em;
    }

    .subscript {
      font-size: 1.3rem;
      font-weight: 300;
      margin: 0;
      width: 90%;
    }

    .scrolling-title p {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 500;
      line-height: 1em;
      display: none;
    }

    .scrolling-title {
      height: 1rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      display: none;
    }

    .progress {
      display: none;
    }

    .bar {
      display: none;
    }

    .card {
      height: 30svh;
      width: 100%;
      border-radius: 1rem;
      padding: 5%;
      color: var(--light);
    }

    .card p {
      font-size: 0.9rem;
    }

    .card1 {
      top: 13rem;
    }

    .card2 {
      top: 15rem;
    }

    .card3 {
      top: 17rem;
    }

    .card4 {
      top: 19rem;
    }

    .card5 {
      top: 21rem;
    }

    .card6 {
      top: 23rem;
    }

    .card7 {
      top: 25rem;
    }

    .card8 {
      top: 27rem;
    }

    .card9 {
      top: 29rem;
    }
  }
</style>
