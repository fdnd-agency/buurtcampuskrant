<script>
  import Filter from "$lib/components/Filter.svelte";
  export let data;
  const { categories } = data;
  // console.log(categories);


  import { page } from '$app/stores';
  $: categoryId = $page.url.searchParams.get('category');
  
</script>


<Filter {categories}/>

{#each categories as category}
  {#if category.id == categoryId || !categoryId}
    {#if category.stories.length > 0}
      <h2>{category.title}</h2>
      <p>Er zijn {category.stories.length} stories.</p>
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
