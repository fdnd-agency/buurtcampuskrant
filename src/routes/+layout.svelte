<script>
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/global.css';

	import { Header } from '$lib';
    import { Footer } from '$lib';

	// HEADER
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	function updateBodyClass() {
		// remove all previous route- classes (to reset)
		document.body.classList.forEach(cls => {
			if (cls.startsWith('route-')) {
				document.body.classList.remove(cls);
			}
		});

		const path = document.location.pathname;
		
		let routeClass = "";
		if (path.startsWith("/district/")) {
			routeClass = "route-" + path.replace("/district/", "");
		}
		
		document.body.classList.add(routeClass);
	}

	onMount(() => {
		updateBodyClass();
		afterNavigate(() => updateBodyClass());
	});


	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>


<Header/>

{@render children?.()}

<Footer/>


