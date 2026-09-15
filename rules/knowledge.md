# Lookup and research

ลำดับบังคับ: rules → index → knowledge ที่เกี่ยวข้อง → research เฉพาะข้อมูลที่ขาด/ล้าสมัย/ขัดแย้ง
ข้อมูลเวอร์ชัน API และข้อกำหนด platform ต้องตรวจ primary source ล่าสุดก่อนนำไปใช้จริง
หากหาไม่พบ ให้บันทึกหัวข้อและคำค้นที่ตรวจแล้ว ห้ามอ้างว่ามีข้อมูลโดยไม่ได้อ่าน

## หนึ่งเรื่องต่อไฟล์

เก็บ `knowledge/<category>/<topic>.md` และลงทะเบียนใน root index ทุกไฟล์
ประเภทเริ่มต้น: product, architecture, development, decisions, research, sources
แต่ละไฟล์ต้องมี Status, Source, Updated และเนื้อหาที่แยกข้อเท็จจริง/ข้อเสนอ/คำถามค้าง
research ใช้ [template](../templates/knowledge.md): คำถาม แหล่ง URL วันที่ตรวจ ข้อค้นพบ ข้อจำกัด และผลต่อโปรเจกต์
แตกหลายหัวข้อเป็นหลายไฟล์ ห้ามรวมทุกอย่างใน research.md ก้อนเดียว
แก้ไฟล์กับ index ใน commit เดียวกัน ใช้ relative links และรัน `npm run check`
เก็บเอกสารต้นฉบับใน sources พร้อม label reference-only; การยอมรับข้อเสนอให้บันทึก decision แยก
