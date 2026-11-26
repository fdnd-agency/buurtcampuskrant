// src/routes/+page.server.js
import { error } from "@sveltejs/kit";
import { DISTRICTS } from "$lib/districts";

const BASE_URL = "https://fdnd-agency.directus.app/items";

export async function load({ fetch }) {
  const res = await fetch(
    `${BASE_URL}/buurtcampuskrant_stories?filter[status][_eq]=published&sort=sort`
  );

  if (!res.ok) error(500, "Kon de artikelen niet ophalen.");

  const { data } = await res.json();
  return { stories: data, districts: DISTRICTS };
}