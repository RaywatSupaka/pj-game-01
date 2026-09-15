# Unity Windows / Android setup research

Status: verified documentation; local builds unverified
Source: [Unity LTS support](https://unity.com/releases/unity-6/support), [URP manual](https://docs.unity3d.com/6000.3/Documentation/Manual/urp/urp-introduction.html), [Android setup](https://docs.unity3d.com/6000.3/Documentation/Manual/android-sdksetup.html)
Updated: 2026-09-15

Question: Can the selected Unity + URP foundation target both Windows and Android?
Existing knowledge: the supplied design proposed both platforms but did not specify editor setup or installed modules.
Findings: Unity's 6.3 documentation describes URP across mobile and PC. Android development needs Android Build Support, SDK, NDK and JDK.
Implication: maintain one client project, separate build profiles and test both platforms. Install the Android dependencies matched to the editor through Hub.
Limitations: documentation support does not establish performance or successful compilation on this machine; those need editor/device checks.
