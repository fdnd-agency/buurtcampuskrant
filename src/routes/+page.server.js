export async function load() {
    const res = await fetch('https://fdnd-agency.directus.app/items/buurtcampuskrant_stories');
    const data = await res.json();

    console.log('data', data);
    return { article: data.data };
}