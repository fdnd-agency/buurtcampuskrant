
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
    <span>CAM</span><span>PUS</span>
  </a>
</header>

<main>
  <section class="hero">
    <div class="hero-content">
      <h1>Verhalen van de buurt voor de buurt</h1>

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

  <!-- Plaats hier je artikelen met id="artikelen" -->
</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    font-family: Arial, sans-serif;
    color: #303A6D;
  }

  /* Header */

  .site-header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 2rem;
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
    font-size: clamp(1.7rem, 2.8vw, 2.4rem);
    font-weight: 900;
    line-height: 0.88;
    letter-spacing: -0.06em;
    text-decoration: none;
  }

  .logo-a {
    color: #EA5B0D;
  }

  /* Hero */

  .hero {
    display: grid;
    grid-template-columns: 1fr 0.85fr;
    align-items: center;
    gap: 3rem;
    padding: 5rem 8%;
    background-color: #F5EBDF;
    color: #303A6D;
  }

  .hero-content {
    max-width: 650px;
  }

  .hero h1 {
    font-family: "Arial Black", Arial, sans-serif;
    font-size: clamp(2.5rem, 5vw, 5rem);
    line-height: 1.05;
    margin: 0 0 1.5rem;
    max-width: 650px;
  }

  .hero-description {
    font-size: 1.15rem;
    line-height: 1.7;
    margin: 0 0 2rem;
  }

  .hero-button {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background-color: #EA5B0D;
    color: white;
    text-decoration: none;
    font-weight: 700;
    border-radius: 6px;
    transition: background-color 0.2s ease;
  }

  .hero-button:hover {
    background-color: #C94B08;
  }

  .hero-button:focus-visible {
    outline: 3px solid #212121;
    outline-offset: 4px;
  }

  .hero-image img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 4.5;
    object-fit: cover;
    border-radius: 12px;
  }

  /* Tablet */

  @media (min-width: 1000px) {
    .site-header {
      padding: 1.5rem;
    }
  }

  /* Mobiel */

  @media (min-width: 700px) {
    .site-header {
      padding: 1.25rem;
    }

    .hero {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 3rem 1.25rem;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 10vw, 3.5rem);
    }

    .hero-description {
      font-size: 1rem;
    }

    .hero-image img {
      aspect-ratio: 4 / 3;
    }
  }

  @media (min-width: 560px) {
    .logo {
      font-size: 1.8rem;
    }
  }
</style>
