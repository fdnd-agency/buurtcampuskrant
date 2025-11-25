<script>
    import { Article } from '$lib';

    export let data;
    const articles = data.article;
    const recentArticle = data.article[0]
</script>

{#each articles.slice(1, 3) as article}
    <Article {article}/>
{/each}   