# Idea → Grill → Plan → Build → Verify

## 1. Intake / grill me

ตรวจ rules → index → knowledge ก่อน ถามเฉพาะช่องว่างที่ยังไม่มีคำตอบ และถามต่อเมื่อคำตอบขัดกัน
ใช้ [discovery template](../templates/discovery.md) บันทึกคำตอบ ข้อเสนอ สมมติฐาน และคำถามค้างแยกกัน
ถามครั้งละ 3–5 ประเด็นที่มีผลต่อการตัดสินใจสูง ไม่ทิ้งแบบสอบถามยาวทั้งหมดในคราวเดียว

ให้ครอบคลุม:
- ปัญหา ผู้เล่นเป้าหมาย และเหตุผลที่ต้องเพิ่มระบบนี้
- ประสบการณ์หลัก: ผู้เล่นทำอะไร เห็นอะไร และตัดสินใจอะไร
- in/out scope, milestone, deadline, ทีม และทรัพยากร
- input/output, state transitions, win/lose, failure/retry และ edge cases
- platform, performance, offline/network, save/version compatibility ตามความเกี่ยวข้อง
- dependencies, ทางเลือก, ความเสี่ยง และ tradeoffs
- acceptance criteria ที่ตรวจได้ และวิธี playtest

เกณฑ์ผ่าน: ไม่มีคำถามค้างที่เปลี่ยน scope/architecture/acceptance; เรื่องไม่เกี่ยวข้องระบุ N/A พร้อมเหตุผล
สรุปคำตอบให้ผู้ใช้เห็นก่อนทำ plan ไม่ต้องขออนุมัติซ้ำถ้าผู้ใช้ตอบและให้อำนาจดำเนินงานแล้ว
ถ้ามี blocker ให้หยุดเฉพาะส่วนที่ขึ้นกับคำตอบและเดินงานอิสระต่อ

## 2. Plan

ใช้ [plan template](../templates/plan.md): objective, acceptance, non-goals, file impacts, dependencies, task order, checks, risks และ rollback
อ้าง discovery และ knowledge ที่ใช้ แยก proposal ออกจาก accepted decision

## 3. Build / verify / deliver

แตก branch ก่อนแก้ไฟล์ ทำทีละหน่วยงาน เก็บ plan ให้ตรงสถานะจริง
รัน checks ตามความเสี่ยง: docs ตรวจ links/index; logic ตรวจ behavior; game ตรวจ playtest และ platform ที่ได้รับผลกระทบ
สรุปสิ่งที่เปลี่ยน วิธีตรวจ ผล และข้อจำกัดที่ยังค้าง อัปเดต index/knowledge/decision ที่เกี่ยวข้องพร้อมโค้ด
