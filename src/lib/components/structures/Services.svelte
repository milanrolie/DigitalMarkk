<script>
</script>

<section class="services">
  <h2 class="services__title desktop-hide">Diensten</h2>
  <div class="line"></div>
  <div class="services__container">
    <div class="services__text">
      <div class="text__container">
        <h2 class="services__title mobile-hide">Diensten</h2>
        <p class="services__paragraph">
          Als er iets is waar onze hartjes sneller van gaan kloppen is het mooie
          en rete goed werkende websites maken, waar andermans hartjes dan weer
          sneller van gaan kloppen.
        </p>
      </div>
      <a class="services__link mobile-hide" href="/services"
        >Alle diensten bekijken</a
      >
    </div>
    <div class="services__image">
      <img
        data-fadeIn="true"
        src="https://akoyamockups.com/cdn/shop/files/Image_03_comp_8a02d72e-ecbd-44e4-8319-cb1043b8cfe2.jpg?v=1712352223&width=1100"
        alt="services"
      />
      <div class="image__description">
        <h3 class="image__title">Design</h3>
        <p class="services__description">
          onderzoek naar verschillende dingen binnen het project
        </p>
      </div>
    </div>
    <div class="services__image">
      <img
        data-fadeIn="true"
        src="https://akoyamockups.com/cdn/shop/files/Image_02_comp_34981341-c59d-4d59-8b8e-73bc21381e20.jpg?v=1710707265&width=1100"
        alt="services"
      />
      <div class="image__description">
        <h3 class="image__title">Custom code</h3>
        <p class="services__description">
          onderzoek naar verschillende dingen binnen het project
        </p>
      </div>
    </div>
    <a class="services__link desktop-hide" href="/services"
      >Alle diensten bekijken</a
    >
  </div>
</section>

<style>
  .services {
    position: sticky;
    top: 5rem;

    padding: var(--padding-large);
    background-color: var(--light);
    width: 100%;
    z-index: 0;
    margin-bottom: 20svh;
  }

  .services__title {
    font-size: 2rem;
    letter-spacing: -0.06em;
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5rem;
    line-height: 1em;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: var(--main-black);
    margin: 1rem 0;
    margin-top: 0;
  }

  .services__container {
    position: relative;
    display: grid;
    height: 80vh;
    grid-template-columns: 25fr 37.5fr 37.5fr;
    gap: 1rem;
  }

  .services__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  .services__paragraph {
    font-size: 1.2rem;
    line-height: 1em;
    font-weight: 200;
    letter-spacing: 0.1px;
    padding-right: 2rem;
    margin: 0;
  }

  .services__link {
    font-family: var(--font-secondary);
    font-size: 0.9rem;
    display: block;
    background-color: var(--dark);
    width: max-content;
    color: var(--light);
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--dark);
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .services__link::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--light);
    transition: top 0.3s;
    z-index: -1;
  }

  .services__link:hover::before {
    top: 0;
  }

  .services__link:hover {
    background-color: transparent; /* Ensure background color doesn't override the pseudo-element */
    color: var(--dark);
  }

  .services__image {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
  }

  .services__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image__title {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  .image__description {
    position: absolute;
    bottom: 0;
    left: 1rem;
    display: flex;
    flex-direction: column;
    color: var(--light);
    text-transform: lowercase;
    width: 40%;
  }

  .services__description {
    font-size: 0.9rem;
    font-weight: 200;
  }

  @media (max-width: 1024px) {
    .services__container {
      grid-template-columns: 25% 70% 5%;
    }
  }

  @media (max-width: 768px) {
    .services {
      position: relative;
      height: auto;
      padding: var(--padding-small);
    }

    .line {
      margin: 0.5rem 0;
    }

    .services__title {
      font-size: 1rem;
      letter-spacing: -0.06em;
      font-weight: 300;
      margin: 0;
      margin-bottom: 0.5rem;
      line-height: 1em;
    }

    .services__paragraph {
      font-size: 1.3rem;
      font-weight: 300;
      margin-bottom: 3rem;
      width: 90%;
    }

    .services__container {
      height: auto;
      grid-template-columns: 1fr;
      grid-gap: var(--padding-small);
    }

    .services__image {
      height: 100%;
      width: 100%;
      aspect-ratio: 1;
    }

    .services__image img {
      height: 100%;
      width: 100%;
      aspect-ratio: 1;
    }
  }
</style>
