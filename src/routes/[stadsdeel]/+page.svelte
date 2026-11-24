
<script>
  let { data } = $props();
</script>

<h1>{data.district.name}</h1>

<a href="/">back to home</a>

{#each data.stories as story}
  <div>
    <a href="/{story.district}/{story.slug}">
      {story.title}</a>
    <p>{story.district}</p>
  </div>
{/each}