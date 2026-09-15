# Local environment

Status: observed, Unity selected; installation pending
Source: local command inspection on Windows; repository scripts
Updated: 2026-09-15

- Git ใช้งานได้; Node v22.3.0 พบใน PATH
- ไม่พบ dotnet และ gh ใน PATH; ไม่พบ editor ที่ C:/Program Files/Unity/Hub/Editor
- python ที่พบเป็น WindowsApps alias ไม่ใช่หลักฐานว่ามี runtime ที่ใช้งานได้
- Remote repo ว่างขณะ bootstrap

## Repository development

```powershell
git clone https://github.com/RaywatSupaka/pj-game-01.git
cd pj-game-01
git switch develop
node tools/doctor.mjs
npm run check
```

Foundation ใช้ Node 22 ขึ้นไปและไม่มี npm dependencies; ไม่ต้อง npm install
Doctor ตรวจเครื่องมือ ส่วน check ตรวจ local Markdown links และ knowledge index coverage
Game editor/build/playtest ยังรอการติดตั้ง ไม่ใช่ playable prototype; ผู้ใช้เลือก Unity 6 + C# + URP แล้ว
Scaffold pin เวอร์ชันแล้ว; ขั้นต่อไปเปิด editor → resolve packages/configure URP → รัน empty scene/build → บันทึกผลจริง ดู unity-setup.md
