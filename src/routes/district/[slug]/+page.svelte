<script>
    import Article from "$lib/components/molecules/Article.svelte";
    import FilterButtons from "$lib/components/atoms/FilterButtons.svelte";

    let { data } = $props();

</script>

<FilterButtons {data}/>

<main>
    <ul>
        {#each data.data as article}
            <li><Article {article} /></li>
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

        @media (width > 1128px) {
            grid-template-columns: repeat(3, 1fr);
            padding: 0 4rem;
        }
        @media (width > 1280px) {
            padding: 0 7rem;
        }
        @media (width > 1440px) {
            padding: 0 10rem;
        }
    }
</style>