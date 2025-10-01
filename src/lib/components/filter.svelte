<script>

const artikelen = [
  { 
    titel: "Artikel 1", 
    rubriek: "De wijk",
    inhoud: "Een kort stukje info over de wijk."
  },
  { 
    titel: "Artikel 2", 
    rubriek: "De wijk",
    inhoud: "Nog een artikel over gebeurtenissen in de wijk."
  },
  { 
    titel: "Artikel 3", 
    rubriek: "Bewoners",
    inhoud: "Artikel over bewonersinitiatieven."
  },
  { 
    titel: "Artikel 4", 
    rubriek: "Bewoners",
    inhoud: "Interview met een bewoner."
  },
  { 
    titel: "Artikel 5", 
    rubriek: "Studenten",
    inhoud: "Studentenprojecten aan de universiteit."
  },
  { 
    titel: "Artikel 6", 
    rubriek: "Studenten",
    inhoud: "Leuke tips voor studenten in de stad."
  }
];

let rubriek = null;

</script>

<button on:click={() => rubriek = "De wijk"}>de wijk</button>
<button on:click={() => rubriek = "Bewoners"}>bewoners</button>
<button on:click={() => rubriek = "Studenten"}>studenten</button>
<button on:click={() => rubriek = null}>alle</button>

<ul>
    {#each artikelen as artikel}
    <!-- als er geen rubriek actief is toon alles / artikel wat bij de filter hoort tonen  -->
    {#if rubriek === null || artikel.rubriek === rubriek}
      <li>
        <h2>{artikel.titel}</h2>
        <p>{artikel.inhoud}</p>
      </li>
      {/if}
    {/each}
  </ul>

<style>

button {
    border-radius: 20px;
    border: 1px solid black;
}

button:hover {
    border: 1px solid black;
}

ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 0; 
    gap: 1em;
}

li {
    border-radius: 20px;
    width: 300px;
    height: 300px;
    border: 1px solid black;
    list-style-type: none;
    
}
    </style>


  

