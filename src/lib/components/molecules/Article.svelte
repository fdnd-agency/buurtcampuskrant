<script>
    import fallbackimage from "../../assets/images/Fallback.png";

    let { article } = $props();
    const cat_title = $derived(
        article?.categories?.[0]?.buurtcampuskrant_categories_id?.title ?? "",
    );
</script>

<article data-district={article.district}>
    <div class="container">
        <div class="content">
            <h2><a href="/nieuws/{article.id}">{article.title}</a></h2>
            <div class="buttons">
                <a href="/district/{article.district}">{article.district}</a>
                <a href="/{cat_title}">{cat_title}</a>
            </div>
        </div>

        {#if article.cover}
            <picture>
                <source
                    srcset="https://fdnd-agency.directus.app/assets/{article.cover}?format=webp&width=500"
                    media="(min-width: 430px)"
                    type="image/webp"
                />
                <img
                    src="https://fdnd-agency.directus.app/assets/{article.cover}?width=300"
                    alt=""
                />
            </picture>
        {:else}
            <img src="{fallbackimage}?width=300" alt="" />
        {/if}
    </div>
</article>

<style>
    article[data-district="oost"] {
        --secondary-color-general: var(--secondary-color-east);
        --primary-color-general: var(--primary-color-east);
    }

    article[data-district="nieuw-west"] {
        --secondary-color-general: var(--secondary-color-new-west);
        --primary-color-general: var(--primary-color-new-west);
    }

    article[data-district="zuidoost"] {
        --secondary-color-general: var(--secondary-color-south-east);
        --primary-color-general: var(--primary-color-south-east);
    }

    a {
        text-decoration: none;
        color: var(--secondary-color-general);
    }

    article {
        container-type: inline-size;
        container-name: --article;

        background-color: var(--primary-color-general);
        border: solid 3px var(--primary-color-general);
        width: min-content;
        border-radius: var(--border-radius-lg);
        width: 100%;

        .container {
            display: grid;
            grid-template-rows: 1fr max-content;
            position: relative;

            img {
                grid-row: 1;
                border-radius: var(--md) var(--md) 0 0;

                max-height: 15rem;
                width: 100%;
                object-fit: cover;
            }
        }
        .content {
            grid-row: 2;
            padding: var(--sm);
            
            h2 {
                font-size: clamp(1.3rem, 5vw, 1.8rem);
                margin-bottom: var(--sm);      
                a {
                    font-family: var(--primary-font);
                }
               
            }
            .buttons {
                a {
                    border: 1px solid var(--secondary-color-general);
                    border-radius: var(--border-radius-sm);
                    padding: .25rem var(--xs);
                    transition: background-color 0.5s ease, color 0.5s ease;
                    z-index: 25;

                    @media (prefers-reduced-motion: no-preference) {
                        transition: transform 0.2s ease;

                        &:hover {
                            transform: translateY(-10px);
                        }
                    }
                    &:hover {
                        background-color: var(--secondary-color-general);
                        color: var(--primary-color-general);
                    }
                }
                a:nth-of-type(1) {
                    background-color: var(--secondary-color-general);
                    color: var(--primary-color-general);

                    &:hover {
                        background-color: var(--primary-color-general);
                        color: var(--secondary-color-general);
                    }
                }
            }
        }

        @container --article (width > 430px) { 
            .container {
                display: grid;
                grid-template-columns: 40% 60%;
                grid-template-rows: max-content;

                img {
                    height: 100%;
                    border-radius: var(--md) 0 0 var(--md);
                }
            }
            .content {
                grid-row: 1;
                grid-column: 2;
            }
        }
    }

    h2 a::before {                   
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        bottom: 15%;
        z-index: 20;
        background: transparent;                   
    }
</style>