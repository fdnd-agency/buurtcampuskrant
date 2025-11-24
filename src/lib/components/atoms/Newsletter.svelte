<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
</script>

<form method="POST" use:enhance>
	<input type="email" name="email" placeholder="  e-mailadres" required>
	<button type="submit">Aanmelden</button>
</form>

<style>
    form {
        display: flex;
        width: 230px;
        height: 24px;

        button {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 11px;
            font-weight: 500;
            color: white;
            background-color: var(--accent-color);
            border: none;
            padding-right: 35px;
            padding-left: 10px;

            &:hover {
                background-color: var(--secondary-color-general-darker);
            }
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

        input {
            border: none;
            border-style: solid;
            border-color: #CACACA;
            border-width: 1px 0 1px 1px; 
        }

        input::placeholder {
            color: #CACACA;
            font-style: italic;
            font-size: 11px;
        }
    }
</style>