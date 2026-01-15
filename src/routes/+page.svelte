<script>
    import { Header } from '$lib';
    import { Footer } from '$lib';
    import { Article } from '$lib';
    import  FullArticle  from '$lib/components/molecules/FullArticle.svelte';

    let {data} = $props();

    const articles = data.article;
    const recentArticle = data.article[0]
</script>

<main>
    <FullArticle article={recentArticle} />

    <section>
        <h2 class="md">Laatste nieuws:</h2>
        {#each articles.slice(1, 3) as article}
            <Article {article}/>
        {/each}   
    </section>
</main>

<style>     
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: var(--sm);
        margin: var(--sm);

        section {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            padding: 2rem 0;
            width: 80vw;

            @media (width > 550px) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: min-content 1fr;
                align-items: center;
                column-gap: 10vw;

                    h2 {
                        grid-column: 1/-1;
                    }
            }

            @media (width > 1020px) {
                display: flex;
                flex-direction: column;
                align-items: normal;
            }
        }

        @media (width > 1020px) {
            flex-direction: row;
            justify-content: space-evenly;
            padding: 0 3vw;
            column-gap: 4vw;
            
            section {
                width: 30vw;
                align-self: start;
                padding-top: 15rem;
            }
        }
    }
</style>
