# Discovery 0003 — Roster synergy auto-battler

Status: answered; gameplay implementation follows the plan below
Source: user's change from attack/defense to race-based roster building

## Confirmed direction

Remove alternating attack/defense. Roll for characters, combine races/traits, position units and place objects.

## User answers

- Keep independent Run, untimed Prepare and Ready.
- Use Race + Class.
- Start with support objects that provide positional buffs; do not add attack/blocking objects in the first prototype.

## Accepted prototype decisions

- Race + Class; count unique characters for trait thresholds.
- Three races, 6–9 units, support objects only.
- Duplicate characters combine into star upgrades.
- Shop has 5 slots; roll costs gold; begin with a simple shared pool.
- Board uses a grid, 4-direction movement, deterministic targeting and passive abilities only.
- Roster capacity starts at 6–8 field units, bench at 8, objects use separate slots.
- Run uses player HP; defeat removes HP and the Run ends at zero. No permanent power progression in the first prototype.

## Plan follow-up

Detailed implementation and measurable acceptance criteria are in [plan 0003](../plans/0003-roster-synergy-prototype.md).
Save/resume, exact economy numbers, battle duration and balance remain tunable parameters, not reasons to expand prototype scope.
