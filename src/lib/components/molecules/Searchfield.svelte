<script>
  import SearchIcon from '$lib/components/atoms/SearchIcon.svelte';
</script>

<search class="search pill">
  <label for="zoekterm" class="visually-hidden">Zoeken in de krant</label>
  <input type="search" id="zoekterm" placeholder="Zoeken in de krant.." >
  <button type="button">
    <SearchIcon />
    <span class="visually-hidden">Zoeken</span>
  </button>
</search>

<style>
  .search {
    display: flex;
    align-items: center;
    flex: 1 1 100%;
    padding-inline: 1rem 0.5rem;

    @container page (min-width: 60rem) {
      flex: 0 1 15rem;
      margin-inline-start: auto;
    }

    &:focus-within {
      outline: 2px solid var(--color-orange);
      outline-offset: 3px;
    }

    input {
      flex: 1;
      min-inline-size: 0;
      padding-block: 0.5rem;
      border: none;
      background: none;
      color: var(--color-navy);
      font: inherit;

      &::placeholder {
        color: var(--color-navy);
      }

      &:focus-visible {
        outline: none;
      }
    }

    button {
      display: grid;
      padding: 0.25rem;
      border: none;
      background: none;
      color: var(--color-navy);
    }
  }
</style>