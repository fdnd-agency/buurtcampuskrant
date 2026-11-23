<script>
  import logo from '$lib/assets/Buurt-campus.png';
</script>

<a href="/" class="logo">
  <img src={logo} alt="Buurtcampus – naar de homepage" width="160" height="64" >
</a>

<style>
  .logo {
    display: inline-block;
    flex-shrink: 0;

    img {
      display: block;
      block-size: 2.5rem;
      inline-size: auto;

      @container page (min-width: 60rem) {
        block-size: 3.5rem;
      }
    }
  }
</style>