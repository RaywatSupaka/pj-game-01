# Unity setup — Windows and Android

Status: scaffold prepared; editor import and builds not verified
Source: [Unity release](https://unity.com/releases/editor/whats-new/6000.3.24f1), [URP](https://docs.unity3d.com/6000.3/Documentation/Manual/urp/urp-introduction.html), [Android setup](https://docs.unity3d.com/6000.3/Documentation/Manual/android-sdksetup.html)
Updated: 2026-09-15

## Pinned scaffold

Unity 6000.3.24f1 (6.3 LTS) and URP 17.3.0. This is a reproducible starting choice, not a claim that it is the newest patch.
`client/` contains ProjectVersion, package manifest and presentation assembly boundary.
`simulation/` is a local UPM package with noEngineReferences, preventing UnityEngine dependencies.
There are no gameplay scripts or scenes yet. Package resolution and generated settings must be verified in the editor.

## Complete installation and first import

1. Install Unity Hub from the official Unity site; sign in and activate the applicable license with the user's account.
2. Install the pinned editor through its release page / Hub, plus Android Build Support, Android SDK & NDK Tools and OpenJDK.
3. Add the repository's `client` folder as an existing project in Hub and open it.
4. Allow package resolution, confirm there are no Console errors and commit the generated Packages/packages-lock.json and ProjectSettings.
5. Create a URP Pipeline Asset with Universal Renderer; assign it in Graphics and relevant Quality settings. Installing the package alone does not enable URP.
6. Create an empty Bootstrap scene with camera/light. Save it under Assets/Game/Scenes and add it to Build Profiles.
7. Set Asset Serialization to Force Text and version control metadata to Visible Meta Files; commit all project asset .meta files.
8. Create Windows x86_64 and Android build profiles. Use Hub-provided Android tools; verify their paths in External Tools.
9. Build/run the empty scene on Windows and a physical Android device; record actual editor, device/OS and results here.

These steps requiring the editor have not run on the current machine: no Hub/editor was found.

## Cross-platform policy

- One game project and shared simulation; platform adapters only where needed.
- Gameplay must support pointer/touch actions; avoid mouse-hover-only functionality.
- Establish Android baseline device, orientation, UI safe areas and frame-rate target during gameplay discovery.
- Verify Windows and Android at each playable milestone; desktop performance does not prove mobile performance.
- Keep signing keystores and passwords outside Git. Store build outputs in ignored Builds directories.
