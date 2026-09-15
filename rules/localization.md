# Localization rules

Initial locales: `th`, `en`. All player-facing text, including unit and item names, must be localized.
No localized voice in the initial scope.

- First launch: match the device language, including th-TH → th and en-US/en-GB → en; unsupported language → en.
- Explicit selection in Settings takes precedence over device language and persists locally across restarts.
- Switching language must not restart a run or modify simulation state.
- Both catalogs ship for offline use. Missing Thai text falls back to English; dev/CI reports missing translations as errors.
- Use stable keys such as `ui.ready`; never use translated names as entity IDs or save keys.
- Keep full sentences together; named parameters such as `{amount}` must match across languages.
- Canonical catalog files live in content/localization. Unity String Tables will be generated/imported from them during editor integration.
- Avoid hard-coded player-facing strings in scripts, prefabs and scenes; technical debug messages are exempt.
- Before a playable release: verify Thai vowels/tone marks, wrapping, clipping, long English labels and device-sized UI on Windows and Android.
- Verify font redistribution rights and coverage before adding fonts. Locale switching must refresh text and number formatting.

Run `npm run check` before committing catalog edits. Catalog validation does not replace visual/runtime tests.
