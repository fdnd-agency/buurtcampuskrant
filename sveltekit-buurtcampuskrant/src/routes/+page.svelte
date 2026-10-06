<svelte:head>
  <title>Algemene artikelen | Buurtcampus</title>
  <meta
    name="description"
    content="Bekijk de algemene artikelen van de Buurtcampus."
  />
</svelte:head>

<main>
  <header>
    <p>Buurtcampus</p>
    <h1>Algemene artikelen</h1>
    <p>
      Lees de nieuwste verhalen, nieuws en ontwikkelingen van de Buurtcampus.
    </p>
  </header>

  <section aria-labelledby="artikelen-titel">
    <h2 id="artikelen-titel">Laatste artikelen</h2>

    <div>
      <article>
        <img
          src="https://fdnd-agency.directus.app/assets/fbb356b7-f0ec-4c88-a44e-4ae448d92afc"
          alt="Buurtcampus in Nieuw-West"
        />

        <div>
          <p>Nieuw-West</p>

          <h3>‘Wij zitten in de haarvaten van de wijk’</h3>

          <p>
            De Buurtcampus in Nieuw-West is gevestigd in de bibliotheek (OBA)
            in Geuzenveld. Vroeg in de ochtend is het al een drukte van
            jewelste.
          </p>

          <a href="/artikelen/nieuw-west">
            Lees artikel
          </a>
        </div>
      </article>

      <article>
        <img
          src="https://fdnd-agency.directus.app/assets/fbb356b7-f0ec-4c88-a44e-4ae448d92afc"
          alt="Buurtcampus"
        />

        <div>
          <p>Zuidoost</p>

          <h3>Titel van het artikel</h3>

          <p>
            Korte introductie van het artikel.
          </p>

          <a href="/artikelen/zuidoost">
            Lees artikel
          </a>
        </div>
      </article>

      <article>
        <img
          src="https://fdnd-agency.directus.app/assets/fbb356b7-f0ec-4c88-a44e-4ae448d92afc"
          alt="Buurtcampus"
        />

        <div>
          <p>Oost</p>

          <h3>Titel van het artikel</h3>

          <p>
            Korte introductie van het artikel.
          </p>

          <a href="/artikelen/oost">
            Lees artikel
          </a>
        </div>
      </article>
    </div>
  </section>
</main>


<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
		color: #212121;
		background-color: #ffffff;
		line-height: 1.6;
	}

	/* =========================
	   Kleuren
	========================= */

	:root {
		--primary: #ff5a00;
		--primary-hsl: hsl(21, 100%, 50%);
		--black: #212121;
		--white: #ffffff;
		--light: #f5f5f5;
		--gray: #666666;
	}

	/* =========================
	   Header
	========================= */

	header {
		background-color: #ff5a00;
		color: #ffffff;
		padding: 1rem 1.5rem;
	}

	header nav {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	header a {
		color: #ffffff;
		text-decoration: none;
		font-weight: 700;
	}

	header a:hover {
		text-decoration: underline;
	}

	/* =========================
	   Main
	========================= */

	main {
		width: min(100% - 2rem, 1200px);
		margin: 0 auto;
		padding: 2rem 0 4rem;
	}

	h1,
	h2,
	h3 {
		line-height: 1.2;
	}

	h1 {
		font-size: clamp(2rem, 5vw, 4rem);
		margin-bottom: 1rem;
	}

	h2 {
		font-size: clamp(1.5rem, 3vw, 2.5rem);
	}

	p {
		max-width: 70ch;
	}

	/* =========================
	   Artikelen
	========================= */

	.artikelen {
		display: grid;
		grid-template-columns: repeat(3, 260px);
		justify-content: center;
		gap: 1.5rem;
		margin-top: 2rem;
	}

	article {
		width: 260px;
		background-color: #ffffff;
		border: 3px solid #ff5a00;
		border-radius: 12px;
		overflow: hidden;
	}

	article img {
		width: 100%;
		height: 170px;
		object-fit: cover;
		display: block;
	}

	article .content {
		padding: 1rem;
	}

	article h2,
	article h3 {
		margin-top: 0;
	}

	article p {
		color: #666666;
	}

	/* =========================
	   Categorie
	========================= */

	.category {
		color: #ff5a00;
		font-weight: 700;
		text-transform: uppercase;
		font-size: 0.85rem;
	}

	/* =========================
	   Buttons
	========================= */

	.button {
		display: inline-block;
		background-color: #ff5a00;
		color: #ffffff;
		padding: 0.7rem 1rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 700;
		margin-top: 1rem;
	}

	.button:hover {
		background-color: hsl(21, 100%, 42%);
	}

	/* =========================
	   Footer
	========================= */

	footer {
		background-color: #212121;
		color: #ffffff;
		padding: 2rem 1.5rem;
	}

	footer a {
		color: #ffffff;
	}

	/* =========================
	   Tablet
	========================= */

	@media (max-width: 800px) {
		.artikelen {
			grid-template-columns: repeat(2, 260px);
		}

		header nav {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	/* =========================
	   Mobiel
	========================= */

	@media (max-width: 600px) {
		main {
			width: min(100% - 1.5rem, 1200px);
			padding-top: 1.5rem;
		}

		.artikelen {
			grid-template-columns: 260px;
		}

		article {
			width: 260px;
		}

		article img {
			height: 170px;
		}

		h1 {
			font-size: 2.2rem;
		}
	}
</style>

