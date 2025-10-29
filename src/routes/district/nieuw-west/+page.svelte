<script>
    import { Header } from '$lib';
    import { Footer } from '$lib';
</script>

<Header/>
<Footer/>

<style>
    :global(:root) {
		/* applies to <body> */
		--primary-color-general: var(--primary-color-new-west);
        --secondary-color-general: var(--tertiary-color-new-west);
	}
</style>