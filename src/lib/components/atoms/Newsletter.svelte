<script>
    import { enhance } from '$app/forms';
	import { page } from '$app/stores';
</script>

<form method="post" use:enhance>
    <div class="container">
        <label for="newsletter" class="sm">
            Schrijf je in voor de nieuwsbrief!
        </label>
        <input type="email" name="email" placeholder=" e-mailadres" required id="newsletter">
        <button type="submit">Aanmelden</button>
    </div>
</form>

<style>
    form {
        container-type: inline-size;
        container-name: --newsletter;
        
        width: 265px;
    }

    div {
        display: flex;
        flex-direction: column;

        label {
            color: white;
            font-size: var(--sm);
            padding-bottom: var(--xs);
        }

        button {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.7rem;
            font-weight: 500;
            color: white;
            background-color: var(--accent-color);
            border: none;
            padding-right: 35px;
            padding-left: 10px;
            height: 1.5rem;

            &:hover {
                background-color: var(--accent-color-darker);
            }
        }
    }

    input {
        border: none;
        border-style: solid;
        border-color: #CACACA;
        border-width: 1px 1px 1px 1px; 
        grid-row: 2;
        height: 1.5rem;
    }

    input::placeholder {
        color: #CACACA;
        font-style: italic;
        font-size: 0.7rem;
    }

    @container --newsletter (width > 264px) { 

        div {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 1fr 1fr;
            width: 14.375rem;  

            label {
                grid-column: span 2;
            }
            
            button {
                grid-row: 2;
                grid-column: 2;
            }

            input {
                border-width: 1px 0 1px 1px; 
            }

            button::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0; 
                width: 0;
                height: 0;
                border-top: 12px solid transparent;
                border-bottom: 12px solid transparent;
                border-right: 15px solid var(--primary-color-general);
            }
        }
    }
</style>