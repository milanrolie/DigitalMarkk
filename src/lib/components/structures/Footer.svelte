<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";
  import silver from "$lib/assets/silver.png";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.from(".footer", {
      scrollTrigger: {
        trigger: ".footer",
        scrub: 1,
        start: "top-=700",
        end: "center+-50",
      },
      y: -300,
    });

    gsap.from(".footer__content", {
      scrollTrigger: {
        trigger: ".footer",
        scrub: 1,
        start: "top-=700",
        end: "top center",
      },
      y: 100,
    });
  });
</script>

<footer id="contact" class="footer">
  <div class="footer__content">
    <p class="footer__text">
      Het fluitsignaal klinkt. Dit was hem dan, en jij bent door naar de
      volgende ronde. Klaar voor de wedstrijd van je leven?
    </p>
    <div class="footer__line"></div>
    <div class="footer__button-wrapper">
      <p class="button-wrapper__text">
        Stuur ons direct een voorzet via de mail. Krijg je hem zo snel mogelijk
        terug.
      </p>
      <a href="mailto: info@markk.nl" class="button-wrapper__button">
        <svg
          class="button-wrapper__button-svg-right"
          width="35"
          height="26"
          viewBox="0 0 35 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.00285e-05 14.1251L31.2703 14.1251L22.2031 23.4513L23.7453 25.0488L34.6828 13.7988C34.8866 13.588 35.0009 13.3029 35.0009 13.0057C35.0009 12.7085 34.8866 12.4234 34.6828 12.2126L23.7453 0.962581L22.2032 2.54883L31.2703 11.8751L2.02252e-05 11.8751L2.00285e-05 14.1251Z"
            fill="currentColor"
          />
        </svg>

        <svg
          width="35"
          height="26"
          viewBox="0 0 35 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="button-wrapper__button-svg-left"
        >
          <path
            d="M2.00285e-05 14.1251L31.2703 14.1251L22.2031 23.4513L23.7453 25.0488L34.6828 13.7988C34.8866 13.588 35.0009 13.3029 35.0009 13.0057C35.0009 12.7085 34.8866 12.4234 34.6828 12.2126L23.7453 0.962581L22.2032 2.54883L31.2703 11.8751L2.02252e-05 11.8751L2.00285e-05 14.1251Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>

    <div class="footer__contact-wrapper">
      <div class="contact-wrapper__contact">
        <div class="contact__image-text">
          <img src={silver} alt="Foto van Silver" />
          <ul class="contact-wrapper__contact-list">
            <li class="contact-list__item">Silver Apperloo</li>
            <li class="contact-list__item">info@digitalmarkk.nl</li>
            <li class="contact-list__item">+31 6 34 81 04 67</li>
          </ul>
        </div>
        <ul class="contact-wrapper__website-list mobile-hide">
          <li class="website-list__item">Bekijk ons werk</li>
          <li class="website-list__item">De derde helft</li>
        </ul>
        <ul class="contact-wrapper__socials-list">
          <li class="socials-list__item">LinkedIn</li>
          <li class="socials-list__item">Instagram</li>
        </ul>
      </div>
    </div>
    <svg
      class="footer__logo"
      width="361"
      height="272"
      viewBox="0 0 361 272"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M236.555 270.742C202.042 270.742 174.064 242.764 174.064 208.251V15C174.064 6.71571 180.779 0 189.064 0H230.655C238.94 0 245.655 6.71573 245.655 15V261.641C245.655 266.668 241.581 270.742 236.555 270.742Z"
        fill="#EEEAE4"
      />
      <path
        d="M88.7411 269.196C127.401 269.196 158.741 237.856 158.741 199.196L158.741 136.487C158.741 128.203 152.025 121.487 143.741 121.487L102.032 121.487C93.7476 121.487 87.0318 128.203 87.0318 136.487L87.0318 269.196L88.7411 269.196Z"
        fill="#EEEAE4"
      />
      <path
        d="M1.70931 269.063C40.3692 269.063 71.7093 237.723 71.7093 199.063L71.7093 136.354C71.7093 128.07 64.9936 121.354 56.7093 121.354L15 121.354C6.71574 121.354 7.04229e-06 128.07 6.31805e-06 136.354L-5.28373e-06 269.063L1.70931 269.063Z"
        fill="#EEEAE4"
      />
      <path
        d="M233.306 271.035C225.022 271.035 218.306 264.319 218.306 256.035V136.487C218.306 128.203 225.022 121.487 233.306 121.487H290.567C301.987 121.487 309.219 133.741 303.698 143.738L281.737 183.507C278.387 189.574 279.629 197.146 284.742 201.824L331.896 244.968C341.994 254.208 335.457 271.035 321.77 271.035H249.245H246.007H242.411H233.306Z"
        fill="#EEEAE4"
      />
    </svg>
  </div>
