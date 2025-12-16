<script>
    import Article from "$lib/components/molecules/Article.svelte";
    import FilterButtons from "$lib/components/atoms/FilterButtons.svelte";
    import Header from "$lib/components/organisms/Header.svelte";
    import Filter from "$lib/components/organisms/Filter.svelte";

    let { data } = $props();
</script>

<FilterButtons {data}/>

<main>
    <ul>
        {#each data.data as article}
            <Article {article} />
        {/each} 
    </ul>
</main>

<style>
    ul {
        padding: var(--sm);
        display: grid;
        gap: var(--md);
        row-gap: var(--lg);
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

        @media (min-width: 1128px) {
            grid-template-columns: repeat(3, 1fr);
            padding: 0 4rem;
        }
        @media (min-width: 1280px) {
            padding: 0 7rem;
        }
        @media (min-width: 1440px) {
            padding: 0 10rem;
        }
    }


</style>