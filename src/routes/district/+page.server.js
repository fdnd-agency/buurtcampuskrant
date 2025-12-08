// export async function load() {
//     const allArticles = await fetch('https://fdnd-agency.directus.app/items/buurtcampuskrant_stories/?fields=title,id,date,body,side_title,intro,cover,district,categories.buurtcampuskrant_categories_id.title&sort=-date&filter={"date":{"_nnull":"true"}}');
//     const allArticlesJSON = await res.json();

//     return { allArticles: allArticlesJSON.data };
// }
// export async function load() {
//     const articlesStudenten = await fetch('https://fdnd-agency.directus.app/items/buurtcampuskrant_stories?fields=*,categories.*.*&filter[categories][buurtcampuskrant_categories_id][title][_eq]=studenten');
//     const articlesStudentenJSON = await res.json();

//     return { articlesStudenten: articlesStudentenJSON.data };
// }

// export async function load() {
//     const articlesBewoners = await fetch('https://fdnd-agency.directus.app/items/buurtcampuskrant_stories?fields=*,categories.*.*&filter[categories][buurtcampuskrant_categories_id][title][_eq]=bewoners');
//     const articlesBewonersJSON = await res.json();

//     return { articlesBewoners: articlesBewonersJSON.data };
// }

// export async function load() {
//     const articlesDeWijk = await fetch('https://fdnd-agency.directus.app/items/buurtcampuskrant_stories?fields=*,categories.*.*&filter[categories][buurtcampuskrant_categories_id][title][_eq]=de%20wijk');
//     const articlesDeWijkJSON = await res.json();

//     return { articlesDeWijk: articlesDeWijkJSON.data };
// }

// export async function load() {
//     const articlesWijkpartner = await fetch('https://fdnd-agency.directus.app/items/buurtcampuskrant_stories?fields=*,categories.*.*&filter[categories][buurtcampuskrant_categories_id][title][_eq]=wijkpartner');
//     const articlesWijkpartnerJSON = await res.json();

//     return { articlesWijkpartner: articlesWijkpartnerJSON.data };
// }
