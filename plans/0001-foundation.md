# Plan 0001 — Repository foundation

Status: repository foundation verified; Unity editor import/build pending installation
Source: [discovery](../discovery/0001-foundation.md), [workflow decision](../knowledge/decisions/0001-workflow.md)

## Objective / acceptance

- มี rules → index → categorized knowledge ที่ links ใช้ได้และทุก knowledge file ถูก index
- มี main/develop และ branch งานตาม Git flow
- มี templates สำหรับ discovery, plan, research และ PR
- มี local checks และ CI ใช้คำสั่งเดียวกัน
- บันทึกข้อจำกัดเครื่องมือและสิ่งที่ต้องถามต่ออย่างตรงไปตรงมา

## Order

1. ตรวจ repo/เอกสาร/เครื่องมือ และเริ่ม discovery
2. สร้าง branch foundation และโครงสร้างเอกสาร
3. สร้าง tooling/CI และ placeholders สำหรับ source boundaries
4. ตรวจ links/index, doctor และ diff; commit/push branch สำหรับ review
5. Engine ยืนยันแล้ว: จัด scaffold และ setup guide; import/build รอ Unity ติดตั้ง

## Non-goals

ยังไม่มี gameplay, balance, backend service หรือ release build ที่ถือว่าอนุมัติจากเอกสารแนบ

## Risks / rollback

Unity 6 + C# + URP ยืนยันแล้ว; scaffold ยังไม่ผ่าน editor import
Remote protection ไม่ถูกตั้งด้วยการเขียน rules: ต้องตรวจ/ตั้งแยก
Rollback foundation ด้วย revert commit; ไม่ rewrite shared branch


## Verification evidence

`npm run check` passed (26 Markdown files); `npm run doctor` confirmed Git and Node.
Unity Hub/editor not found; Unity compilation, package resolution, URP assets and Windows/Android build checks remain pending.
GitHub branch protection has not been configured; CI execution is not claimed by local checks.
