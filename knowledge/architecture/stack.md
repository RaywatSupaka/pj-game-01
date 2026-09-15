# Stack and boundaries

Status: accepted engine and platforms; backend remains proposed
Source: [เอกสารผู้ใช้ฉบับเก็บถาวร](../sources/archive-original-game-design.md), sections 25–34, 47
Updated: 2026-09-15

ข้อเสนอในเอกสาร: Unity 6 / C# / URP; Nakama + PostgreSQL ภายหลัง; Redis ยังไม่จำเป็น
ผู้ใช้เลือก Unity 6 + C# + URP, ทำคนเดียว, foundation only และรองรับ Windows/Android; scaffold pin editor 6000.3.24f1 + URP 17.3.0 ส่วน backend ยังไม่เลือก
ขอบเขตเตรียมไว้: client/ สำหรับ presentation และ integration, simulation/ สำหรับ battle rules,
content/ สำหรับ balance data, server/ สำหรับ online ภายหลัง, tools/ สำหรับ developer tooling
หากเลือก Unity ให้ simulation เป็น pure C# โดยไม่ขึ้นกับ UnityEngine แล้วนำเข้า client ผ่าน package ที่เหมาะสม
ต้องวิจัย compatibility จาก official docs เมื่อเลือก engine/version ไม่ถือว่าข้อเสนอเวอร์ชันในเอกสารเป็นข้อมูลปัจจุบันที่ตรวจแล้ว
