<script>
    import LogoNieuwWestToren from "../atoms/LogoNieuwWestToren.svelte";
    import LogoZuidOostToren from "../atoms/LogoZuidOostToren.svelte";
    import LogoOostToren from "../atoms/LogoOostToren.svelte";
    import LogoBuurtcampus from "../atoms/LogoBuurtcampus.svelte";

    let props = $props();

    let menuOpen = $state(false);

    function toggleSidebar (e) {
        e.preventDefault();
        menuOpen = !menuOpen;
    }
</script>

<header class="{props.district}">
    <a href="/" aria-label="terug naar home"><LogoBuurtcampus/></a>
    <a href="#footer-menu" class="menu-toggle" aria-label="open en sluit button menu" onclick={toggleSidebar}>menu</a>

    <nav id="menu" class="menu" class:open={menuOpen}>
        <ul>
        <li class="menu-item">
            <a href="/district/nieuw-west" aria-label="Nieuw-west"><LogoNieuwWestToren/></a>
        </li>

        <li class="menu-item">
            <a href="/district/zuid-oost" aria-label="Zuid-oost"><LogoZuidOostToren/></a>
        </li>

        <li class="menu-item">
            <a href="/district/oost" aria-label="Oost"><LogoOostToren/></a>
        </li>
        </ul>
    </nav>
</header>



<style>
    .menu-toggle {
        display: inline-block;
        padding: var(--xs) var(--md);
        background: var(--accent-color);
        color: white;
        text-decoration: none;
        font-family: var(--primary-font);
        text-align: center;

            &:hover {
                background-color: var(--accent-color-darker);
            }
    }

    header {        
        container-type: inline-size;
        container-name: header-display;

        position: sticky;
        top: 0;
        backdrop-filter: blur(200px);

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary-color-general);
        padding: var(--sm);

        border-radius: var(--border-radius-sm);
        margin: var(--sm);

        a:first-child {
            z-index: 10;
        }
    }
 
        
    /* zonder JS menu onderaan pagina */
    .menu {
        display: none;
    }

    /* hamburger foldout */
    :global(.js .menu) {
        position: fixed;
        display: grid;
        grid-template-rows: 1fr max-content 1fr;
        place-items: center;
        gap: var(--sm);

        top: 9.6rem;
        left: -110%;
        width: 100%;

        background-color: var(--primary-color-general);
        padding: var(--md) var(--sm);
        box-shadow: 2px 0 10px rgba(0,0,0,0.3);
        transition: left .3s ease;

        ul {
            list-style-type: none;
            grid-row: 2/3;
            
            display: flex;
            flex-direction: column;
            gap: var(--sm);
        }
    }

    /* MENU OPEN */
    @container header-display (width < 48rem) {
        :global(.js .menu.open) {
            left: 0;
            border-radius: var(--border-radius-sm);
            border: var(--border-dm);
            top: 9.6rem;
        }
    }

    @container header-display (width > 30rem) {
        :global(.js) {
            .menu ul {
                flex-direction: row;
            }
        }
    }

    @container header-display (width > 48rem) {
        :global(.js .menu) {
            position: absolute;
            top: 5rem;
            left: auto;
            right: var(--lg);
            transform: translateY(-50%);
            width: fit-content;
            height: fit-content;
            background: none;
            box-shadow: none;


            ul {
                flex-direction: row;
                gap: var(--xs);
            }
        }

        .menu-toggle {
            display: none;
        }
    }
</style>


