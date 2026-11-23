<script>
  import NavLink from '$lib/components/atoms/NavLink.svelte';
</script>

<details class="language">
  <summary class="pill">
    <span class="visually-hidden">Taal: </span>NL
    <span class="arrow" aria-hidden="true">↓</span>
  </summary>
  <ul>
    <li><NavLink href="?lang=nl" hreflang="nl" lang="nl" aria-current="true">Nederlands</NavLink></li>
    <li><NavLink href="?lang=en" hreflang="en" lang="en">English</NavLink></li>
  </ul>
</details>

<style>
  .language {
    position: relative;

    summary {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.5rem 0.75rem;
      font-weight: 700;
      cursor: pointer;
      list-style: none;

      &::-webkit-details-marker {
        display: none;
      }

      &:hover {
        background-color: hsl(var(--hue-navy), 34%, 30%, 0.1);
      }
    }

    .arrow {
      transition: rotate 0.2s ease;

      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    }

    &[open] .arrow {
      rotate: 180deg;
    }

    ul {
      position: absolute;
      inset-block-start: calc(100% + 0.5rem);
      inset-inline-end: 0;
      z-index: 10;
      min-inline-size: 100%;
      margin: 0;
      padding: 0.5rem;
      list-style: none;
      border: 2px solid var(--color-navy);
      border-radius: 1rem;
      background-color: var(--color-sand);
    }
  }

  /* NavLink is een los component, dus :global() om de <a> erin te stylen */
  .language :global(a) {
    display: block;
    padding: 0.25rem 0.75rem;
    border-radius: 0.5rem;
    white-space: nowrap;
  }

  /* Hover: lichte achtergrond, alleen op opties die niet actief zijn */
  .language :global(a:not([aria-current]):hover) {
    background-color: hsl(var(--hue-navy), 34%, 30%, 0.1);
  }

  /* Actief: navy vlak, geen oranje lijn van NavLink */
  .language :global(a[aria-current]) {
    background-color: var(--color-navy);
    color: var(--color-sand);
    text-decoration: none;
  }
</style>