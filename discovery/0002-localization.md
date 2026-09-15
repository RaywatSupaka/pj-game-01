# Discovery 0002 — Thai and English

Status: ready for foundation; user answered scope questions
Source: user's request to support multiple languages, starting with Thai and English

## Confirmed

- Initial languages: Thai and English.
- Existing foundation: solo developer, Unity 6 / C# / URP, Windows and Android.

## User answers

- Translate all text, including unit/item names.
- Follow device language initially; unsupported language uses English.
- Text only; no localized voice. Settings switching and persistence included in the answered question.

## Questions asked

1. Translate all player-facing text including unit/item names, or keep those names in English?
2. Initial locale: follow device language with English fallback, show a language chooser, or default to Thai?
3. Text-only foundation, or include localized voice requirements?

## Proposed defaults (not confirmed)

- Separate stable text keys from translations; keep translated display names out of simulation IDs/save data.
- Allow changing language in Settings and persist the choice locally.
- Ship both languages for offline use; fall back to English for missing Thai entries while reporting missing translations in dev checks.
- Format whole sentences with parameters, not fragments joined in code.
- Verify Thai glyphs, combining marks, wrapping and UI sizing on Windows and Android.

## Acceptance candidates

- Switching language updates visible text without resetting a run.
- Restart preserves the selected language.
- Both locales work offline; missing translations cannot silently produce blank essential UI.
- Text keys and parameter names match; Thai text is readable without clipping on target devices.

## Readiness

Scope/initial locale/voice questions are answered. Foundation plan is recorded; Unity runtime work remains dependent on editor installation.
Font selection, package pinning and precise UI integration belong to that plan; no package added in discovery.
