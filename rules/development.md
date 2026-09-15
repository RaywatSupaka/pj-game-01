# Development rules

- สร้าง env จากเครื่องมือที่เลือกและตรวจพบจริง ห้ามอ้างว่า editor/build พร้อมเมื่อยังไม่ได้รัน
- Engine/package version ต้อง pin เมื่อเลือก stack แล้ว ห้ามใช้ latest ลอย ๆ
- แยก simulation, content data, presentation และ online adapters; ไม่มี balance values ใน presentation
- Gameplay, seed behavior, replay compatibility และ server authority ต้องผ่าน discovery ก่อนกำหนด contract
- ห้าม commit credentials, .env, cache, build outputs หรือ paid assets ที่ไม่มีสิทธิ์
- เพิ่ม `.env.example` เฉพาะตัวแปรที่ใช้งานจริง พร้อม placeholder ไม่มี secret
- เลื่อน backend infrastructure จน scope ยืนยันว่าต้องใช้ ไม่สร้างบริการเปล่าที่ไม่มี consumer
- Asset ใหญ่ใช้ Git LFS เมื่อเริ่มเพิ่ม binary assets และตรวจ LFS บนเครื่อง/remote ก่อน commit
- งาน foundation ใช้ Node เพื่อเช็ค repo เท่านั้น ไม่ใช่การเลือก game engine หรือ backend runtime
