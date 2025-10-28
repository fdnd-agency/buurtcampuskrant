export async function load() {
    const resCategories  = await fetch ('https://fdnd-agency.directus.app/items/buurtcampuskrant_categories');
    // ('https://fdnd-agency.directus.app/items/buurtcampuskrant_categories?fields=*,buurtcampuskrant_stories_buurtcampuskrant_categories.buurtcampuskrant_stories_id.*');
    const categorieJson = await resCategories.json();
    const categories = categorieJson.data;

    console.log('categories:', categorieJson.data);

    const resStories = await fetch('https://fdnd-agency.directus.app/items/buurtcampuskrant_stories?fields=*,categories.id');
    const storiesJson = await resStories.json();
    const stories = storiesJson.data;

    categories.forEach(cat => {
      cat.stories = stories.filter(story =>
        story.categories.some(c => c.id === cat.id)
      );
    });

 return  {
    categories,  
    stories
  };
   
}
