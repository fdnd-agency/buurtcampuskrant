<script>
    import FacebookLogo from "./FacebookLogo.svelte";
    import InstagramLogo from "./InstagramLogo.svelte";
    import Newsletter from "./Newsletter.svelte"
    
    import LogoAlgemeenToren from "./LogoAlgemeenToren.svelte";
    import LogoNieuwWestToren from "./LogoNieuwWestToren.svelte";
    import LogoZuidOostToren from "./LogoZuidOostToren.svelte";
    import LogoOostToren from "./LogoOostToren.svelte";
</script>

<footer>
    <Newsletter/>

    <a href="" aria-label="Facebook"><FacebookLogo/></a>
    <a href="" aria-label="Instagram"><InstagramLogo/></a>

    <nav>
        <ul>
            <li><a href=""><LogoAlgemeenToren/></a></li>
            <li><a href=""><LogoNieuwWestToren/></a></li>
            <li><a href=""><LogoZuidOostToren/></a></li>
            <li><a href=""><LogoOostToren/></a></li>
        </ul>
    </nav>  
</footer>

<style>
    footer {
        background-color: var(--primary-color-general);

        ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            list-style-type: none;
            gap: var(--sm);

            li {
                justify-self: center;
                align-self: end;
            }

            @media (width > 520px) {   
                grid-template-columns: repeat(4, 1fr);
            }
        }
    
        
    }

</style>