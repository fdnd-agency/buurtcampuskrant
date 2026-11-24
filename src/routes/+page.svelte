<script>
  let { data } = $props();
  // console.log(data.districts);
</script>

<h1>BuurtCampusKrant</h1>

{#each data.stories as story}
  <a href="/{story.district}">{story.district}</a>
{/each}

<style>
  a {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 10px;
    background-color: rgb(241, 197, 197);
    width: fit-content;
  }
</style>