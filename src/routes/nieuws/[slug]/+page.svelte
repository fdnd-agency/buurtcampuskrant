<script>
    export let data;
    $: ({ article } = data); 

    import Header from "$lib/components/Header.svelte"
</script>

<Header/>

<article>
    <h2 class="title">{article.title}</h2>
    <p class="intro">{article.intro}</p>
    <img class="cover" src="https://fdnd-agency.directus.app/assets/{article.cover}" alt="{article.alt}">
    <p class="side-title">{article.side_title}</p>
    <div class="body">{@html article.body}</div>
</article>
