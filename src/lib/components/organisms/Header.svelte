
<script>
  import Logo from '$lib/components/atoms/Logo.svelte';
  import MainNav from '$lib/components/molecules/MainNav.svelte';
  import SearchField from '$lib/components/molecules/SearchField.svelte';
  import LanguageSwitcher from '$lib/components/molecules/LanguageSwitcher.svelte';
</script>

<header class="site-header">
  <Logo />
  <MainNav />
  <SearchField />
  <LanguageSwitcher />
</header>

<style>
  .site-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--color-sand);
    color: var(--color-navy);
    font-size: var(--font-size-small);

    @container page (min-width: 60rem) {
      flex-wrap: nowrap;
      gap: 2.5rem;
      padding: 1.5rem 2.5rem;
    }
  }

  /* :global() zodat de focusstijl ook in de child-componenten werkt */
  .site-header :global(:focus-visible) {
    outline: 2px solid var(--color-orange);
    outline-offset: 3px;
  }
</style>
