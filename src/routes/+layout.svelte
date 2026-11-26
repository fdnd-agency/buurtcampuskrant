<script>
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/organisms/Header.svelte';
	import '$lib/assets/global.css';

	let { children } = $props();
</script>
<Header />
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
