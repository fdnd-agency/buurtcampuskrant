<script>
    export let article; 

    import ProgressBar from "../atoms/ProgressBar.svelte";
</script>

<div class="flex-progress">
    <ProgressBar/>

    <article class="article-detail">
        <div class="semantic-flex">
            <h2 class="title">{article.title}</h2>
            <p class="label-district">{article.district}</p>
        </div>

        <p class="intro">{article.intro}</p>
        <span aria-hidden="true" class="side-title">{article.side_title}</span>
        <img class="cover"
            src="https://fdnd-agency.directus.app/assets/{article.cover}"
            alt="{article.alt}" />

        <div class="body">{@html article.body}</div>
    </article>
</div>

<style>
    .flex-progress {
        display: flex;
        flex-direction: column;
        gap: var(--sm);
    }

    article {
        padding: var(--sm);
        background-color: var(--primary-color-general);
        border-radius: var(--border-radius-sm);
        height: 100%;
        width: 90vw;

        .semantic-flex {
            display: flex;
            flex-direction: column;
            padding-top: 1.5rem;

            h2 {
                max-width: 30rem;
            }

            .label-district {
                color: var(--primary-color-general);
                order: -1;
            }
        }
            
        img {
            width: 100%;
            margin: 1rem 0 1rem 0;
            float: right;

            @media(min-width:650px) {
                height: 40vh;
            }

            @media(min-width:800px) {
                width: 25vw;
                margin: 1rem 2rem 2rem 2rem;
            }
        }

        h2, .side-title, p, div {
            color: var(--secondary-color-general);
        }
    } 
        
    @media (width > 1020px) {
        article {
            width: 65vw;
        }
    }

    @media (width > 1680px) {
        article {
            font-size: 1.2rem;
        }
    }
</style>