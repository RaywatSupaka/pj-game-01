# pj-game-01

Foundation สำหรับโปรเจกต์ async roguelite auto-battler

## เริ่มทำงาน

1. อ่าน [AGENTS.md](AGENTS.md) และ [rules](rules/README.md)
2. เปิด [index](index.md) แล้วอ่าน knowledge ตามงาน
3. ไอเดียใหม่: discovery ให้ครบ → plan → branch งาน → implement → verify → PR

```powershell
node tools/doctor.mjs
npm run check
```

## Structure

| Path | Purpose |
| --- | --- |
| rules/ | กติกาทีมและ Git flow |
| index.md | จุดค้น knowledge |
| knowledge/ | แยกแหล่งข้อมูล แนวคิด สถาปัตยกรรม dev และ decisions |
| discovery/, plans/, templates/ | คำถาม คำตอบ และแผนที่ตรวจสอบได้ |
| client/, simulation/, content/, server/ | ขอบเขต source ที่รอเลือก engine และ scope |
| tools/, .github/ | Repo checks และ CI |

สถานะ: Unity 6 + C# + URP foundation สำหรับ Windows/Android; ยังไม่ได้เปิด editor หรือ verify build ดู [Unity setup](knowledge/development/unity-setup.md)
ดู [environment](knowledge/development/environment.md) และ [foundation plan](plans/0001-foundation.md)
