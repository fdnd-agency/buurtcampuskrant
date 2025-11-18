<a class="dialog-trigger" href="#dialogid">toegankelijkheid</a>

<div id="dialogid" class="dialog-window">
	<a class="close-dialog-bg" href="/"></a>
	
	<div class="input-dialog">
			<a class="close-dialog-trigger" href="/" title="Close">sluiten</a>
		<!-- Content here -->
		<h2 class="md">Selecteer je voorkeur</h2>
        <!-- <fieldset> -->
		<label><input type="radio" value="normal-font" name="font" checked/>Normaal font</label>
		<label><input type="radio" value="dyslexia-font" name="font"/>Dyslexie font</label>
		<!-- </fieldset> -->

		<label><input type="radio" value="light-mode" id="light-mode" name="dl-mode"/>Light mode</label>
		<label><input type="radio" value="dark-mode" id="dark-mode" name="dl-mode"/>Dark mode</label>
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


:global(body:has(.input-dialog #light-mode:checked)) {
    /* color-scheme: light; */
    /* --dark-mode-general: var(--primary-color-general);
    --tertiary-color-general: var(--secondary-color-general); */
    body {
        --primary-font: var(--secondary-font);
} 
}

/* :global(body:has(.input-dialog #dark-mode:checked)) {
    color-scheme: dark;
    --primary-color-general: var(--primary-color-general);
}  */

</style>