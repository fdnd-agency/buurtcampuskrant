<script>
    import FacebookLogo from "./FacebookLogo.svelte";
    import InstagramLogo from "./InstagramLogo.svelte";
    
    import LogoAlgemeenToren from "./LogoAlgemeenToren.svelte";
    import LogoNieuwWestToren from "./LogoNieuwWestToren.svelte";
    import LogoZuidOostToren from "./LogoZuidOostToren.svelte";
    import LogoOostToren from "./LogoOostToren.svelte";
</script>

<footer>
    <label for="email">Schrijf je in voor de nieuwsbrief!</label>
    <input type="email" id="email" pattern=".+@example\.com" size="30" required />

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