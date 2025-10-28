<script>
    import { Header } from '$lib';
    import { Footer } from '$lib';
</script>

<Header/>
<Footer/>

<style>
    :global(:root) {
		/* applies to <body> */
		--primary-color-general: var(--primary-color-south-east);
        --primary-color-general-darker: var(--secondary-color-south-east);
	}
</style>