<script>
  import Filter from "$lib/components/Filter.svelte";
  export let data;
  const { categories, stories } = data;
  // console.log(categories);
  
</script>


<Filter {categories} {stories}/>

