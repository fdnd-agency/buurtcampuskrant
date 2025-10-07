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

<section class="main-section">

  <div class="buttons">
<button on:click={() => rubriek = "De wijk"}>de wijk</button>
<button on:click={() => rubriek = "Bewoners"}>bewoners</button>
<button on:click={() => rubriek = "Studenten"}>studenten</button>
<!-- <button on:click={() => rubriek = null}>alle</button> -->
</div>

<section class="content-wrapper">
  <h2>Buurtcampus // Oost</h2>
<ul>
    {#each artikelen as artikel}
    <!-- als er geen rubriek actief is toon alles / artikel wat bij de filter hoort tonen  -->
    {#if rubriek === null || artikel.rubriek === rubriek}
      <li>
        <img src="/images/foto.png" alt="">
        <div class="info">
        <h3>{artikel.titel}</h3>
        <p>{artikel.inhoud}</p>
        <span class="label">{artikel.rubriek}</span>
      </div>
      </li>
      {/if}
    {/each}
  </ul>
</section>

</section>

<style>

:root {

 /* card kleuren  */
--card-bg:hsla(232, 37%, 92%, 1);
--card-border: 2px solid hsla(230, 39%, 31%, 1);
--card-text: hsla(230, 39%, 31%, 1);

/* Button kleuren */
--button-bg: hsla(0, 0%, 100%, 1);
--button-border: hsla(230, 39%, 31%, 1);

  /* Button states */
--button-hover-bg:  hsla(240, 32%, 18%, 1);
--button-hover-border:  hsla(230, 39%, 31%, 1);
--button-hover-text: hsla(0, 0%, 100%, 1);

--title-color: hsla(230, 39%, 31%, 1);

}

.main-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  margin: 0 auto;
  font-family: Arial, sans-serif;
}  

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items:  flex-start;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto; 
  /* padding: 0 1rem; */
}

.content-wrapper h2 {
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--title-color);
  font-weight: 700;
}

@media (min-width: 768px) {

    .content-wrapper h2 {
      text-align: left;
      width: 100%;
      font-size: 2rem;
    }


  }

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* align-items: flex-start; */
  gap: 5px;
  width: 100%;
  padding: 0 1.5rem; 
}

button {
    border-radius: 20px;
    padding: 7px 10px;
    font-family: 'Arial', sans-serif;
    font-size: 1rem;
    color: var(--title-color);
    background-color: var(--button-bg);
    border: 1px solid var(--button-border);
}

button:hover {
    color: var(--button-hover-text);
    background-color: var(--button-hover-bg);
    border: 1px solid var(--button-border);
}

@media (min-width: 768px){
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }    
  }

ul {
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    /* align-items: flex-start;  */
    width: 100%;
    max-width: 1200px;
    padding-left: 0;
    margin: 0;
    gap: 1em;
}

@media (min-width: 768px){
    ul, h2 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1em;
      padding: 0 2rem;
      /* justify-content: flex-start; */
      /* align-items: center; */
    }    
  }


li {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    max-width: 300px;
    height: 350px;
    border: var(--card-border);
    list-style-type: none;
    background-color: var(--card-bg);
    padding: 0;
    overflow: hidden;
    width: 100%;
}

li img  {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.info {
  display: inline-block;
  /* width: fit-content;    */
  justify-content: space-between;
  flex-grow: 1; 
  padding: 8px 10px;
  /* margin-top: 8px; */
  height: 30px;
  box-sizing: border-box;
  color: var(--card-text);
} 

.info p {
  height: 40px;
  margin-bottom: 20px;
  font-weight: 400;
}

.label {
  border-radius: 20px;
  padding: 6px 10px;
  margin-bottom: 20px;
  align-self: flex-start; 
  text-align: center;
  color: var(--button-hover-text);
  background-color: var(--button-hover-bg);
  border: 1px solid var(--button-border);
}

.label:hover {
  background-color: var(--button-hover-border);
  color: var(--button-hover-text);
}

    </style>


  

