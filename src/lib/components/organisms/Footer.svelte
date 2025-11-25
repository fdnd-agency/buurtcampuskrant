<script>
    import FacebookLogo from "../atoms/FacebookLogo.svelte";
    import InstagramLogo from "../atoms/InstagramLogo.svelte";
    import Newsletter from "../atoms/Newsletter.svelte"
    
    import LogoNieuwWestToren from "../atoms/LogoNieuwWestToren.svelte";
    import LogoZuidOostToren from "../atoms/LogoZuidOostToren.svelte";
    import LogoOostToren from "../atoms/LogoOostToren.svelte";
</script>

<footer>
    <div class="flex-container">
        <Newsletter/>

        <div class="socials">
            <a href="" aria-label="Facebook"><FacebookLogo/></a>
            <a href="" aria-label="Instagram"><InstagramLogo/></a>
        </div>
    </div>

    <nav>
        <ul>
            <li class="menu-item"><a href="/district/nieuw-west"><LogoNieuwWestToren/></a></li>
            <li class="menu-item"><a href="/district/zuid-oost"><LogoZuidOostToren/></a></li>
            <li class="menu-item"><a href="/district/oost"><LogoOostToren/></a></li>
        </ul>
    </nav>  
</footer>

<style>
    footer {
        background-color: var(--primary-color-general);
        padding: var(--xl) var(--sm);
        margin: var(--sm);
        border-radius: var(--border-radius-sm);

        :global(form) {
            justify-self: center;
        }

        .socials {
            display: flex;
            justify-content: center;
            padding: var(--sm) 0;
        }

        ul {
            display: flex;
            justify-content: center;
            gap: var(--sm);
            list-style-type: none;

            .menu-item a:hover {
                animation-name: hover-effect;
                animation-duration: .5s;
            }

            img {
                width: auto;
                height: 12vh;
            }
        }

        @media (width > 980px) {
            display: flex;
            justify-content: space-evenly;

            ul:first-child {
                gap: var(--lg);
            }

            .flex-container {
                display: flex;
                flex-direction: column;
                gap: var(--md);
                align-items: center;
                justify-content: center;

                .socials {
                    padding: 0;
                }
            }

            .menu-item {
                display: flex;
                flex-direction: column;
                gap: var(--sm);
            }    
        }
    }
</style>