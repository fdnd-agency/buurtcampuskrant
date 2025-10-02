<article>
    <div class="container-content"> 
        <img src="https://images.squarespace-cdn.com/content/v1/66277968847b3143bb8b0b11/540ebc56-3661-434f-95cc-d99f14d1eed1/Buurtcampus+Raad+1.jpeg?format=2500w" alt="Article" width="280" height="150">
        <div class="content">   
            <h1>Title article</h1>
            <p>Lorem ipsum dolor sit amet, consect badipiscing elit. Lorem ipsum consect badipiscing elit. </p>

            <div class="buttons">
                <a href="/oost">oost</a>
                <a href="/wijk">wijk</a>
            </div>
        </div>
    </div>
</article>

<style>
    article {
        container-type: inline-size;
        container-name: --article;

        display: flex;
        flex-direction: column;
        border-radius: 25px;
        overflow: hidden;
        color: white;       
        background-color: #303A6D;
        border: solid 2px #303A6D;
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
                        background-color: white;
                        color: #303A6D;
                    }
                    a:nth-of-type(2) {
                        background-color: #303A6D;
                        color: white;
                        border: solid 1px white;
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

