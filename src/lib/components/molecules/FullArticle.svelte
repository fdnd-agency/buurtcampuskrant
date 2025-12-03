<script>
    export let article; 
</script>

<article class="article-detail">
    <p class="label-district">{article.district}</p>
    <p class="label-category">{article.category}</p>
    <h2 class="title">{article.title}</h2>
    <p class="intro">{article.intro}</p>
    <p class="side-title">{article.side_title}</p>
    <img class="cover"
         src="https://fdnd-agency.directus.app/assets/{article.cover}"
         alt="{article.alt}" />

    <div class="body">{@html article.body}</div>
</article>

<style>
    article {
            padding: var(--sm);
            background-color: var(--tertiary-color-general);
            border-radius: var(--border-radius-sm);
            height: 100%;
            width: 80vw;
            justify-items: left;

            img {
                width: 100%;
                margin: 1rem 0 1rem 0;
                float: right;

                @media(min-width:650px) {
                    height: 40vh;
                }

                @media(min-width:800px) {
                    width: 30vw;
                    margin: 1rem 2rem 2rem 2rem;
                }
            }

            h2, .side-title, p, div {
                color: var(--secondary-color-general);
            }

            .label-district {
                color: var(--tertiary-color-general);
            }
        }   
</style>