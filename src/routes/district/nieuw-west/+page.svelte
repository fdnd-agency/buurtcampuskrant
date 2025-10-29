<script>
  import Filter from '$lib/components/Filter.svelte';
  import Article from '$lib/components/Article.svelte';

  export let data;
</script>



<Filter artikelen={data.articles} />



<style>
    :global(:root) {
		/* applies to <body> */
		--primary-color-general: var(--primary-color-new-west);
        --secondary-color-general: var(--tertiary-color-new-west);
	}

    
</style>