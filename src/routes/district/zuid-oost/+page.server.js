export async function load() {

  const district = "south-east";

  const [categoriesRes, storiesRes] = await Promise.all([
    fetch("https://fdnd-agency.directus.app/items/buurtcampuskrant_categories"),
    fetch(
      `https://fdnd-agency.directus.app/items/buurtcampuskrant_stories?filter[district][_eq]=${district}&fields=*,categories.id`
    ),
  ]);

    // categories.forEach(cat => {
    //   cat.stories = stories.filter(story =>
    //     story.categories.some(c => c.id === cat.id)
    //   );
    // });

    const categoriesData = await categoriesRes.json();
    const storiesData = await storiesRes.json();

    // console.log("categories:", categoriesData);
    // console.log("stories:", storiesData);

    return {
      categories: categoriesData.data || [],
      stories: storiesData.data || [],
    };


   
}
