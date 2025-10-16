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
        --primary-color-general-darker: var(--tertiary-color-new-west);
	}
</style>