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

<button popovertarget="accessible-menu">
    <svg viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.49543 1.93751C6.87519 1.81092 7.28569 2.01585 7.41243 2.39552C7.53901 2.77528 7.33409 3.18578 6.95442 3.31251L4.44953 4.14747V5.40431L6.32844 8.22267C6.55055 8.55583 6.46043 9.00642 6.12727 9.22853C5.79411 9.45063 5.34351 9.36051 5.12141 9.02735L3.72493 6.93263L2.32844 9.02735C2.10634 9.36051 1.65574 9.45063 1.32258 9.22853C0.989423 9.00642 0.899304 8.55583 1.12141 8.22267L3.00032 5.40431V4.14747L0.495433 3.31251C0.115762 3.18578 -0.0891618 2.77528 0.0374252 2.39552C0.164158 2.01585 0.574656 1.81092 0.954417 1.93751L3.72493 2.86036L6.49543 1.93751Z" fill="black"/>
        <path d="M3.7251 1.625C4.00124 1.625 4.2251 1.40114 4.2251 1.125C4.2251 0.848858 4.00124 0.625 3.7251 0.625C3.44896 0.625 3.2251 0.848858 3.2251 1.125C3.2251 1.40114 3.44896 1.625 3.7251 1.625Z" fill="black"/>
        <path d="M3.7251 1C3.65606 1 3.6001 1.05596 3.6001 1.125C3.6001 1.19404 3.65606 1.25 3.7251 1.25C3.79413 1.25 3.8501 1.19404 3.8501 1.125C3.8501 1.05596 3.79413 1 3.7251 1ZM4.8501 1.125C4.8501 1.74632 4.34642 2.25 3.7251 2.25C3.10378 2.25 2.6001 1.74632 2.6001 1.125C2.6001 0.50368 3.10378 0 3.7251 0C4.34642 0 4.8501 0.50368 4.8501 1.125Z" fill="black"/>
    </svg>
    <span>Toegankelijkheid</span>
</button>

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
        position: fixed;
        bottom: var(--md);
        right: var(--md);
        height: var(--lg);
        max-width: var(--lg);
        padding:0;

        font-size: var(--sm);
        border-radius: var(--border-radius-md);
        border: 1px solid var(--secondary-color-general);
        background-color: var(--primary-color-general);
        

        overflow: hidden;
        display: inline-flex;
        align-items: center;
        gap: var(--ws);
        
        padding-inline: var(--xs);
        
        transition: .5s;

        @supports (interpolate-size: allow-keywords) {
            max-width: unset;
            width: var(--lg);
        }	
	
        svg {
            width: var(--md);
            height: var(--md);
            margin-block: var(--xs);
            flex-shrink: 0;

            path {
                fill: var(--secondary-color-general);
            }
        }
        
        span {
            opacity: 0;
            transition: .5s;
            font-family: var(--tertiary-font);
        }

        @media (prefers-reduced-motion: no-preference) {
            &:hover, &:focus-visible {
                max-width: 12rem;
                
                @supports (interpolate-size: allow-keywords) {
                    max-width: unset;
                    width: auto;			
                }

                span {
                    opacity: 1;
                    color: var(--secondary-color-general);
                }
            }
        }
        
    }
    

    :popover-open {
        .input-dialog {
            background: var(--primary-color-general);
            border: 1px solid var(--secondary-color-general);
            padding: 3rem 1rem;
            border-radius: var(--border-radius-sm);

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
                font-family: var(--tertiary-font);
                display: flex;
                flex-direction: column;

                input {
                    margin-right: var(--xs);
                }
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