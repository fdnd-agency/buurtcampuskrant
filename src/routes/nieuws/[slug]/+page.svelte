<script>
    export let data;
    $: ({ article } = data); 

    import Header from "$lib/components/organisms/Header.svelte"
    import Footer from "$lib/components/organisms/Footer.svelte"
    import FullArticle from "$lib/components/molecules/FullArticle.svelte";
</script>

<main  data-district="{article.district}">
    <FullArticle {article} />
</main>

<style>
    main[data-district="oost"] {
        --secondary-color-general: var(--secondary-color-east);
        --primary-color-general: var(--primary-color-east);
    }

    main[data-district="nieuw-west"] {
        --secondary-color-general: var(--secondary-color-new-west);
        --primary-color-general: var(--primary-color-new-west);
    }

    main[data-district="zuidoost"] {
        --secondary-color-general: var(--secondary-color-south-east);
        --primary-color-general: var(--primary-color-south-east);
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