# CMS Configuration — Directus

This project uses **Directus** as a headless CMS to manage all content for the Buurtcampuskrant.

## Content Types
The CMS is built around collections such as:
- **Articles** – newspaper articles with title, content, image, publish date and relations.
- **Categories / Neighbourhoods** – used to group and filter articles.

Relations (one-to-many / many-to-many) are used to connect articles to categories and authors.

## CMS Setup
- Collections and fields are configured in the Directus admin panel.
- Validation and required fields are defined per collection.
- Roles and permissions ensure only published content is publicly accessible.
- Images are managed via Directus’ media library.

## Front-End Connection
The SvelteKit front-end fetches content from Directus using its **REST API**.
Environment variables store the API URL and credentials.
Fetched data is rendered in Svelte components such as article lists and detail pages.

## Summary
Directus is used to manage structured content, while the front-end consumes this data via an API, keeping content and presentation clearly separated.