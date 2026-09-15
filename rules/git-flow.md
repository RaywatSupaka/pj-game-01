# Git flow

## Branches

- `main`: release ที่ผ่านการตรวจ
- `develop`: integration สำหรับ milestone ถัดไป
- `codex/feature/<topic>`: feature จาก develop → PR เข้า develop
- `codex/fix/<topic>`: bug fix จาก develop → PR เข้า develop
- `codex/chore/<topic>`: tooling/docs/env จาก develop → PR เข้า develop
- `codex/release/<version>`: จาก develop → ตรวจ release → PR เข้า main แล้ว sync กลับ develop
- `codex/hotfix/<topic>`: จาก main → PR เข้า main แล้วนำ fix กลับ develop

หนึ่ง branch ต่อหนึ่งงานที่ทบทวนได้ ห้ามลง implementation โดยตรงบน main/develop
ก่อนเริ่มตรวจ `git status --short --branch`, `git remote -v`, fetch และตรวจ base ล่าสุด
ห้ามลบหรือทับงานค้างของผู้ใช้ ห้าม force push, reset --hard หรือ rewrite shared history โดยพลการ

```powershell
git fetch origin
git switch develop
git pull --ff-only origin develop
git switch -c codex/feature/short-topic
# implement and verify
git add <specific-paths>
git commit -m "feat: describe behavior"
git push -u origin codex/feature/short-topic
```

Commit ใช้ feat/fix/chore/docs/test/refactor ตามเนื้องาน PR ใช้ template ของ repo
ตรวจ diff และ secrets ก่อน push; PR ต้องมี objective, verification และข้อจำกัด
เมื่อ merge เสร็จค่อยลบ branch งาน ไม่ merge release ที่ checks ยังไม่ผ่าน

## Empty repository exception

อนุญาต root commit ว่างบน main เพื่อสร้างจุดเริ่ม main/develop จากนั้น foundation ทั้งหมดอยู่บน branch งาน
GitHub branch protection เป็นการตั้งค่าฝั่ง server: ตั้ง PR + required `repository-check` บน main/develop หลัง CI รันครั้งแรก
เอกสารกติกานี้ไม่เท่ากับเปิด protection แล้ว ต้องตรวจสถานะจริงก่อนรายงาน
