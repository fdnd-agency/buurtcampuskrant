<script>
    import FacebookLogo from "../atoms/FacebookLogo.svelte";
    import InstagramLogo from "../atoms/InstagramLogo.svelte";
    import Newsletter from "../molecules/Newsletter.svelte"
    
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
            <li class="menu-item"><a href=""><LogoNieuwWestToren/></a>
                <ul class="submenu">
                    <li><a href="#">de wijk</a></li>
                    <li><a href="#">studenten</a></li>
                    <li><a href="#">bewoners</a></li>
                    <li><a href="#">wijkpartners</a></li>
                </ul>
            </li>
            <li class="menu-item"><a href=""><LogoZuidOostToren/></a>
                <ul class="submenu">
                    <li><a href="#">de wijk</a></li>
                    <li><a href="#">studenten</a></li>
                    <li><a href="#">bewoners</a></li>
                    <li><a href="#">wijkpartners</a></li>
                </ul>
            </li>
            <li class="menu-item"><a href=""><LogoOostToren/></a>
            <ul class="submenu">
                    <li><a href="#">de wijk</a></li>
                    <li><a href="#">studenten</a></li>
                    <li><a href="#">bewoners</a></li>
                    <li><a href="#">wijkpartners</a></li>
                </ul>
            </li>
        </ul>
    </nav>  
</footer>

<style>
    footer {
        background-color: var(--primary-color-general);
        padding: var(--sm);

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
        .submenu {
            display: none;
        }

        @media (width > 880px) {
            display: flex;
            justify-content: space-evenly;

            ul:first-child {
                gap: var(--lg);
            }

            .flex-container {
                display: flex;
                gap: var(--md);
                align-items: center;
            }

            .menu-item {
                display: flex;
                flex-direction: column;
                gap: var(--sm);
                
                    .submenu {
                        display: inline-block;
                        li {
                            padding-bottom: .25rem;
                        }
                        a {
                            font-family: var(--tertiary-font);
                            text-decoration: none;
                            color: var(--secondary-color-general);

                            &:hover {
                                font-family: var(--secondary-font);
                            }
                        }
                    }    
            }
            
            
        }

        
    }
</style>