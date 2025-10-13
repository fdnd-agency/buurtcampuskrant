<header>
    <a href="" aria-label="terug naar home"><LogoBuurtcampus/></a>
    <a href="#menu" class="menu-toggle" onclick={toggleSidebar}>MENU</a>
</header>

<nav id="menu" class="menu" class:open={menuOpen}>
    <ul>
      <li>
        <a href="#">Algemeen</a>
        <ul class="submenu">
          <li><a href="#">nieuws</a></li>
          <li><a href="#">docent</a></li>
          <li><a href="#">partner</a></li>
          <li><a href="#">HvA & Oba</a></li>
          <li><a href="#">Doeners in Damsko</a></li>
        </ul>
      </li>

      <li>
        <a href="#">Oost</a>
        <ul class="submenu">
          <li><a href="#">de wijk</a></li>
          <li><a href="#">studenten</a></li>
          <li><a href="#">bewoners</a></li>
          <li><a href="#">wijkpartners</a></li>
        </ul>
      </li>

      <li>
        <a href="#">Nieuw-west</a>
        <ul class="submenu">
          <li><a href="#">de wijk</a></li>
          <li><a href="#">studenten</a></li>
          <li><a href="#">bewoners</a></li>
          <li><a href="#">wijkpartners</a></li>
        </ul>
      </li>

      <li>
        <a href="#">Zuid-oost</a>
        <ul class="submenu">
          <li><a href="#">de wijk</a></li>
          <li><a href="#">studenten</a></li>
          <li><a href="#">bewoners</a></li>
          <li><a href="#">wijkpartners</a></li>
        </ul>
      </li>
    </ul>
    <!-- <ul>
        <li><a href="/district/nieuw-west" aria-label="Nieuws"><LogoAlgemeenToren/></a></li>
        <li><a href="/" aria-label="Nieuw-West"><LogoNieuwWestToren/></a></li>
        <li><a href="/" aria-label="Zuid-Oost"><LogoZuidOostToren/></a></li>
        <li><a href="/" aria-label="Oost"><LogoOostToren/></a></li>
    </ul> -->
</nav>

<style>
   @font-face {
        font-family: 'primary-font';
        src: url('src/lib/assets/fonts/BuurtCampusArial-Bold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'secondary-font';
        src: url('src/lib/assets/fonts/Arial-BoldMT.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }


    :global(header) {        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #B4BDD0;
        padding: 1rem;
        position: relative;
    }
        
    /* zonder JS menu onderaan pagina */
    .menu {
        background: #eee;
        padding: 1em;
    }

    :global(.js .menu) {
        position: fixed;
        top: 0;
        left: -100%;
        width: 60vw;
        height: 100vh;
        background-color: var(--primary-color-general);
        padding: 2em 1em;
        margin: .5em;
        box-shadow: 2px 0 10px rgba(0,0,0,0.3);
        transition: left .3s ease;

        ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
        }   
        a {
            color: black;
            text-decoration: none;
            display: block;
            font-family: "seconday-font";
        }   
    }

    /* MENU OPEN */
    :global(.js .menu.open) {
        left: 0;
    }

    /* MENU-BUTTON */
    .menu-toggle {
        display: inline-block;
        padding: .5em 2em;
        background: #F26522;
        color: white;
        text-decoration: none;
        font-family: "primary-font";
        text-align: center;
    }

    @media (min-width: 840px) {
        :global(.js .menu) {
            position: absolute;
            top: 5rem;
            left: auto;
            right: 3rem;
            transform: translateY(-50%);
            width: fit-content;
            height: fit-content;
            background: transparent;
            box-shadow: none;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
        }

        :global(.js .menu ul) {
            display: flex;
            gap: 2rem;
            list-style: none;
            margin: 0;
            padding: 0;

                li {
                    position: relative;

                    a {
                        color: black;
                        text-decoration: none;
                        padding: 0.5rem 1rem;
                    }
                }
        }

        :global(.js .menu ul ul) {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: #b4bdd0;
            padding: 0.5rem 0;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.15);
            min-width: 180px;
        }

        :global(.js .menu li:hover > ul) {
            display: block;
        }

        .menu-toggle {
            display: none;
        }
    }
</style>

<script>
    import LogoAlgemeenToren from "./LogoAlgemeenToren.svelte";
    import LogoNieuwWestToren from "./LogoNieuwWestToren.svelte";
    import LogoZuidOostToren from "./LogoZuidOostToren.svelte";
    import LogoOostToren from "./LogoOostToren.svelte";
    import LogoBuurtcampus from "./LogoBuurtcampus.svelte";

    let menuOpen = $state(false);

    function toggleSidebar () {
        menuOpen = !menuOpen;
    }
</script>
