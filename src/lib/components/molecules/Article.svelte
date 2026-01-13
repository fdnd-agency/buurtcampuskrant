<script>
    import fallbackimage from "../../assets/images/Fallback.png";

    let { article } = $props();
    const cat_title = $derived(
        article?.categories?.[0]?.buurtcampuskrant_categories_id?.title ?? ""
    ); 
</script>

<article data-district="{article.district}">
    <a class="article" href="/nieuws/{article.id}">
        <div class="container">
            {#if article.cover}
                <picture>
                    <source 
                        srcset="https://fdnd-agency.directus.app/assets/{ article.cover }?format=webp&width=500"
                        media="(min-width: 430px)"
                        type="image/webp">

                    <img src="https://fdnd-agency.directus.app/assets/{ article.cover }?width=300" alt="">
                </picture>
            {:else}
                <img src="{ fallbackimage }?width=300" alt="">
            {/if}

            <div class="content">   
                <h2>{ article.title }</h2>

                <div class="buttons">
                    <button href="/district/{ article.district}">{ article.district }</button>
                    <button href="/{ cat_title }">{ cat_title }</button>
                </div>
            </div>
        </div>
    </a>
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

    article { 
        container-type: inline-size;
        container-name: --article;

        a {
            text-decoration: none;
            color: var(--secondary-color-general);
            background-color: var(--primary-color-general);
            border: solid 3px var(--primary-color-general);
            display: flex;
            flex-direction: column;
            border-radius: var(--border-radius-md);
            overflow: hidden;
            

            img {
                width: 100%;
                object-fit: cover;
                object-position: center;
                height: 100%;
                max-height: 240px;
                display: block;
            }

            .content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-inline: 1rem;
                gap: var(--sm);

                h2 {
                    margin-top: 0.5rem;
                    font-size: clamp(1.3rem, 5vw, 1.8rem);
                }

                .buttons {
                    display: flex;
                    gap: var(--sm);
                    margin-bottom: 1em;

                    button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 22px;
                        min-width: 64px;
                        padding: 0.5rem;
                        border-radius: var(--border-radius-sm);;
                        text-decoration: none;
                        transition: background-color 0.5s ease, color 0.5s ease;
                        border: solid 1px var(--secondary-color-general);

                        &:hover {
                            transform: none;
                        }

                        @media (prefers-reduced-motion: no-preference) {
                            transition: transform 0.2s ease;

                            &:hover {
                                transform: translateY(-10px);
                            }
                        }
                    }
                
                    button:nth-of-type(1) {
                        background-color: var(--secondary-color-general);
                        color: var(--primary-color-general);

                        &:hover {
                            background-color: var(--primary-color-general);
                            color: var(--secondary-color-general);
                        }
                    }
                    
                    button:nth-of-type(2) {
                        background-color: var(--primary-color-general);
                        color: var(--secondary-color-general);

                        &:hover {
                            background-color: var(--secondary-color-general);
                            color: var(--primary-color-general);
                        }
                    }    
                }
            }
        }
    }

    @container --article (width > 430px) { 
        .container {
            display: grid;
            grid-template-columns: 40% 60%;
        }
    }

    @container --article (width < 230px) {
        h2 {
            font-size: var(--sm);
        }

        .container img {
            height: 150px;
        }
    }
</style>

