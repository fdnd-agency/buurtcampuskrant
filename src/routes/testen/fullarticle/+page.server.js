export async function load() {
    const res = await fetch('https://fdnd-agency.directus.app/items/buurtcampuskrant_stories/?fields=title,id,date,body,side_title,intro,cover,district,categories.buurtcampuskrant_categories_id.title&sort=-date&filter={"date":{"_nnull":"true"}}');
    const data = await res.json();

    return { article: data.data };
}