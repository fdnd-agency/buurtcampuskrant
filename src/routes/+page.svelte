<script>
    import { Header } from '$lib';
    
    import { Filter } from '$lib';
    import { Quote } from '$lib';
    import { Article } from '$lib';

    export let data;
    const articles = data.article;


    import { Newsletter } from '$lib';
    import { Footer } from '$lib';
</script>

<main>
    <!-- <Header/> -->
    <!-- <Filter/>

    <h2>Quote</h2>
    <Quote/>

    <h2>Newsletter</h2>
    <Newsletter/>
    
    <section>
       {#each articles as article}
            <Article {article} />
        {/each}
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 1em;

        section {
            display: flex;
            flex-direction: column;
            max-width: 500px;
            padding-top: 5em;
            gap: 1em;
        }
    }
</style>
        <Article/>
        <Article/>
        <Article/>
    </section> -->
    <Header />
    
    <Footer/> 
</main>
