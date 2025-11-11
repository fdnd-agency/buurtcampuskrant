<script>
  import Filter from '$lib/components/Filter.svelte';
  import Article from '$lib/components/Article.svelte';

  export let data;

</script>


<!-- <Filter/>
<div class="articles">
<Article article={data} />
</div> -->

<style>
    :global(:root) {
		/* applies to <body> */
		--primary-color-general: var(--primary-color-south-east);
        --secondary-color-general: var(--secondary-color-south-east);
	}

/* 
  :global(.filter),
  :global(article) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto; 
  } */

  /* .articles {
    display: flex;
    flex-direction: column;
    width: 320px;
    margin: 0 auto;
  } */

</style>