<script>
    import { Article } from '$lib';

    let {data} = $props();
</script>

<a href="/district/nieuw-west">Alles</a>
<a href="?filter=studenten">studenten</a>
<a href="?filter=de wijk">de wijk</a>

<ul>
{#each data.data as article}
    <li>
        <h4>{article.title}</h4>
        {article.categories[0]?.buurtcampuskrant_categories_id.title}
    </li>
{/each}
</ul>