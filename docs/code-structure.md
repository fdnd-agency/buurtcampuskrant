# How is our code structured?
Since we work with components we have a folder /components. All these components we load into our pages. 

```
buurtcampuskrant/
├── src/
│   ├── lib/
│   │   ├── assets/
│   │   │   ├── fonts/
│   │   │   └── images/
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   ├── molecules/
│   │   │   └── organisms/
│   │   └── index.js
│   └── routes/
│       ├── +page.svelte
│       ├── +layout.svelte
│       ├── +server.js
│       ├── district/
│       │   ├── [slug]/
│       │   └── +layout.svelte
│       └── nieuws/
│           ├── [slug]/
│           └── +layout.svelte
├── docs/
├── static/
├── package.json
└── README.md
```

## 'lib' folder
In the 'lib' folder, you'll find a folder with components. These are categorized by atoms, molecules, and organisms. These depend on the component's size and how it's reused (e.g., in other components).

Also in 'lib' is the 'assets' folder. This folder contains fonts, images, a favicon, and the global.css.

## 'routes' folder
Furthermore, we have the 'routes' folder. This folder contains the +page.svelte, etc., for the homepage.

This folder also contains all other pages. There's the 'district' folder, which contains a '[slug]' representing each district page. It contains the corresponding +page.svelte and +page.serve.js files.

Furthermore, in the 'routes' folder, we have the 'news' folder, which contains a '[slug]' representing each news article. It contains the corresponding +page.svelte and +page.serve.js files.

