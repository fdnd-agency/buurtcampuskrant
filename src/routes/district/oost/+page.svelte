<script>
import DistrictImg from '$lib/components/DistrictImg.svelte';
import Filter from '$lib/components/Filter.svelte';
import Article from '$lib/components/Article.svelte';
export let data;
const { categories } = data;

import { page } from '$app/stores';
$: categoryId = $page.url.searchParams.get('category');

$: allStories = categories.flatMap(c => c.stories);

</script>

<div class="centered-container">

<Filter {categories}/>

<!-- <img src="{districtImg}" alt="District afbeelding" /> -->


{#if !categoryId}
  {#if allStories.length > 0}
<p class="total-articles">{allStories.length} artikelen gevonden</p> 
<ul class="article-list">
      {#each allStories as story}
       <Article article={story} />
      {/each}
      <li class="grid-item">
        <DistrictImg />
      </li>
    </ul> 
{:else}
   <p>Geen artikelen gevonden</p>
   <DistrictImg />
{/if}
{/if}


{#each categories as category}
{#if +categoryId === category.id}
    {#if category.stories.length > 0}
      <!-- <h2>{category.title}</h2> -->
        <p>{category.stories.length} artikel{category.stories.length === 1 ? '' : 'en'} met het filter “{category.title || category.name}”</p>
      <ul class="article-list">
        {#each category.stories as story}
        <Article article={story} />
        <li class="grid-item">
          <DistrictImg />
        </li>
          <!-- <li>
            <strong>{story.title}</strong>
            <p>{story.intro}</p>
          </li> -->
        {/each}
      </ul>
    {:else}
      <p>Geen artikelen gevonden</p>
      <DistrictImg />
    {/if}
  {/if}
{/each}

<!-- <DistrictImg /> -->

</div>

<style>
    :global(:root) {
		/* applies to <body> */
		--primary-color-general: var(--primary-color-east);
    --secondary-color-general: var(--secondary-color-east);
	}


  .centered-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    width: 100%;

    /* width: 100%; */
  /* padding: 2rem 1rem; */
  /* box-sizing: border-box; */
  /* text-align: center;  */
  }

  .centered-container p {
  text-align: left;
  width: 100%;
  max-width: 1100px;
  margin: 1rem auto 0;
  padding-left: 0.5rem;
  margin-bottom: 5px;
}

  .article-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;  
  max-width: 1100px;  
  margin: 0 auto;  
  list-style: none;  
  /* justify-items: center;   */
  }

  .article-list li.grid-item {
    width: 100%; 
    max-width: 600px; 
    padding-left: 3.5em;
  }

  @media (min-width: 600px) {
  .article-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .article-grid {
    grid-template-columns: repeat(3, 1fr);
    /* align-items: start; */
  }

}

</style>

