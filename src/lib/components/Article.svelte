<script>
    export let article;
</script>

<article data-district="{ article.district }">
    <div class="container-content"> 
        <img src="{ article.cover }" alt="{ article.alt }" width="280" height="150">
        <div class="content">   
            <h2>{ article.title }</h2>
            <p>{ article.intro }</p>

            <div class="buttons">
                <a href="/{ article.district}">{ article.district }</a>
                <a href="/{ article.catogory}">{ article.catogory }</a>
            </div>
        </div>
    </div>
</article>

<style>
    [data-district="oost"] {
        --color-main: hsla(232, 37%, 92%, 1);
        --color-accent: hsla(230, 39%, 31%, 1);
    }

    [data-district="nieuw-west"] {
        --color-main: hsla(188, 44%, 93%, 1);
        --color-accent: hsla(186, 85%, 21%, 1);
    }

    [data-district="zuid-oost"] {
        --color-main: hsla(75, 46%, 95%, 1);
        --color-accent: hsla(74, 37%, 37%, 1);
    }
    
    article {
        container-type: inline-size;
        container-name: --article;

        display: flex;
        flex-direction: column;
        border-radius: 25px;
        overflow: hidden;
        color: var(--color-accent);       
        background-color: var(--color-main);
        border: solid 3px var(--color-accent);
        height: auto;

        .container-content {

            img {
                width: 100%;
                object-fit: cover;
            }

            .content {
                margin-inline: 16px;
            
                p {
                    margin-block-start: 0;
                }
            
                .buttons {
                    display: flex;
                    gap: 1em;
                    margin-bottom: 1em;

                    a {
                        display: flex;
                        justify-content: center;
                        height: 22px;
                        width: 64px;
                        border-radius: 25px;
                        text-decoration: none;
                    }
                
                    a:nth-of-type(1) {
                        background-color: var(--color-accent);
                        color: var(--color-main);
                    }
                    a:nth-of-type(2) {
                        background-color: var(--color-main);
                        color: var(--color-accent);
                        border: solid 1px var(--color-accent);
                    }    
                }
            }
        }
    }
    
    @container --article (width > 430px) { 

            article {
                height: 135px;
            }
            
            .container-content {
                display: grid;
                grid-template-columns: 40% 60%;

                img {
                    height: 100%;
                }
            }
        }
</style>

