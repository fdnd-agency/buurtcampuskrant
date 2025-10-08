# Buurtcampuskrant



## Componenten

### **Filter-component (`Filter.svelte`)**
- **Doel:** gebruikers kunnen artikelen filteren op rubriek.
- **Ontwerpkeuze:** gebruik van lokale state `rubriek` om filters eenvoudig te beheren zonder de originele data aan te passen.
- **UX-keuze:** “Alle”-knop laat het filter resetten zodat alle artikelen zichtbaar zijn.
 
### **Quote-component (`Quote.svelte`)**
- **Doel:** herbruikbare component voor het tonen van quotes.
- **Voordeel:** consistente styling en eenvoudiger onderhoud.

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
