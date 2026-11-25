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
  <p>Je leest een verhaal uit <span>{district.name}</span></p>

  <a href="/{page.data.story.district}">
    ← Alle verhalen uit {district.name}
  </a>

  <nav>
    {#each DISTRICTS as district}
      <a href="/{district.slug}">
        {district.name}
      </a>
    {/each}
  </nav>

  <img alt="De stadsdeel indicator" src={moestuin} width="198" height="198"/>
</section>

<style>
  section{
    color: white;
  } 
</style>