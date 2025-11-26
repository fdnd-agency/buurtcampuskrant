<script>
    export let data;
    $: ({ article } = data); 

    import Header from "$lib/components/organisms/Header.svelte"
    import Footer from "$lib/components/organisms/Footer.svelte"
</script>

<main  data-district="{article.district}">

<article class="article-detail">
    <h2 class="title">{article.title}</h2>
    <p class="intro">{article.intro}</p>
    <img class="cover" src="https://fdnd-agency.directus.app/assets/{article.cover}" alt="{article.alt}">
    <p class="side-title">{article.side_title}</p>
    <div class="body">{@html article.body}</div>
</article>

</main>

<style>
    main[data-district="east"] {
        --secondary-color-general: var(--secondary-color-east);
        --tertiary-color-general: var(--tertiary-color-east);
    }

    main[data-district="new-west"] {
        --secondary-color-general: var(--secondary-color-new-west);
        --tertiary-color-general: var(--tertiary-color-new-west); 
    }

    main[data-district="south-east"] {
        --secondary-color-general: var(--secondary-color-south-east);
        --tertiary-color-general: var(--tertiary-color-south-east);
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--sm);
        margin: var(--sm);
        background-color: var(--tertiary-color-general);

        article {
            padding: var(--sm);
            height: 100%;
            width: 80vw;
            justify-items: left;

            img {
                width: 100%;
                margin: 0;
                float: none;

                @media(min-width:650px) {
                    height: 40vh;
                }

                @media(min-width:800px) {
                    width: 30vw;
                    float: right;
                    margin: 1rem 2rem 2rem 2rem;
                }
            }

            h2, .side-title, p, div {
                color: var(--secondary-color-general);
            }
        }   

        @media (width > 1020px) {
            flex-direction: row;
            justify-content: space-evenly;
            
            article {
                width: 80vw;
            }
        }

        @media (width > 1200px) {
            article {
                width: 70vw;
            }
        }
    }
</style>