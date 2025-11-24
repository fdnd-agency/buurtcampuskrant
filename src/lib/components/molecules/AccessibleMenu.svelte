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

<!-- <a class="dialog-trigger" href="#dialogid">toegankelijkheid</a>

<div id="dialogid" class="dialog-window">
	<a class="close-dialog-bg" href="#"></a>
	
	<div class="input-dialog">
			<a class="close-dialog-trigger" href="#" title="Close">sluiten</a> -->
		<!-- Content here -->
		<!-- <h2 class="md">Selecteer je voorkeur</h2>
        <fieldset>
		    <label><input type="radio" value="normal-font" name="font-setting" checked/>Normaal font</label>
		    <label><input type="radio" value="dyslexia-font" name="font-setting"/>Dyslexie font</label>
		</fieldset>

        <fieldset>
		    <label><input type="radio" value="auto-dl-mode" id="auto" name="dl-mode" checked/>Automatisch</label>
		    <label><input type="radio" value="light-dl-mode" id="light-mode" name="dl-mode"/>Light mode</label>
		    <label><input type="radio" value="dark-dl-mode" id="dark-mode" name="dl-mode"/>Dark mode</label>
        </fieldset>
	</div>
</div> -->

<button popovertarget="accessible-menu">Toegankelijkheid</button>

<section  popover id="accessible-menu" class="dialog-window">
	<div class="input-dialog">
		<!-- Content here -->
		<h2 class="md">Selecteer je voorkeur</h2>
        <fieldset>
		    <label><input type="radio" value="normal-font" name="font-setting" checked/>Normaal font</label>
		    <label><input type="radio" value="dyslexia-font" name="font-setting"/>Dyslexie font</label>
		</fieldset>

        <fieldset>
		    <label><input type="radio" value="auto-dl-mode" id="auto" name="dl-mode" checked/>Automatisch</label>
		    <label><input type="radio" value="light-dl-mode" id="light-mode" name="dl-mode"/>Light mode</label>
		    <label><input type="radio" value="dark-dl-mode" id="dark-mode" name="dl-mode"/>Dark mode</label>
        </fieldset>
	</div>
</section>

<style>
    button {
        display: flex;
        place-self: end;
        padding: .5rem 1rem;
        margin: 1rem;
        background-color: var(--primary-color-general);
        color: var(--secondary-color-general);
        /* border: var(.5px solid var(--secondary-color-general)); */
        font-size: 1rem;
        border: 1px solid var(--secondary-color-general);

        &:hover {
            background-color: var(--secondary-color-general);
            color: var(--primary-color-general);
        }
    }

    :popover-open {
        .input-dialog {
            background: var(--primary-color-general);
            border: 1px solid var(--secondary-color-general);
            padding: 3rem 1rem;

            display: flex;
            align-items: center;
            flex-direction: column;
            gap: .5rem;
            color: var(--secondary-color-general);

            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80vw;
        transition: all 0.2s ease-in;


            fieldset {
                border: none;
            }
        }

        &::backdrop {
            background: rgba(38, 38, 38, 0.7);
        }
    }

@media (width > 30rem) {
    .input-dialog {
        max-width: 60vw;
    }
}
@media (width > 743px) {
    .input-dialog {
        max-width: 25rem;
    }
}

</style>