</footer>

<style>
  .footer {
    position: relative;
    padding: 2em;
    height: 80svh;
    background-color: var(--bright);
    width: 100%;
    z-index: 1;
    color: var(--light);
  }

  .footer__content {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .footer__text {
    font-size: 2em;
    width: 40%;
    font-weight: 200;
  }

  /* .footer__line {
    width: 100%;
    height: 1px;
    background-color: var(--light);
    margin: var(--padding-small) 0;
  } */

  .footer__button-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 40%;
    height: 20%;
    border-radius: var(--border-radius);
    background-color: var(--light);
    color: var(--bright);
    padding: 1rem;
    margin-bottom: var(--padding-small);
  }

  .button-wrapper__text {
    font-size: 1.5em;
    width: 70%;
    font-weight: 200;
  }

  .button-wrapper__button {
    position: relative;
    width: 25%;
    background-color: var(--bright);
    border: none;
    border-radius: 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0.5rem 0.5rem;
    transition: all 0.2s;
    border: 1px solid var(--bright);
    color: var(--light);
    cursor: pointer;
    overflow: hidden;
  }

  .button-wrapper__button-svg-left {
    position: absolute;
    left: -10rem;
    transition: all 0.7s ease-in-out;
  }

  .button-wrapper__button-svg-right {
    transition: all 0.8s ease-in-out;
    transition-delay: 0.1s;
  }

  .button-wrapper__button:hover .button-wrapper__button-svg-right {
    transform: translateX(3rem);
    transition: all 0.5s ease-in-out;
  }

  .button-wrapper__button:hover .button-wrapper__button-svg-left {
    right: 1rem;
    transform: translateX(16.5rem);
  }

  .footer__under-button {
    font-size: 1.5em;
    font-weight: 200;
  }

  .contact-wrapper__contact {
    position: absolute;
    bottom: var(--padding-small);
    left: var(--padding-small);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 50%;
  }

  .contact__image-text {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .contact-wrapper__contact img {
    width: 5rem;
    border-radius: 0.5rem;
    aspect-ratio: 1;
  }

  .contact-wrapper__contact ul {
    font-size: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 0;
    font-weight: 200;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .footer__logo {
    position: absolute;
    bottom: var(--padding-small);
    right: var(--padding-small);
    width: 20%;
  }

  @media screen and (max-width: 1024px) {
    .footer {
      height: auto;
    }

    .footer__text {
      width: 60%;
    }

    .footer__button-wrapper {
      width: 60%;
    }
  }

  @media screen and (max-width: 1024px) {
    .footer {
      padding: 1em;
      display: flex;
      flex-direction: column;
      height: 80svh;
    }

    .footer__text {
      font-size: 1.5em;
      width: 100%;
    }

    .footer__button-wrapper {
      width: 100%;
      height: 20%;
      border-radius: var(--border-radius);
      background-color: var(--light);
      color: var(--bright);
      padding: 1rem;
      margin-bottom: var(--padding-small);
    }

    .button-wrapper__text {
      font-size: 1em;
      width: 70%;
    }

    .button-wrapper__button {
      width: 25%;
      background-color: var(--bright);
      border: none;
      border-radius: 0.5rem;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0.5rem 0.5rem;
    }

    .footer__under-button {
      font-size: 1em;
    }

    .contact-wrapper__contact {
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      width: auto;
      height: auto;
      gap: 2rem;
      left: auto;
      bottom: auto;
      margin-top: var(--padding-small);
    }

    .contact__image-text {
      display: flex;
      /* flex-direction: column; */
      align-items: flex-start;
      gap: 1rem;
    }

    .contact-wrapper__contact img {
      width: 5rem;
      border-radius: 0.5rem;
      aspect-ratio: 1;
    }

    .contact-wrapper__contact ul {
      font-size: 1rem;
      list-style: none;
      padding: 0;
      margin: 0;
      padding: 0;
      font-weight: 200;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .footer__logo {
      position: absolute;
      bottom: var(--padding-small);
      right: var(--padding-small);
      width: 20%;
      height: max-content;
    }

    .contact-wrapper__website-list + .contact-wrapper__socials-list {
      display: none;
    }
  }
</style>
