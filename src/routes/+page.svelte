<script>
    import { Header } from '$lib';
    import { Footer } from '$lib';
    import { Article } from '$lib';

    export let data;
    const articles = data.article;
    const recentArticle = data.article[0]
</script>

<main>
    <article class="article-detail" data-district="{recentArticle.district}">
        <p class="label-district">{recentArticle.district}</p>
        <p class="label-category">{recentArticle.category}</p>
        <h2 class="title">{recentArticle.title}</h2>
        <p class="intro">{recentArticle.intro}</p>
        <p class="side-title">{recentArticle.side_title}</p>
        <img class="cover" src="https://fdnd-agency.directus.app/assets/{recentArticle.cover}" alt="">
        <div class="body">{@html recentArticle.body}</div>
    </article>

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
        flex-direction: column;
        gap: var(--sm);
        margin: var(--sm);


        article {
            padding: var(--sm);
            background-color: var(--tertiary-color-general);
            height: 100%;

            h2, .side-title {
                color: var(--secondary-color-general);
            }
        } 

        section {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            max-width: 80%;
            padding: 2rem 0;

            @media (width > 550px) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: min-content 1fr;
                align-items: center;

                    h2 {
                        grid-column: 1/-1;
                    }
                    article {
                        grid-row: 2;
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
            
            article {
                width: 70vw;
            }
            section {
                padding-top: 10rem;
                width: 20vw;
            }
        }
    }

</style>
