<script>
  import { page } from '$app/state';
  import moestuin from '$lib/assets/moestuin.png';
  import { DISTRICTS } from '$lib/districts';

  const district = $derived(
    DISTRICTS.find(
      (d) => d.slug === page.data.story?.district
    )
  );
</script>

<section style:background-color={district.colour}>
  <header class="indication">
    <p>Je leest een verhaal uit <span>{district.name}</span></p>

    <a href="/{page.data.story.district}">
      ← Alle verhalen uit {district.name}
    </a>
  </header>

  <nav aria-label="Andere stadsdelen">
    {#each DISTRICTS as district}
      <a href="/{district.slug}">
        {district.name}
      </a>
    {/each}

    <img 
      alt="moestuin" 
      src={moestuin} 
      width="198" 
      height="198"
    />
  </nav>
</section>

<style>
  section{
    color: white;
  } 
</style>