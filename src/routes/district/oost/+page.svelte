<script>
    import { Header } from '$lib';
    import { Footer } from '$lib';
</script>

<Header/>
<Footer/>

<style>
    :global(:root) {
		/* applies to <body> */
		--primary-color-general: var(--primary-color-east);
        --secondary-color-general: var(--secondary-color-east);
	}
</style>