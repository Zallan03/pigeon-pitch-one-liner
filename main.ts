import { mkdirSync, writeFileSync } from "node:fs";

// Pigeon Pitch, One Line — 182 characters.
// Deterministic: a single string literal, no network, no randomness,
// no reads from outside the repository.
const ENTRY =
  "Investors, I present Coo-ber: the world's first rideshare for pigeons, by pigeons — no drivers, no surge pricing, infinite bread, and a 4.9-star rating from every statue in the city.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
