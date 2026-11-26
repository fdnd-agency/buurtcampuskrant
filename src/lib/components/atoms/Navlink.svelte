<script>
  let { href, current = false, children, ...rest } = $props();
</script>

<a {href} aria-current={current ? 'page' : undefined} {...rest}>
  {@render children()}
</a>

<style>
  a {
    color: inherit;
    text-decoration: none;

    &[aria-current] {
      text-decoration: underline;
      text-decoration-color: var(--color-orange);
      text-decoration-thickness: 2px;
      text-underline-offset: 0.4em;
    }
  }
</style>