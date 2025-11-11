export async function load() {

    const district = "east";
  
    const [categoriesRes, storiesRes] = await Promise.all([
      fetch("https://fdnd-agency.directus.app/items/buurtcampuskrant_categories"),
      fetch(
  `https://fdnd-agency.directus.app/items/buurtcampuskrant_stories?filter[district][_eq]=${district}&fields=*,categories.id`
      ),
    ]);
  
    const categoriesData = await categoriesRes.json();
    const storiesData = await storiesRes.json();
  
    const categories = categoriesData.data || [];
    const stories = storiesData.data || [];
  
      categories.forEach(cat => {
        cat.stories = stories.filter(story =>
          story.categories.some(c => c.id === cat.id)
        );
      });
  
    //   console.log("categories:", categoriesData);
    //   console.log("stories:", storiesData);
  
      return {
        categories,
      
      };
  
  
     
  }