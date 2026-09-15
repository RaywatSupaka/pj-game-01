# Plan 0002 — Localization foundation

Status: documentation and catalog tooling complete; Unity runtime integration pending editor
Discovery: [confirmed scope](../discovery/0002-localization.md)
Knowledge: [localization](../knowledge/product/localization.md)
Branch: codex/chore/project-foundation — continuation of the existing foundation scope

## Objective

Support Thai and English for all future player-facing text, including unit/item names.
Use device language initially, falling back to English; persist explicit selection; no voice localization.

## Tasks and checks

1. Record decisions and localization rules.
2. Create canonical UTF-8 catalogs with stable keys and representative parameterized text.
3. Add dependency-free checks for matching keys, nonempty values and matching parameters; run in existing CI.
4. Validate checker with missing key and mismatched parameter fixtures in memory.
5. Later, with Unity installed: select/pin Localization package, import catalogs into String Tables, wire locale selection and Settings, choose licensed Thai-capable font and verify both builds.

## Boundaries / non-goals

Catalogs are source data for future Unity import, not a runtime localization implementation.
No gameplay, voice files, font downloads or invented translations for nonexistent content.
Unity-generated tables must derive from these catalogs; do not maintain two independent translation sources.

## Risks / rollback

Thai font shaping/wrapping requires actual visual testing; a successful catalog check does not verify it.
Revert these foundation additions to remove the data/checks; no save data or runtime behavior changes.

## Results

Repository link/index checks passed. Both catalogs have 9 matching keys; parameter and negative-fixture checks passed.
Unity runtime integration and visual testing remain pending; no claim of in-game language switching yet.
