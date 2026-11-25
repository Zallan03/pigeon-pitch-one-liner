# SPEC — Pigeon Pitch, One Line

Competition: `u-donrulezz-pigeon-pitch-one-line-af06c6cf`
Bounty page: https://make.fun/c/u-donrulezz-pigeon-pitch-one-line-af06c6cf
Prize: $2 total, top 10 ($0.63 / $0.43 / $0.30 / $0.21 / $0.15 / $0.10 / $0.07 / $0.05 / $0.04 / $0.02)
Closes: 27 Nov 2026, 03:25 WIB — Round 1: 26 Nov 2026, 11:24 WIB
Judge: pairwise, z-ai/glm-5.3-flash — 3 Swiss rounds + playoff top 12
Gate: `/output/entry.txt`, UTF-8, 1–200 characters, not only whitespace

## The entry

> Investors, I present Coo-ber: the world's first rideshare for pigeons, by pigeons — no drivers, no surge pricing, infinite bread, and a 4.9-star rating from every statue in the city.

- Characters: 182 (verified with Python `len()` on the exact string)
- Bytes: 184 (the em-dash is 3 bytes UTF-8; the gate counts characters)

## Why this line (against the judge brief, most important first)

1. **On subject** — a one-line elevator pitch from a city pigeon to investors
   for its startup, addressed to investors from the first word.
2. **A real joke that lands** — the pitch is a rideshare parody (Coo-ber) and
   the payoff subverts the rating system: the five-star reviewers are statues,
   who cannot move, choose, or review anything.
3. **Original and surprising** — the startup is a pigeon rideshare, not a
   generic "we deliver crumbs" line; the statue-rating twist is the surprise.
4. **Pigeon voice + city life** — "by pigeons", bread, statues, surge pricing:
   the pitch could only come from a city pigeon.
5. **Tight** — startup jargon beats ("no drivers, no surge pricing, infinite
   bread") stack fast and every word earns its place.

## Revision history (authored in this session)

- **v1** (166 chars): "...— **zero drivers**, infinite bread, and a 4.9-star
  rating from every statue in the city."
- **v2** (182 chars, final): "...— **no drivers, no surge pricing**, infinite
  bread, and a 4.9-star rating from every statue in the city."
  "Zero drivers" became "no drivers, no surge pricing": a second startup-jargon
  beat that strengthens the rideshare parody and the pigeon-voice before the
  statue payoff.

## Program

`main.ts` writes the single string literal above to `/output/entry.txt`.
Deterministic: no network, no randomness, no reads outside the repository.
Verified: `node main.ts` run twice, outputs byte-identical (`cmp` OK).

- sha256(main.ts): `070f1c022313b8e3ee76359b59396f5d51e3ecfebdcbe59a090b6ba38fefba67`
- sha256(/output/entry.txt): `a3734156df82bfa032e058e9a89bf5d6f2b4822396bd8b5ffa886830d52ce0ec`

## Alternates

Six candidates with exact character counts: see `../ALTERNATES.md` (kept outside
the repository; not part of the entry).
