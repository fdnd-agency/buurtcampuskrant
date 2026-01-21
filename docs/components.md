## Components
Components are various elements that appear frequently on multiple pages. Below are components that we have used. 

* [Header.svelte:](https://github.com/fdnd-agency/buurtcampuskrant/blob/dev/src/lib/components/organisms/Header.svelte) This component contains de header with the responsive navigation. It is also progressive enhanced, which means that it'll still work without JS and CSS. 
* [Article.svelte:](https://github.com/fdnd-agency/buurtcampuskrant/blob/dev/src/lib/components/molecules/Article.svelte) This component is a brief overview of the new item and links to its detail page where you can read all about the article in an expanded version.
* [AccessibilityMenu.svelte:](https://github.com/fdnd-agency/buurtcampuskrant/blob/dev/src/lib/components/molecules/AccessibilityMenu.svelte) This component is full of support of the accessibility aspects. We've added the dark and light mode here. There's also an option for people that struggle with dyslexia that they can use the font that is easier to read for them.
* [Fullarticle.menu:](https://github.com/fdnd-agency/buurtcampuskrant/blob/dev/src/lib/components/molecules/FullArticle.svelte) This component shows the detailed/expanded version of the little article component. 
* [Footer.svelte:](https://github.com/fdnd-agency/buurtcampuskrant/blob/dev/src/lib/components/organisms/Footer.svelte) This component contains a newsletter, links to socials and a navigation. This will also take place on every page.  
* [Newsletter.svelte:](https://github.com/fdnd-agency/buurtcampuskrant/blob/dev/src/lib/components/atoms/Newsletter.svelte) The newsletter will be implemented in the footer. It goes without saying, but this is where people can subscribe to the newsletter.
* [FilterButtons.svelte:](https://github.com/fdnd-agency/buurtcampuskrant/blob/dev/src/lib/components/atoms/FilterButtons.svelte) The various filtering buttons on each district page are built into a component. These are loaded on the district page and then linked to the corresponding articles.
* [Progressbar.svelte:](https://github.com/fdnd-agency/buurtcampuskrant/blob/dev/src/lib/components/atoms/ProgressBar.svelte) The progressbar is shown at the top of each full article. It shows u when u start scrolling how far you'll have to read to reach the end of the article. 

Finally, the images of the logos have also been placed in components. This is because they are reused very often. 

