export async function load({url, params, fetch }) {

    const district = params.slug; 
    
    let filter = `&sort=-date&filter={"district":{"_eq":"${district}"}}`;

    if (url.searchParams.get('filter')) {
        filter = `&sort=-date&filter={"district":{"_eq":"${district}"},"categories": {"buurtcampuskrant_categories_id": {"title": { "_eq": "${url.searchParams.get('filter')}" }}}}`;
    }

    const res = await fetch(`https://fdnd-agency.directus.app/items/buurtcampuskrant_stories/?fields=title,id,intro,cover,district,categories.buurtcampuskrant_categories_id.*${filter}`);
    const data = await res.json();

    return { data: data.data, district };
}

