 <script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
  </script>
  
  <svelte:head>
	<link rel="icon" href="/favicon.svg" />
  </svelte:head>
  
 <div>
  <Header />
  <main class="page-content">
  <slot /> 
</main>
  <Footer />
</div>
  
  <style>
div {
	display:flex;
	flex-direction: column;
	min-height: 100vh;
}

main {
	flex: 1;
	padding: 2rem;
}

/* header, footer {
	display: block;
} */

  </style>

