<script>
  import Filter from "$lib/components/Filter.svelte";
  export let data;
  const { categories } = data;

  import { page } from '$app/stores';
  $: categoryId = $page.url.searchParams.get('category');

  $: allStories = categories.flatMap(c => c.stories);

</script>

<Filter {categories}/>

{#if !categoryId}
  {#if allStories.length > 0}
    <p>{allStories.length} artikelen gevonden</p>
  {/if}
  <ul>
    {#each allStories as story}
      <li>
        <strong>{story.title}</strong>
        <p>{story.intro}</p>
      </li>
    {/each}
  </ul>
  {:else}
  <!-- <p>Geen artikelen gevonden</p> -->
{/if}



{#each categories as category}
  {#if category.id == +categoryId }
    {#if category.stories.length > 0}
      <!-- <h2>{category.title}</h2> -->
        <p>{category.stories.length} artikel{category.stories.length === 1 ? '' : 'en'} met het filter “{category.title || category.name}”</p>
      <ul>
        {#each category.stories as story}
          <li>
            <strong>{story.title}</strong>
            <p>{story.intro}</p>
          </li>
        {/each}
      </ul>
    {:else}
      <p>Geen artikelen gevonden</p>
    {/if}
  {/if}
{/each}