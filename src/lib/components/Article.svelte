<article>
    <img src="https://images.squarespace-cdn.com/content/v1/66277968847b3143bb8b0b11/540ebc56-3661-434f-95cc-d99f14d1eed1/Buurtcampus+Raad+1.jpeg?format=2500w" alt="Article" width="280" height="150">
    <h1>Title article</h1>
    <p>Lorem ipsum dolor sit amet, consect badipiscing elit. Lorem ipsum consect badipiscing elit. </p>

    <div>
        <a href="/oost">oost</a>
        <a href="/wijk">wijk</a>
    </div>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        justify-content: left;
        min-height: 320px;
        max-width: 280px;
        border-radius: 25px;
        overflow: hidden;
        color: white;

        /* kleuren verschillen per pagina (moet ingevuld worden op de pagina zelf) 
        background-color: #303A6D;
        border: solid 2px #303A6D;
        */
        
        img {
            max-height: 150px;
            width: 100%;
            object-fit: cover;
        }

        p, div, h1 {
            margin-inline: 16px;
        }  

        p {
            margin-block-start: 0;
        }

        div {
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

            /* kleuren verschillen per pagina (moet ingevuld worden op de pagina zelf) 
            a:nth-of-type(1) {
                background-color: white;
                color: #303A6D;
            }
            a:nth-of-type(2) {
                background-color: #303A6D;
                color: white;
                border: solid 1px white;
            }
            */
        }
    }
</style>

