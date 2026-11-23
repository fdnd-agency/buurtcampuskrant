<script>
  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import { DISTRICTS } from '$lib/districts';
  import NavLink from '$lib/components/atoms/NavLink.svelte';

  let nav;

  afterNavigate(() => nav?.hidePopover());

  const isCurrent = (path) =>
    path === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(path);
</script>

<button class="menu-toggle pill" popovertarget="hoofdmenu" aria-label="Menu openen">
  Menu
</button>

<nav bind:this={nav} id="hoofdmenu" class="main-nav" popover aria-label="Hoofdmenu">
  <ul>
    <li><NavLink href="/" current={isCurrent('/')}>Home</NavLink></li>
    {#each DISTRICTS as district}
      <li>
        <NavLink href="/{district.slug}" current={isCurrent(`/${district.slug}`)}>
          {district.name}
        </NavLink>
      </li>
    {/each}
    <li><NavLink href="/archief" current={isCurrent('/archief')}>Archief</NavLink></li>
  </ul>
</nav>

<style>
  /* ---------- Menu (mobile: popover) ---------- */
  .menu-toggle {
    margin-inline-start: auto;
    padding: 0.5rem 1rem;
    background: none;
    color: var(--color-navy);
    font: inherit;
    font-weight: 700;

    @container page (min-width: 60rem) {
      display: none;
    }
  }

  .main-nav {
    inset: 0 0 auto auto;
    margin: 0;
    padding: 4rem 2rem 2rem;
    border: none;
    min-block-size: 100dvh;
    background-color: var(--color-sand);
    color: var(--color-navy);

    /* Popover gedraagt zich op desktop als gewone nav */
    @container page (min-width: 60rem) {
      &,
      &:not(:popover-open) {
        display: block;
        position: static;
        overflow: visible;
        min-block-size: auto;
        padding: 0;
        background: none;
      }
    }

    &::backdrop {
      background-color: hsl(var(--hue-navy), 34%, 30%, 0.5);
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
      list-style: none;

      @container page (min-width: 60rem) {
        flex-direction: row;
        gap: 2.5rem;
      }
    }
  }

  /* NavLink is een los component, dus :global() om de <a> erin te stylen */
  .main-nav :global(a) {
    font-size: var(--font-size-large);
    font-weight: 700;

    @container page (min-width: 60rem) {
      font-size: var(--font-size-small);
    }
  }

  /* Hover: dunne navy lijn, alleen op links die niet actief zijn.
     Actief = oranje lijn uit NavLink. */
  .main-nav :global(a:not([aria-current]):hover) {
    text-decoration: underline;
    text-decoration-color: currentColor;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.4em;
  }
</style>