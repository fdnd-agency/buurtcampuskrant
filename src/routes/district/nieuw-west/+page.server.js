export async function load({url}) {
    let filter = '&sort=-date&filter={"district":{"_eq":"new-west"}}';

    if (url.searchParams.get('filter')) {
        filter = `&sort=-date&filter={"district":{"_eq":"new-west"},"categories": {"buurtcampuskrant_categories_id": {"title": { "_eq": "${url.searchParams.get('filter')}" }}}}`;
    }
    
    const res = await fetch(`https://fdnd-agency.directus.app/items/buurtcampuskrant_stories/?fields=title,intro,district,categories.buurtcampuskrant_categories_id.*${filter}`);
    const data = await res.json();
    
    return { data: data.data };
}