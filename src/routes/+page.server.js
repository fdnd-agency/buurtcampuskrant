export async function load() {
    const res  = await fetch('https://fdnd-agency.directus.app/items/buurtcampuskrant_categories');
    const json = await res.json();

    console.log('Fetched categories:', json.data);

 return  {
    categories: json.data
  };
   
}
