<script>
    export let artikelen = [];
    import Filter from '$lib/components/Filter.svelte';

    import { Article } from '$lib';
    import { Header } from '$lib';
    import { Footer } from '$lib';
    import { FacebookLogo } from '$lib';
</script>


<Filter {artikelen} />
<Qoute/>
<Article/>
<Header/>
<Footer/> 
