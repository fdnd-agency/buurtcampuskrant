
<script>
  let selectedNeighborhood = $state('Alle buurten');
  let sortOrder = $state('Nieuwste eerst');

  const neighborhoods = [
    'Alle buurten',
    'Nieuw-west',
    'Oost',
    'Zuidoost'
  ];
</script>

<svelte:head>
  <title>Archief | Buurtcampuskrant</title>
  <meta
    name="description"
    content="Bekijk alle verhalen van bewoners, studenten en docenten uit Amsterdam."
  />
</svelte:head>

<main class="archive-page">
  <div class="archive-container">

    <nav class="breadcrumb" aria-label="Broodkruimelnavigatie">
      <a href="/">Home</a>
      <span aria-hidden="true">/</span>
      <span aria-current="page">Archief</span>
    </nav>

    <section class="archive-header" aria-labelledby="archive-title">

      <div class="archive-intro">
        <h1 id="archive-title">
          Uit de<br />
          krant.
        </h1>

        <p>
          Alle verhalen van bewoners, studenten en docenten uit
          Nieuw-west, Oost en Zuidoost. Kies een buurt of zoek een
          onderwerp.
        </p>
      </div>

      <div class="archive-controls">

        <nav class="neighborhood-filters" aria-label="Filter op buurt">
          {#each neighborhoods as neighborhood}
            <button
              type="button"
              class:active={selectedNeighborhood === neighborhood}
              aria-pressed={selectedNeighborhood === neighborhood}
              onclick={() => selectedNeighborhood = neighborhood}
            >
              {neighborhood}
            </button>
          {/each}
        </nav>

        <label class="sort-control">
          <span>Sorteer op:</span>
          <select bind:value={sortOrder}>
            <option>Nieuwste eerst</option>
            <option>Oudste eerst</option>
          </select>
        </label>

      </div>

      <div class="decorative-shape" aria-hidden="true"></div>

    </section>

  </div>
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

  .archive-page {
    min-height: 100vh;
    background-color: #F5EBDF;
    overflow: hidden;
  }

  .archive-container {
    width: 100%;
    max-width: 1440px;
    margin-inline: auto;
    padding: 2.5rem 5.4%;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
    font-size: 0.75rem;
  }

  .breadcrumb a {
    color: #303A6D;
    text-decoration: none;
  }

  .breadcrumb a:hover {
    color: #EA5B0D;
  }

  .archive-header {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    align-items: end;
    gap: 2rem;
    padding-bottom: 2rem;
  }

  .archive-intro {
    max-width: 520px;
  }

  .archive-intro h1 {
    margin: 0 0 1rem;
    font-family: "Arial Black", Arial, sans-serif;
    font-size: clamp(3.5rem, 9vw, 5rem);
    font-weight: 900;
    line-height: 0.86;
    letter-spacing: -0.055em;
  }

  .archive-intro p {
    max-width: 430px;
    margin: 1.5rem 0 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  .archive-controls {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
    padding-bottom: 0.5rem;
  }

  .neighborhood-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .neighborhood-filters button {
    padding: 0.65rem 1rem;
    border: 1px solid #303A6D;
    border-radius: 2rem;
    background-color: transparent;
    color: #303A6D;
    font-size: 0.8rem;
    font-weight: 700;
    cursor: pointer;
  }

  .neighborhood-filters button.active {
    background-color: #303A6D;
    color: #FFFFFF;
  }

  .neighborhood-filters button:hover {
    background-color: #303A6D;
    color: #FFFFFF;
  }

  .neighborhood-filters button:focus-visible,
  .sort-control select:focus-visible {
    outline: 3px solid #EA5B0D;
    outline-offset: 3px;
  }

  .sort-control {
    display: flex;
    align-items: center;
    align-self: flex-end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 700;
  }

  .sort-control select {
    border: none;
    background: transparent;
    color: #303A6D;
    font: inherit;
    cursor: pointer;
  }

  .decorative-shape {
    position: absolute;
    bottom: -1.5rem;
    left: -1rem;
    width: 90px;
    height: 32px;
    background-color: #98A66B;
    transform: rotate(-22deg);
  }

  /* Tablet en desktop */

  @media (min-width: 700px) {
    .archive-header {
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 2rem;
    }

    .archive-controls {
      align-items: flex-end;
      padding-bottom: 0.4rem;
    }

    .archive-intro h1 {
      font-size: clamp(4rem, 7vw, 5rem);
    }
  }

  /* Mobiel */

  @media (max-width: 480px) {
    .archive-container {
      padding: 2rem 1.25rem;
    }

    .archive-intro h1 {
      font-size: 3.5rem;
    }

    .archive-controls {
      width: 100%;
    }

    .neighborhood-filters {
      gap: 0.4rem;
    }

    .neighborhood-filters button {
      padding: 0.6rem 0.8rem;
      font-size: 0.75rem;
    }
  }

  /* Minder beweging */

  @media (prefers-reduced-motion: reduce) {
    .neighborhood-filters button {
      scroll-behavior: auto;
    }
  }
</style>
