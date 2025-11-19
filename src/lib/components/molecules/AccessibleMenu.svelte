<script>
    import { onMount } from 'svelte';

    onMount(() => {                                                                                 // wordt pas uitgevoerd als de DOM geladen is
        const AccessibilityOptions = document.querySelectorAll('.input-dialog [type="radio"]');     // zoeken alle radio buttons

        AccessibilityOptions.forEach(AccessibilityOption => {                                       // splitsen radio buttons op
            AccessibilityOption.addEventListener("change", handleAccessibilityOptionChange);        // als er iets wijzigt met 1 van deze dan handle...
        });

        function handleAccessibilityOptionChange(event) {                               
            localStorage.setItem(event.target.name, event.target.value);                            // je bewaart de value in de naam als het wijzigt in de localstorage
        }

        function getAccessibilityOptionOnload() {                                                   // als de component/pagina geladen wordt functie
            const fontOption = localStorage.getItem("font-setting");                                // opgeslagen font waarde uit localstorage ophalen
            if (fontOption) {                                                                       // checken of het gelukt is
                 const fontRadio = document.querySelector("[value='" + fontOption + "']");          // radio zoeken waarvan de value was opgeslagen in localstorage
                fontRadio.checked = true;                                                           // radio checked 
            }

            const colorSchemeOption = localStorage.getItem("dl-mode");
            if (colorSchemeOption) {
                const colorSchemeRadio = document.querySelector("[value='" + colorSchemeOption + "']");
                colorSchemeRadio.checked = true;
            }

        };

        getAccessibilityOptionOnload();     

    });
</script>

<a class="dialog-trigger" href="#dialogid">toegankelijkheid</a>

<div id="dialogid" class="dialog-window">
	<a class="close-dialog-bg" href="#"></a>
	
	<div class="input-dialog">
			<a class="close-dialog-trigger" href="#" title="Close">sluiten</a>
		<!-- Content here -->
		<h2 class="md">Selecteer je voorkeur</h2>
        <!-- <fieldset> -->
		<label><input type="radio" value="normal-font" name="font-setting" checked/>Normaal font</label>
		<label><input type="radio" value="dyslexia-font" name="font-setting"/>Dyslexie font</label>
		<!-- </fieldset> -->

		<label><input type="radio" value="auto-dl-mode" id="auto" name="dl-mode" checked/>Automatisch</label>
		<label><input type="radio" value="light-dl-mode" id="light-mode" name="dl-mode"/>Light mode</label>
		<label><input type="radio" value="dark-dl-mode" id="dark-mode" name="dl-mode"/>Dark mode</label>
	</div>
</div>

<style>
    .dialog-window {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: rgba(38, 38, 38, 0.7);
        z-index: 100;

        /* DISPLAY NONE */
        opacity: 0;
        pointer-events: none;

        transition: all 0.2s ease-in;

        .close-dialog-trigger {
            display: block;
            text-align: right;
            text-decoration: none;
        }

        .input-dialog {
            background: var(--primary-color-general);
            border: 1px solid var(--secondary-color-general);
            padding: 1rem;
            
            display: flex;
            flex-direction: column;
            gap: .5rem;
            color: var(--secondary-color-general);
    
            opacity: 0;
            transform: scale(0.7);
            transition: all 0.1s ease-in;
        }

        .close-dialog-bg {
            display: block;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;
            cursor: default;
        }

        &:target {
            opacity: 1;
            pointer-events: auto;

        .input-dialog {
                opacity: 1;
                transform: scale(1);
            }
        }
}

label {
    font-family: var(--secondary-font);
    display: flex;
    gap: var(--xs);
}

.dialog-trigger {
	display: inline-block;
	color: var(--secondary-color-general);
	background: var(--primary-color-general);
	text-decoration: none;
	
	padding: 1rem;
}

.close-dialog-trigger {
	color: var(--secondary-color-general);
}
</style>