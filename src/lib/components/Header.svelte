<script>
    import LogoNieuwWestToren from "./LogoNieuwWestToren.svelte";
    import LogoZuidOostToren from "./LogoZuidOostToren.svelte";
    import LogoOostToren from "./LogoOostToren.svelte";
    import LogoBuurtcampus from "./LogoBuurtcampus.svelte";

    let props = $props();

    let menuOpen = $state(false);

    function toggleSidebar () {
        menuOpen = !menuOpen;
    }
</script>

<header class="{props.district}">
    <a href="" aria-label="terug naar home"><LogoBuurtcampus/></a>
    <a href="#menu" class="menu-toggle" onclick={toggleSidebar}>MENU</a>
</header>

<nav id="menu" class="menu" class:open={menuOpen}>
    <ul>
      <li class="menu-item">
        <a href="/district/nieuw-west" aria-label="Nieuw-west"><LogoNieuwWestToren/></a>
        <ul class="submenu">
          <li><a href="#">de wijk</a></li>
          <li><a href="#">studenten</a></li>
          <li><a href="#">bewoners</a></li>
          <li><a href="#">wijkpartners</a></li>
        </ul>
      </li>

      <li class="menu-item">
        <a href="/district/zuid-oost" aria-label="Zuid-oost"><LogoZuidOostToren/></a>
        <ul class="submenu">
          <li><a href="#">de wijk</a></li>
          <li><a href="#">studenten</a></li>
          <li><a href="#">bewoners</a></li>
          <li><a href="#">wijkpartners</a></li>
        </ul>
      </li>

      <li class="menu-item">
        <a href="/district/oost" aria-label="Oost"><LogoOostToren/></a>
        <ul class="submenu">
          <li><a href="#">de wijk</a></li>
          <li><a href="#">studenten</a></li>
          <li><a href="#">bewoners</a></li>
          <li><a href="#">wijkpartners</a></li>
        </ul>
      </li>
    </ul>
</nav>

<style>
    :global(header) {        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary-color-general);
        padding: var(--sm);
        position: relative;
    }
        
    /* zonder JS menu onderaan pagina */
    .menu {
        background: #eee;
        padding: var(--sm);
    }

    :global(.js .menu) {
        position: fixed;
        top: 0;
        left: -100%;
        width: 80vw;
        height: 100vh;
        background-color: var(--primary-color-general);
        padding: var(--md) var(--sm);
        box-shadow: 2px 0 10px rgba(0,0,0,0.3);
        transition: left .3s ease;

        ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
        }
        li.menu-item {
            display: flex;
            padding-bottom: var(--md);
        }   
        a {
            color: black;
            text-decoration: none;
            display: block;
            font-family: "tertiary-font";
        }  

    }

    /* MENU OPEN */
    :global(.js .menu.open) {
        left: 0;
    }

    /* MENU-BUTTON */
    .menu-toggle {
        display: inline-block;
        padding: var(--xs) var(--md);
        background: var(--secondary-color-general);
        color: white;
        text-decoration: none;
        font-family: "primary-font";
        text-align: center;

            &:hover {
                background-color: var(--secondary-color-general-darker);
            }
    }

    @media (min-width: 1080px) {
        :global(.js .menu) {
            position: absolute;
            top: 5rem;
            left: auto;
            right: var(--lg);
            transform: translateY(-50%);
            width: fit-content;
            height: fit-content;
            background: transparent;
            box-shadow: none;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;

            li.menu-item {
                padding-bottom: 0;
            }   
        }

        :global(.js .menu ul) {
            display: flex;
            gap: var(--md);
            list-style: none;
            margin: 0;
            padding: 0;

                li {
                    position: relative;

                    a {
                        color: var(--primary-color-east);
                        text-decoration: none;
                        padding: var(--xs) var(--sm);
                    }
                }
        }

        :global(.js .menu ul ul) {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background: #b4bdd0;
            padding: var(--xs) 0;
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


