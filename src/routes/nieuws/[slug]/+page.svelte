<script>
    export let data;
    $: ({ article } = data); 

    import Header from "$lib/components/organisms/Header.svelte"
    import Footer from "$lib/components/organisms/Footer.svelte"
    import FullArticle from "$lib/components/atoms/FullArticle.svelte";
</script>

<main  data-district="{article.district}">
    <FullArticle {article} />
</main>

<style>
    main[data-district="east"] {
        --secondary-color-general: var(--secondary-color-east);
        --tertiary-color-general: var(--tertiary-color-east);
    }

    main[data-district="new-west"] {
        --secondary-color-general: var(--secondary-color-new-west);
        --tertiary-color-general: var(--tertiary-color-new-west); 
    }

    main[data-district="south-east"] {
        --secondary-color-general: var(--secondary-color-south-east);
        --tertiary-color-general: var(--tertiary-color-south-east);
    }

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--sm);
        margin: var(--sm);
    }
</style>