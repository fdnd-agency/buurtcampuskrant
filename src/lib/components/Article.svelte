<script>
    export let article;
</script>

<article data-district="{article.district}">
    <a href="/nieuws/{article.id}">
        <div class="container">
            <img 
                src="https://fdnd-agency.directus.app/assets/{article.cover}" 
                alt="" 
                width="280" 
                height="150">

            <div class="content">   
                <h2>{ article.title }</h2>

                <div class="buttons">
                    <button href="/district/{ article.district}">{ article.district }</button>
                    <button href="/{ article.categories}">{ article.categories }</button>
                </div>
            </div>
        </div>
    </a>
    
</article>

<style>
    article[data-district="east"] {
        --primary-color-general: var(--secondary-color-east);
        --secondary-color-general: var(--primary-color-east);
    }

    article[data-district="new-west"] {
        --primary-color-general: var(--secondary-color-new-west);
        --secondary-color-general: var(--primary-color-new-west);
    }

    article[data-district="south-east"] {
        --primary-color-general: var(--secondary-color-south-east);
        --secondary-color-general: var(--primary-color-south-east);
    }

    article { 
        border-radius: 25px;
        color: var(--secondary-color-general);       
        background-color: var(--primary-color-general);
        border: solid 3px var(--secondary-color-general);
        overflow: hidden;

        container-type: inline-size;
        container-name: --article;

        a {
            text-decoration: none;
            color: var(--secondary-color-general);
            display: flex;
            flex-direction: column;

            img {
                width: 100%;
                object-fit: cover;
                object-position: center;
                height: 100%;
                max-height: 240px;
            }

            .content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-inline: 1rem;
                gap: var(--sm);

                h2 {
                    margin-top: 0.5rem;
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
                        border-radius: 25px;
                        text-decoration: none;
                    }
                
                    button:nth-of-type(1) {
                        background-color: var(--secondary-color-general);
                        color: var(--primary-color-general);
                        border: none;
                    }
                    
                    button:nth-of-type(2) {
                        background-color: var(--primary-color-general);
                        color: var(--secondary-color-general);
                        border: solid 1px var(--secondary-color-general);
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
</style>

