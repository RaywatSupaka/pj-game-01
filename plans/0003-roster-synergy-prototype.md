# Plan 0003 — Roster synergy prototype

Status: ready for implementation after Unity editor is available
Discovery: [answered roster discovery](../discovery/0003-roster-synergy.md)
Decisions: [roster direction](../knowledge/decisions/0002-roster-synergy-direction.md)
Branch: `codex/feature/roster-synergy-prototype` from `develop`

## Objective

Prove that the loop `shop/roll → buy/merge → arrange roster and support objects → Ready → auto-battle → reward → next prepare` is fun and understandable without attack/defense switching.

## Prototype scope

- Offline single-player Run with untimed Prepare and explicit Ready.
- One grid board, 4 races (Human, Orc, Elf, Dwarf), 3 classes, 8 units, and 3 positional support objects.
- Five shop slots, gold and roll action, bench of 8, field capacity 6–8.
- Duplicate units merge into a star upgrade; race traits count unique characters.
- Six Augments and six Events; at three milestones choose one Augment from three options. Include three positive Race Pair Synergies and one conditional Rivalry pair.
- Four-direction movement, passive abilities, deterministic target selection and seeded simulation.
- Player HP loss on defeat; Run ends at zero HP. No PvP, co-op, backend, voice or permanent power progression.

## Acceptance criteria

1. A new player can buy, place and Ready without instructions beyond visible UI labels.
2. A battle reaches a clear win/defeat result and shows why the result happened.
3. A player can identify at least one meaningful choice between rolling, buying, merging, positioning and adding an object.
4. Repeating the same build, opponent setup and seed produces the same simulation result.
5. After a defeat, the player can explain one change they want to try next.
6. The full slice is playable offline on Windows and Android; Thai/English strings use the existing localization rules.
7. Augments and Events visibly change available choices or outcomes, and their effects appear in the battle summary.

## Ordered work

1. Create Unity scene/bootstrap and localization integration after editor installation.
2. Implement pure simulation contracts: grid, units, traits, targeting, movement, combat events and seed.
3. Add content data for the limited roster, shop/roll, merge and object buffs.
4. Add presentation for Prepare, Shop, Bench, Board, Ready, Battle and Result.
5. Add save checkpoints and deterministic rerun for the current Run.
6. Add seeded Augment/Event selection and Run modifier display.
7. Playtest Windows and Android; record observations and tune data without changing contracts casually.

## Risks / rollback

Four races are acceptable for variety, but too many units or objects can hide the core choice; keep content data small and use two units per race initially.
If deterministic reruns diverge, block online/replay work and fix simulation ordering first.
Revert the feature branch commits to remove the prototype; foundation and archived design remain intact.
