<script>
  import { DISTRICTS } from "$lib/districts";
  import moestuin from '$lib/assets/moestuin.png';

  let { data } = $props();

  const district = DISTRICTS.find((d) => d.slug === data.story.district);

</script>

<p>Je leest een verhaal uit</p>
<span>{district.name}</span>
<a href="/{data.story.district}">← Alle verhalen uit {district.name}</a>

<ol>
  <a href="/{data.story.district}">Nieuw-west</a>
  <a href="/{data.story.district}">Oost</a>
  <a href="/{data.story.district}">Zuid-oost</a>
</ol>

<img alt="De stadsdeel indicator" src={moestuin} width="198" height="198"/>

  


<h1>{data.story.title}</h1>
<p>{data.story.intro}</p>