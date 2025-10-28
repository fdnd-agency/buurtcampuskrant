export async function load() {
    const res = await fetch('https://fdnd-agency.directus.app/items/buurtcampuskrant_stories/?sort=-date&filter={"date":{"_nnull":"true"}}');
    const data = await res.json();

    return { article: data.data };
}
