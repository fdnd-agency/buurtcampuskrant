<script>
    import { Header } from '$lib';
    import { Footer } from '$lib';
    import Article from '$lib/components/Article.svelte';

    export let data;
    const articles = data.article;
    const recentArticle = data.article[0]
</script>

<Header />

<main>
    <!-- <Filter/> -->
    <article>
        <p class="label-district">{recentArticle.district}</p>
        <p class="label-category">{recentArticle.category}</p>
        <h2 class="title">{recentArticle.title}</h2>
        <p class="intro">{recentArticle.intro}</p>
        <p class="side-title">{recentArticle.side_title}</p>
        <img class="cover" src="https://fdnd-agency.directus.app/assets/{recentArticle.cover}" alt="{recentArticle.alt}">
        <p class="body">{@html recentArticle.body}</p>
    </article>

    <section>
        {#each articles.slice(1) as article}
            <Article {article}/>
        {/each}   
    </section>
</main>

<style>
    article {
        padding: var(--sm);
        background-color: var(--primary-color-general-lighter);
    }    
    main {
        display: flex;
        flex-direction: column;
        gap: var(--sm);
        margin: var(--sm);

        @media (width > 720px) {
            flex-direction: row;
            
            article {
                width: 70vw;
            }
            section {
                width: 30vw;
            }
        }
    }

    article[data-district="east"] {
        --primary-color-general: var(--secondary-color-east);
        --primary-color-general-darker: var(--primary-color-east);
        --primary-color-general-lighter: var(--tertiary-color-east)
    }

    article[data-district="new-west"] {
        --primary-color-general: var(--secondary-color-new-west);
        --primary-color-general-darker: var(--primary-color-new-west);
        --primary-color-general-lighter: var(--secondary-color-new-west);
    }

    article[data-district="south-east"] {
        --primary-color-general: var(--secondary-color-south-east);
        --primary-color-general-darker: var(--primary-color-south-east);
        --primary-color-general-lighter: var(--secondary-color-south-east)
    }
</style>
 
