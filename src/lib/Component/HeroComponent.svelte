
<script>
  import Herofoto from '#lib/assets/HG-20240713-8674.jpg';
</script>

<svelte:head>
  <title>Buurtcampuskrant | Verhalen uit de buurt</title>
  <meta
    name="description"
    content="Ontdek nieuws, projecten en verhalen van de Buurtcampus in Amsterdam."
  />
</svelte:head>

<main>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-content">
      <h1 id="hero-title">Verhalen van de buurt voor de buurt</h1>

      <p class="hero-description">
        Blijf op de hoogte van het laatste nieuws, bijzondere
        projecten en inspirerende verhalen van de Buurtcampus
        Amsterdam.
      </p>

      <a href="#artikelen" class="hero-button">
        Ontdek de buurten
        <span aria-hidden="true">→</span>
      </a>
    </div>

    <div class="hero-image">
      <img
        src={Herofoto}
        alt="De omgeving van Amsterdam met gebouwen en water"
        width="800"
        height="900"
        fetchpriority="high"
      />
    </div>
  </section>

  <section
    class="articles"
    id="artikelen"
    aria-labelledby="articles-title"
  >
    <h2 id="articles-title">Ontdek de buurten</h2>

    <p>
      Ontdek nieuws, projecten en inspirerende verhalen uit
      Amsterdam Nieuw-West, Oost en Zuidoost.
    </p>
  </section>
</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    margin: 0;
    font-family: Arial, sans-serif;
    color: #303A6D;
  }

  /* Hero met container query */

  .hero {
    container-type: inline-size;
    container-name: hero;

    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 2rem;
    padding: 3rem 1.25rem;
    background-color: #F5EBDF;
    color: #303A6D;
  }

  /* Hero-teksten iets lager plaatsen */

  .hero-content {
    max-width: 650px;
    position: relative;
    top: 30px;
  }

  .hero h1 {
    margin: 0 0 1.5rem;
    max-width: 650px;
    font-family: "Arial Black", Arial, sans-serif;
    font-size: clamp(2.5rem, 10vw, 3.5rem);
    line-height: 1.05;
  }

  .hero-description {
    margin: 0 0 2rem;
    font-size: 1rem;
    line-height: 1.7;
  }

  /* Knop */

  .hero-button {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 6px;
    background-color: #EA5B0D;
    color: #FFFFFF;
    font-weight: 700;
    text-decoration: none;
    transition: background-color 0.2s ease;
  }

  .hero-button:hover {
    background-color: #C94B08;
  }

  .hero-button:focus-visible {
    outline: 3px solid #212121;
    outline-offset: 4px;
  }

  /* Kleinere afbeelding */

  .hero-image {
    width: 100%;
    max-width: 380px;
    justify-self: end;
    min-width: 0;
  }

  .hero-image img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 12px;
  }

  /* Container query voor bredere containers */

  @container hero (min-width: 650px) {
    .hero {
      grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
      gap: 3rem;
      padding: 5rem 8%;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 5vw, 5rem);
    }

    .hero-description {
      font-size: 1.15rem;
    }

    .hero-image img {
      aspect-ratio: 4 / 4.5;
    }
  }

  /* Artikelen */

  .articles {
    padding: 3rem 1.25rem;
    background-color: #FFFFFF;
    color: #303A6D;
    scroll-margin-top: 1rem;
  }

  .articles h2 {
    margin: 0 0 1rem;
    font-family: "Arial Black", Arial, sans-serif;
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    line-height: 1.15;
  }

  .articles p {
    max-width: 650px;
    margin: 0;
    font-size: 1rem;
    line-height: 1.7;
  }

  /* Minder beweging voor toegankelijkheid */

  @media (prefers-reduced-motion: reduce) {
    :global(html) {
      scroll-behavior: auto;
    }

    .hero-button {
      transition: none;
    }
  }
</style>
