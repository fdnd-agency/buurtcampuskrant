<script>
    import { Header } from '$lib';
    import { Footer } from '$lib';
    import Article from '$lib/components/Article.svelte';

    export let data;
    const articles = data.article;
    console.log(data.article[0])
    const recentArticle = data.article[0]
</script>

<Header />

<main>
    <article>
        <h2>{recentArticle.title}</h2>
        <h2>{recentArticle.intro}</h2>
        <h2>{recentArticle.body}</h2>

    </article>
    <!-- <p>{recentArticle.}</p> -->

    {#each articles.slice(1) as article}
        <Article {article}/>
    {/each}   
        

    <!-- <Header/> -->
    <!-- <Filter/>

    <h2>Quote</h2>
    <Quote/>

    <h2>Newsletter</h2>
    <Newsletter/>
    
    <section>
        <Article/>
        <Article/>
        <Article/>
    </section> -->

</main>

    <Footer/>