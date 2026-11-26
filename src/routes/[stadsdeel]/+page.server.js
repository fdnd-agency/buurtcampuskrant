// src/routes/[stadsdeel]/+page.server.js
import { error } from "@sveltejs/kit";
import { DISTRICTS } from "$lib/districts";

const BASE_URL = "https://fdnd-agency.directus.app/items";

export async function load({ params, fetch }) {
  const district = DISTRICTS.find((d) => d.slug === params.stadsdeel);
  if (!district) error(404, "Stadsdeel niet gevonden.");

  const res = await fetch(
    `${BASE_URL}/buurtcampuskrant_stories?filter[district][_eq]=${district.slug}&filter[status][_eq]=published&sort=sort`
  );

  if (!res.ok) error(500, "Kon de artikelen niet ophalen.");

  const { data } = await res.json();
  return { stories: data, district };
}