<script>
    export let article;
</script>

<article data-district="{article.district}">
    <div class="container-content"> 
<img 
    src="https://fdnd-agency.directus.app/assets/{article.cover}" 
    alt="" 
    width="280" 
    height="150">
        <div class="content">   
            <h2>{ article.title }</h2>
            <p>{ article.intro }</p>

            <div class="buttons">
                <a href="/district/{ article.district}">{ article.district }</a>
                <a href="/{ article.catogory}">{ article.catogory }</a>
            </div>
        </div>
    </div>
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
        container-type: inline-size;
        container-name: --article;

        display: flex;
        flex-direction: column;
        border-radius: 25px;
        overflow: hidden;
        color: var(--secondary-color-general);       
        background-color: var(--primary-color-general);
        border: solid 3px var(--secondary-color-general);

        .container-content {

            img {
                width: 100%;
                object-fit: cover;
                min-height: 11.25rem;
            }

            .content {
                display: flex;
                flex-direction: column;
                margin-inline: 1rem;
                gap: var(--sm);
                height: 100%;

                h2 {
                    font-size: 1.5rem;
                }
            
                p {
                    margin-block-start: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 5; 
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            
                .buttons {
                    display: flex;
                    gap: var(--sm);
                    margin-bottom: 1em;

                    a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 22px;
                        min-width: 64px;
                        padding: 0.5rem;
                        border-radius: 25px;
                        text-decoration: none;
                    }
                
                    a:nth-of-type(1) {
                        background-color: var(--secondary-color-general);
                        color: var(--primary-color-general);
                    }
                    a:nth-of-type(2) {
                        background-color: var(--primary-color-general);
                        color: var(--secondary-color-general);
                        border: solid 1px var(--secondary-color-general);
                    }    
                }
            }
        }
    }
    
    @container --article (width > 430px) { 
            
            .container-content {
                display: grid;
                grid-template-columns: 40% 60%;

                img {
                    height: 100%;
                }
            }
        }
</style>

