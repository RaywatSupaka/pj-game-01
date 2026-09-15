# ADR 0002 — Roster and trait synergies replace attack/defense

Status: accepted direction and prototype mechanics
Source: user's direct design change, 2026-09-15
Updated: 2026-09-15

Remove the alternating attack/defense mechanic from the current design.
The new direction centers on rolling for characters, combining fantasy races/traits, positioning units and placing objects in an auto-battle.
TFT is a reference for team-building; it does not automatically select TFT's economy, lobby format, timers, unit pool or upgrade rules.
Prototype uses four races: Human, Orc, Elf and Dwarf, with 8 units and Race + Class tags. Demons and other races are post-prototype content.

## Effect on existing material

- Defense-first prototype, base/core objectives, siege roles and dual-purpose attack/defense equipment are superseded proposals.
- Object placement remains in scope as a direction; objects are not assumed to be walls/towers or path blockers.
- Unity/C#/URP, Windows/Android and Thai/English decisions remain unchanged.
- Existing untimed preparation, run structure and async intentions are not replaced by an inferred synchronous lobby; confirm their fit in discovery.
- Preserve the original design document as historical reference. Follow current vision and this decision when they conflict.

## Accepted prototype mechanics

Independent run, untimed prepare and Ready remain. The shop uses five slots and a gold roll; duplicate characters combine into star upgrades.
Use a grid with four-direction movement, deterministic targeting and passive abilities. Start with six to eight field units, eight bench slots and separate support-object slots.
Objects provide positional buffs only in the first prototype. Player HP is reduced on defeat; zero HP ends the run. No permanent power progression yet.
Each Run includes Augments, Events and Race Pair Synergies. At three milestones, select one Augment from three options; prototype content is six Augments, six Events, three positive pair synergies and one conditional Rivalry pair. Events are visible, seeded and last for the Run or 1–3 rounds.

## Open questions after prototype

Trait model (race only or race plus class), object behavior/capacity, run format, shop economy, duplicate upgrades and concrete prototype scope.
