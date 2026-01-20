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
        padding: var(--sm) var(--sm) var(--lg) var(--sm);
        display: grid;
        gap: var(--md);
        row-gap: var(--lg);
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

        @media (width > 1128px) {
            grid-template-columns: repeat(3, 1fr);
            padding: var(--md) var(--xl) var(--lg) var(--xl);
        }
        @media (width > 1280px) {
            padding: var(--md) 7rem var(--lg) 7rem;
        }
        @media (width > 1440px) {
            padding: var(--md) 10rem var(--lg) 10rem;
        }
    }
</style>