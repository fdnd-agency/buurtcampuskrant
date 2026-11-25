<script>
  import { DISTRICTS } from "$lib/districts";

  let { data } = $props();

  const district = DISTRICTS.find(
    (d) => d.slug === data.story.district
  );
</script>

<a href="/{data.story.district}">
  ← Alle verhalen uit {district.name}
</a>

<h1>{data.story.title}</h1>
<p>{data.story.intro}</p>