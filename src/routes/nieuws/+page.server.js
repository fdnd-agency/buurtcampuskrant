export async function load({ params }) {
    
    const res = await fetch(`https://fdnd-agency.directus.app/items/buurtcampuskrant_stories/${params.slug}`);
    const { data: article } = await res.json();
    
    return { article }; 
}