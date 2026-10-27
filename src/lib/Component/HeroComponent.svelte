
<svelte:head>
  <title>Buurtcampuskrant | Verhalen uit de buurt</title>
  <meta
    name="description"
    content="Ontdek nieuws, projecten en verhalen van de Buurtcampus in Amsterdam."
  />
</svelte:head>

<header class="site-header">
  <a class="logo" href="/" aria-label="Buurtcampuskrant - Home">
    <span>BUURT-</span>
    <span>CAM</span>
    <span>PUS</span>
  </a>
</header>

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
        src="/images/buurtcampus.jpg"
        alt="De omgeving van Amsterdam met gebouwen en water"
        width="800"
        height="900"
        fetchpriority="high"
      />
    </div>
  </section>

  <section id="artikelen" class="articles" aria-labelledby="artikelen-titel">
    <h2 id="artikelen-titel">Verhalen uit de buurt</h2>

    <p>
      Ontdek binnenkort de nieuwsartikelen en verhalen uit de verschillende
      buurten van Amsterdam.
    </p>

    <!-- Plaats hier later je artikelkaarten. -->
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

  /* Header - mobiel als basis */

  .site-header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.25rem;
    background-color: #F5DFD0;
    color: #303A6D;
  }

  /* Logo */

  .logo {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    color: #303A6D;
    font-family: "Arial Black", Arial, sans-serif;
    font-size: 1.8rem;
    font-weight: 900;
    line-height: 0.88;
    letter-spacing: -0.06em;
    text-decoration: none;
  }

  .logo:focus-visible {
    outline: 3px solid #EA5B0D;
    outline-offset: 4px;
  }

  /* Hero - mobiel als basis */

  .hero {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 2rem;
    padding: 3rem 1.25rem;
    background-color: #F5EBDF;
    color: #303A6D;
  }

  .hero-content {
    max-width: 650px;
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

  /* Call-to-action */

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

  /* Hero-afbeelding */

  .hero-image img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 12px;
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

  /* Tablet en grotere schermen */

  @media (min-width: 701px) {
    .site-header {
      padding: 1.5rem;
    }

    .logo {
      font-size: clamp(1.7rem, 2.8vw, 2.4rem);
    }

    .hero {
      grid-template-columns: 1fr 0.85fr;
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

    .articles {
      padding: 4rem 8%;
    }
  }

  /* Brede schermen */

  @media (min-width: 1000px) {
    .site-header {
      padding: 1.5rem 2rem;
    }
  }

  /* Minder beweging voor gebruikers die dit instellen */

  @media (prefers-reduced-motion: reduce) {
    :global(html) {
      scroll-behavior: auto;
    }

    .hero-button {
      transition: none;
    }
  }
</style>
