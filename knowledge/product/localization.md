# Localization — Thai and English

Status: accepted scope; foundation catalogs checked; runtime not implemented
Source: user's request, 2026-09-15; [discovery](../../discovery/0002-localization.md)
Updated: 2026-09-15

Prepare multilingual support from the foundation, starting with Thai (`th`) and English (`en`).
Confirmed: all player-facing text including names; device language initially with English fallback; Settings override persisted locally; text only, no voice.
See [rules](../../rules/localization.md) and [plan](../../plans/0002-localization-foundation.md).
Initial canonical catalogs are content/localization/en.json and th.json. Unit/item names will be added when that content is designed.
i18n means preparing code and UI for multiple languages; localization supplies the actual translated text and assets.
Keep language concerns in presentation/content so switching language does not change battle rules or saved entity IDs.

Proposed implementation candidate: Unity Localization string tables, pending package compatibility verification and editor availability.
Unity documents localized strings, locale selection and fallback capabilities in its [Localization manual](https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/index.html).
This documents a candidate, not a tested implementation or package version selection.
