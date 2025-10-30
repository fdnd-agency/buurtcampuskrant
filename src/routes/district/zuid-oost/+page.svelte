<script>
  import Filter from '$lib/components/Filter.svelte';
  import Article from '$lib/components/Article.svelte';

  export let data;

</script>

<Filter/>
<Article article={data} />


<style>
    :global(:root) {
		/* applies to <body> */
		--primary-color-general: var(--primary-color-south-east);
        --secondary-color-general: var(--secondary-color-south-east);
	}
</style>