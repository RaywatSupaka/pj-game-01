# Localization — Thai and English

Status: initial languages confirmed; behavior proposed pending discovery
Source: user's request, 2026-09-15; [discovery](../../discovery/0002-localization.md)
Updated: 2026-09-15

Prepare multilingual support from the foundation, starting with Thai (`th`) and English (`en`).
The exact text coverage, initial language selection and voice scope are being clarified.
i18n means preparing code and UI for multiple languages; localization supplies the actual translated text and assets.
Keep language concerns in presentation/content so switching language does not change battle rules or saved entity IDs.

Proposed implementation candidate: Unity Localization string tables, pending package compatibility verification and editor availability.
Unity documents localized strings, locale selection and fallback capabilities in its [Localization manual](https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/index.html).
This documents a candidate, not a tested implementation or package version selection.
