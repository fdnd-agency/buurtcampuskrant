// src/routes/[stadsdeel]/[id]/+page.server.js
import { error } from "@sveltejs/kit";

const BASE_URL = "https://fdnd-agency.directus.app/items";

export async function load({ params, fetch }) {
  const query = new URLSearchParams({
    "filter[slug][_eq]": params.slug,
    "filter[district][_eq]": params.stadsdeel,
    "filter[status][_eq]": "published",
    limit: "1",
  });

  const res = await fetch(
    `${BASE_URL}/buurtcampuskrant_stories?${query}`
  );

  if (!res.ok) error(500, "Kon het artikel niet ophalen.");

  const { data } = await res.json();

  if (!data.length) error(404, "Artikel niet gevonden.");

  return { story: data[0] };
}