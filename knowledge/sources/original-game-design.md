# Game Concept & Development Plan

## Async Roguelite Auto-Battler + Attack/Defense + Co-op

> เอกสารสรุปแนวคิดเกมและแผนพัฒนาเบื้องต้น\
> เป้าหมาย: เกม Strategy/Auto-Battler ที่เล่นได้ทั้ง PC และ Mobile
> โดยประสบการณ์เล่นใกล้เคียงกัน เล่นคนเดียวหรือกับเพื่อนได้ ไม่มีแรงกดดันเรื่องเวลา
> และสามารถเล่นซ้ำเป็น Run ได้เรื่อย ๆ

------------------------------------------------------------------------

# 1. High-Level Concept

เกมเป็นแนว **Run-based Strategy Auto-Battler** ที่ผสมองค์ประกอบจาก:

-   Auto-Battler
-   Roguelite
-   Asynchronous PvP
-   PvE
-   Co-op
-   Tower Defense / Base Defense
-   Attack & Defense Strategy
-   Crafting
-   Economy / Shop
-   Unit Formation

แนวคิดหลักคือ:

**Prepare → Ready → Battle → Reward → Prepare → Battle → ... → Run End**

ผู้เล่นไม่ได้เก็บ Level ตัวละครแบบ MMORPG ไปเรื่อย ๆ แต่จะสร้าง Build ใหม่ภายในแต่ละ
Run

เมื่อ Run ใหม่เริ่มขึ้น ผู้เล่นจะต้องปรับตัวตาม Unit, Item, Material, Shop, Enemy,
Terrain และ Modifier ที่สุ่มมา

------------------------------------------------------------------------

# 2. Design Pillars

## 2.1 เล่นแบบชิล ไม่มี Timer บังคับ

ช่วง Prepare ไม่มีเวลานับถอยหลัง

ผู้เล่นสามารถ:

-   ซื้อของ
-   ขายของ
-   Craft
-   จัด Unit
-   วางกำแพง
-   วางป้อม
-   เปลี่ยน Formation
-   ตรวจ Synergy
-   คุยกับเพื่อน
-   วางแผน Build

เมื่อพร้อมจึงกด **READY**

เป้าหมายคือให้เหมาะกับทั้ง:

-   เล่นยาวบน PC
-   เปิดเล่นสั้น ๆ บนมือถือ
-   เล่นระหว่างเดินทาง
-   เล่นกับเพื่อนผ่าน Voice Chat
-   หยุดแล้วกลับมาเล่น Run เดิมภายหลัง

------------------------------------------------------------------------

## 2.2 PC และ Mobile ต้องไม่ต่างกันด้านความสามารถ

เกมไม่ควรพึ่ง:

-   Aim
-   Reaction Time
-   WASD
-   FPS Control
-   APM สูง

Interaction หลักคือ:

-   Click / Tap
-   Drag & Drop
-   วาง Unit
-   วาง Structure
-   ซื้อ/ขาย
-   Craft
-   เลือก Upgrade
-   กด Ready

ดังนั้น Mouse และ Touch สามารถเล่นด้วยกฎเดียวกันได้

------------------------------------------------------------------------

# 3. Core Game Loop

``` text
START RUN
   ↓
PREPARE
   ├─ Shop
   ├─ Buy
   ├─ Sell
   ├─ Craft
   ├─ Equip
   ├─ Position Units
   ├─ Build Structures
   └─ Choose Strategy
   ↓
READY
   ↓
SELECT / FIND ENCOUNTER
   ↓
BATTLE
   ├─ PvE
   └─ PvP
   ↓
RESULT
   ├─ Win → Reward
   └─ Lose → Lose Life
   ↓
PREPARE
   ↓
...
   ↓
RUN COMPLETE / GAME OVER
```

------------------------------------------------------------------------

# 4. Run System

แต่ละ Run เป็น Session อิสระ

ตัวอย่าง:

``` text
Wins:   6 / 12
Lives:  ❤️❤️❤️
Stage:  8
Gold:   32
```

## Win Condition

ตัวอย่าง:

-   ชนะครบ 12 ครั้ง
-   ฆ่า Final Boss
-   ผ่าน Final Stage

## Lose Condition

ผู้เล่นมี Lives จำกัด เช่น:

``` text
❤️❤️❤️❤️
```

เมื่อแพ้:

``` text
❤️ -1
```

เมื่อ:

``` text
❤️ = 0
```

Run จบ

จำนวน Wins/Lives จริงต้อง Balance จาก Playtest ไม่ควรล็อกตัวเลขตั้งแต่ต้น

------------------------------------------------------------------------

# 5. Prepare / Camp Phase

นี่ควรเป็นหนึ่งในส่วนที่สนุกที่สุดของเกม

ผู้เล่นต้องรู้สึกว่า:

> "ก่อนกด Ready ฉันสามารถเปลี่ยนบางอย่างเพื่อทำให้แผนนี้ดีขึ้นได้"

ระบบในช่วง Prepare:

### Shop

ซื้อ:

-   Units
-   Structures
-   Items
-   Materials
-   Consumables

### Craft

นำ Material/Item มารวมกันเพื่อสร้างของใหม่

ตัวอย่าง:

``` text
Broken Sword + Iron
        ↓
Iron Sword

Iron Sword + Fire Crystal
        ↓
Flame Sword
```

### Formation

จัดตำแหน่ง:

-   Tank
-   Melee
-   Range
-   Support
-   Siege
-   Structures

### Economy

ตัดสินใจว่า:

-   ใช้ Gold ตอนนี้
-   เก็บ Gold
-   Roll Shop
-   Upgrade
-   Craft
-   ลงทุน Economy

------------------------------------------------------------------------

# 6. Units

ตัวอย่าง Unit เริ่มต้น:

-   Knight
-   Archer
-   Mage
-   Healer
-   Assassin
-   Engineer
-   Siege Unit

Unit แต่ละตัวควรมี:

``` text
ID
Name
HP
Attack
Attack Speed
Armor
Range
Move Speed
Cost
Tags
Ability
Targeting Rules
```

ตัวอย่าง:

``` text
Knight

HP:           500
Attack:        50
Attack Speed:  1.2
Range:         1
Move Speed:    2
Cost:          4

Tags:
Human
Warrior
Melee
```

------------------------------------------------------------------------

# 7. Structures

ผู้เล่นไม่ได้มีแค่ Unit แต่สามารถสร้างสิ่งก่อสร้างได้ด้วย

ตัวอย่าง:

-   Wall
-   Archer Tower
-   Cannon
-   Healing Tower
-   Trap
-   Barricade
-   Fortress
-   Economy Building

Structure ควรมี Cost/Capacity เพื่อไม่ให้ผู้เล่นสร้างเต็มสนาม

ตัวอย่าง:

  Structure         Capacity
  --------------- ----------
  Wall                     1
  Trap                     1
  Archer Tower             2
  Healing Tower            3
  Cannon                   3
  Fortress                 5

ทำให้เกิดทางเลือก:

-   Unit-heavy
-   Tower-heavy
-   Fortress
-   Rush
-   Economy
-   Hybrid

ทุกแนวควรมีโอกาสเป็น Build ที่เล่นได้

------------------------------------------------------------------------

# 8. Attack / Defense System

หนึ่งใน Identity สำคัญของเกมคือการสลับระหว่าง **ฝ่ายรุก** และ **ฝ่ายรับ**

ตัวอย่าง Cycle:

``` text
DAY 1
ATTACK
   ↓
CAMP
   ↓
NIGHT 1
DEFEND
   ↓
CAMP
   ↓
DAY 2
ATTACK
   ↓
CAMP
   ↓
NIGHT 2
DEFEND
```

## Defense

ผู้เล่นสามารถ:

-   สร้างกำแพง
-   วางป้อม
-   วาง Trap
-   ป้องกัน Core
-   จัด Unit แนวหน้า/หลัง

## Attack

ผู้เล่นต้อง:

-   เจาะกำแพง
-   ทำลาย Tower
-   เลือก Formation
-   ใช้ Siege Unit
-   Counter Enemy Defense

------------------------------------------------------------------------

# 9. Dual-Purpose Equipment / Structures

ของบางอย่างควรมีหน้าที่แตกต่างกันเมื่อเป็นฝ่ายรุกและรับ

ตัวอย่าง:

## Ballista

Defense:

``` text
Static Long-range Tower
```

Attack:

``` text
Mobile Siege Weapon
```

## Iron Wall

Defense:

``` text
Permanent Barricade
```

Attack:

``` text
Deployable Shield
```

## Healing Shrine

Defense:

``` text
Area Healing Structure
```

Attack:

``` text
Healing Cart
```

ระบบนี้ช่วยให้ผู้เล่นไม่ต้องสร้าง Inventory แยก Attack/Defense
และทำให้การตัดสินใจซื้อของลึกขึ้น

------------------------------------------------------------------------

# 10. PvE

PvE ไม่ควรมีเพียงการฆ่าศัตรูทั้งหมด

Encounter สามารถมี Objective ต่างกัน เช่น:

-   Kill All
-   Destroy Core
-   Kill King
-   Defend Core
-   Survive
-   Escort
-   Capture Point
-   Boss Fight
-   Destroy Towers

ตัวอย่าง Encounter:

``` text
Dragon Fortress

Difficulty:
★★★★★

Main Objective:
Destroy Dragon Core

Optional:
- Finish with 5 Units alive
- Destroy all Towers
```

------------------------------------------------------------------------

# 11. PvP

PvP หลักควรเป็น **Asynchronous PvP**

ไม่จำเป็นต้องมีผู้เล่นสองคน Online พร้อมกัน

Flow:

``` text
Player A
กด READY
   ↓
Server บันทึก Snapshot Build
   ↓
Player A ออกจากเกมได้
   ↓
Player B กด READY ภายหลัง
   ↓
Matchmaking หา Snapshot ที่เหมาะสม
   ↓
Battle
```

Snapshot สามารถเก็บ:

``` text
Units
Positions
Structures
Items
Synergies
Run Stage
Wins
MMR
Seed
Build Version
```

ข้อดี:

-   Queue สั้นกว่า
-   ไม่ต้องรอคนอื่น
-   เหมาะกับ Mobile
-   Pause ระหว่าง Run ได้
-   จำนวน Concurrent Players ไม่ต้องสูงมาก
-   Server สามารถเก็บ Ghost Pool ไว้ Match ได้

------------------------------------------------------------------------

# 12. Matchmaking

ไม่ควรใช้แค่ MMR อย่างเดียว

ควรพิจารณา:

``` text
Run Stage
Wins
Power Range
MMR
Party Size
Game Version
```

เช่น:

``` text
Player A
Stage: 7
Wins: 5
MMR: 1120

VS

Player B Ghost
Stage: 7
Wins: 5
MMR: 1160
```

ต้องระวังไม่ให้ Power-based matchmaking ลงโทษผู้เล่นที่ Build เก่งจนทุก Match
ถูกบังคับให้ 50/50 เสมอ

------------------------------------------------------------------------

# 13. Solo / Co-op

เกมต้องสนุกได้ทั้ง:

-   Solo
-   Duo
-   Trio
-   อาจเพิ่ม 4 Player ภายหลัง

หลักสำคัญคือ Co-op ไม่ควรเป็นแค่:

> "Solo สองคนยืนข้างกัน"

ต้องมี Interaction ระหว่าง Build

ตัวอย่าง:

Player A:

``` text
Oil Tower
→ Apply Oil
```

Player B:

``` text
Fire Mage
→ Fire Damage
```

รวมกัน:

``` text
Oil + Fire
→ IGNITE
→ Explosion / Burn
```

อีกตัวอย่าง:

``` text
Poison + Wind
→ Spread Poison

Armor Break + Physical DPS
→ Burst

Water + Lightning
→ Chain Shock
```

สิ่งนี้ทำให้ผู้เล่นต้องคุยกันและสร้าง **Team Build**

------------------------------------------------------------------------

# 14. Co-op Party Run

ตัวอย่าง:

``` text
PARTY RUN

Player A    READY
Player B    PREPARING
Player C    READY

Shared Lives:
❤️❤️❤️❤️

Wins:
4 / 12
```

ทุกคนไม่มี Timer

เมื่อทุกคน Ready จึงเริ่ม Encounter

สำหรับ PvP:

``` text
Solo → Solo
Duo  → Duo
Trio → Trio
```

เพื่อไม่ให้ Party Size สร้างความได้เปรียบโดยตรง

------------------------------------------------------------------------

# 15. Synergy / Build Identity

หลังเล่นไปหลายรอบ ผู้เล่นควรมอง Build แล้วรู้ว่า:

> "Run นี้ฉันกำลังเล่นอะไร"

ตัวอย่าง Archetype:

### Fire

``` text
Burn
→ Spread
→ Explosion
```

### Undead

``` text
Unit Death
→ Skeleton
→ Corpse Buff
```

### Engineer

``` text
Tower
→ Drone
→ Robot
```

### Fortress

``` text
Wall
→ Shield
→ Tower
```

### Blood

``` text
Lose HP
→ Damage
→ Lifesteal
```

### Rush

``` text
Cheap Units
→ Swarm
→ Attack Speed
```

### Nature

``` text
Heal
→ Poison
→ Summon
```

------------------------------------------------------------------------

# 16. Cross-Build Synergy

Build ต่างชนิดควรผสมกันได้

ตัวอย่าง:

``` text
Undead + Engineer

Unit Dies
   ↓
Generate Scrap
   ↓
Upgrade Tower
```

หรือ:

``` text
Fire + Engineer

Cannon
   ↓
Fire Projectile
   ↓
Burn Enemy
   ↓
Enemy Dies
   ↓
Explosion
```

เป้าหมายคือให้ผู้เล่นค้นพบ Combo ใหม่ ๆ เอง

------------------------------------------------------------------------

# 17. Item System

Item ไม่ควรเป็นเพียง:

``` text
+10 Attack
+20 HP
```

ควรมี Item ที่เปลี่ยนวิธีเล่น

ตัวอย่าง:

## Blood Crown

``` text
Lose 5% HP periodically
Damage +100%
```

## Vampire Fang

``` text
20% Damage converted to Healing
```

## Berserker Rune

``` text
Below 30% HP:
Attack Speed +100%
```

เมื่อนำมารวมกันอาจเกิด Build:

``` text
Lose HP
→ Gain Damage
→ Lifesteal
→ Stay Low HP
→ Gain Attack Speed
```

เป้าหมายคือสร้าง Moment แบบ:

> "Run นี้ Build แตกมาก"

เพื่อเพิ่ม Replayability

------------------------------------------------------------------------

# 18. Economy

Economy ต้องเป็น Gameplay Layer สำคัญ

ผู้เล่นต้องเลือกระหว่าง:

``` text
Buy Unit
Buy Structure
Craft
Roll
Upgrade
Save
Invest
```

ตัวอย่าง Economy Item/Structure:

## Merchant Tent

``` text
Win Battle:
+2 Gold
```

## Mine

``` text
Every 3 Battles:
Gain Ore
```

## Piggy Bank

``` text
Unused Gold:
Generate Interest
```

ทำให้เกิด Strategy:

-   Early Aggression
-   Greedy Economy
-   Mid-game Spike
-   Late-game Scaling

------------------------------------------------------------------------

# 19. Risk vs Reward

ก่อน Battle ผู้เล่นควรมีทางเลือกระดับความเสี่ยง

ตัวอย่าง:

### Goblin Camp

``` text
Difficulty: Easy
Reward: 8 Gold
```

### Arena

``` text
Difficulty: Medium
Reward: 15 Gold + Item
```

### Dragon Fortress

``` text
Difficulty: Extreme
Reward: 30 Gold + Legendary
```

เมื่อเหลือ Lives น้อย ผู้เล่นต้องตัดสินใจว่าจะ:

-   เล่น Safe
-   หรือ Gamble เพื่อหา Power Spike

------------------------------------------------------------------------

# 20. Terrain

สนามไม่ควรเหมือนกันทุก Battle

ตัวอย่าง:

## Forest

-   มีสิ่งกีดขวาง
-   Range line เปลี่ยน
-   Nature Build อาจมี Bonus

## River

-   มีสะพาน
-   จำกัดเส้นทาง Ground Unit
-   Flying Unit ได้เปรียบ

## Castle

-   ทางเข้าแคบ
-   Wall/Tank มีประโยชน์

## Open Field

-   Rush/Range มีพื้นที่มาก

Terrain ทำให้ Formation และ Unit Value เปลี่ยนในแต่ละ Encounter

------------------------------------------------------------------------

# 21. World / Run Modifiers

แต่ละ Run สามารถมี Modifier เพื่อบังคับให้ผู้เล่น Adapt

ตัวอย่าง:

## Frozen Kingdom

``` text
Fire Damage -20%
Ice Effects +20%
Water becomes Ice
```

## Blood Moon

``` text
Dead Units may return as Undead
```

## Industrial Age

``` text
Structures cheaper
Units more expensive
```

เป้าหมายคือป้องกันไม่ให้ผู้เล่นใช้ Build เดิมทุก Run

------------------------------------------------------------------------

# 22. Scouting

ฝ่ายบุกไม่ควรเห็น Defense ของศัตรูทั้งหมดแบบฟรี

สามารถมีระบบ Information เช่น:

``` text
Enemy Type: Mechanical
Structures: 6
Units: 7
Threat: ★★★★
```

Item/Unit บางอย่างสามารถเพิ่มข้อมูลได้

ตัวอย่าง:

## Scout Tower

``` text
Reveal +20% enemy battlefield
```

## Scout Unit

``` text
Reveal enemy backline
```

ทำให้ Information กลายเป็น Resource ทาง Strategy

------------------------------------------------------------------------

# 23. Meta Progression

เกมไม่ควรใช้ Permanent Stat Progression ที่ทำให้ผู้เล่นเก่าได้เปรียบ PvP มากเกินไป

Meta Progression เหมาะกับการปลด:

-   Units ใหม่
-   Items ใหม่
-   Recipes
-   Maps
-   Bosses
-   Modifiers
-   Cosmetics
-   Skins
-   Emotes

เช่น:

``` text
New Player:
30 Items available

Experienced Player:
80 Items available
```

ผู้เล่นเก่ามี "ความเป็นไปได้" มากขึ้น แต่ไม่จำเป็นต้องมี +500% Stat

------------------------------------------------------------------------

# 24. Recommended Art Direction

แนะนำ:

**Stylized 3D Isometric**

เหตุผล:

-   อ่านสนามง่าย
-   เหมาะกับ Strategy
-   ทำงานบน Mobile ได้ง่ายกว่า realistic graphics
-   Asset production ถูกกว่า AAA
-   Unit/Structure สามารถมี silhouette ชัด
-   Camera เดียวใช้ได้ทั้ง PC/Mobile

------------------------------------------------------------------------

# 25. Recommended Development Stack

## Client

### Unity 6

ใช้สำหรับ:

-   PC
-   Android
-   iOS

Language:

``` text
C#
```

Rendering:

``` text
URP
```

เหตุผล:

-   Cross-platform
-   Mobile-friendly
-   Tooling เยอะ
-   C# เหมาะกับการแบ่งระบบ
-   เหมาะกับ Data-driven Strategy Game

------------------------------------------------------------------------

# 26. Game Data

ช่วง Prototype:

-   ScriptableObject
-   JSON

ข้อมูลที่ควร Data-driven:

``` text
Units
Items
Structures
Skills
Synergies
Recipes
Enemies
Encounters
Modifiers
Rewards
```

อย่า Hard-code Balance ลงใน Battle Logic มากเกินไป

------------------------------------------------------------------------

# 27. Backend

เมื่อ Prototype สนุกแล้ว แนะนำ:

## Nakama

ใช้สำหรับ:

-   Authentication
-   Player Account
-   Cloud Save
-   Party
-   Matchmaking
-   RPC
-   Leaderboard
-   Multiplayer Features
-   Storage

## PostgreSQL

ใช้เก็บ:

-   Account
-   Runs
-   Build Snapshots
-   Match History
-   Progression
-   Inventory/Unlocks

## Redis

**ยังไม่จำเป็นในช่วงแรก**

เพิ่มเมื่อมีเหตุผลจริง เช่น:

-   Cache
-   High-volume Queue
-   Session Data
-   Scale

------------------------------------------------------------------------

# 28. Deployment

ช่วงเริ่มต้น:

``` text
Docker
+
VPS / Cloud VM
```

ยังไม่ต้องใช้:

-   Kubernetes
-   Microservices จำนวนมาก
-   Infrastructure ซับซ้อน

หลักคือ Keep It Simple จนกว่าจะมี Load จริง

------------------------------------------------------------------------

# 29. Version Control

ใช้:

``` text
Git
+
GitHub
```

ควรมี:

``` text
main
develop
feature/*
```

แต่ทีมเล็กมากสามารถใช้ Trunk-based workflow ที่เรียบง่ายกว่านี้ได้

------------------------------------------------------------------------

# 30. 3D / Art Tools

แนะนำ:

## Blender

ใช้สำหรับ:

-   Unit Models
-   Structures
-   Props
-   Simple Animations

สามารถใช้ Asset Store ในช่วง Prototype เพื่อลดเวลาสร้าง Art

------------------------------------------------------------------------

# 31. Technical Architecture

ภาพรวม:

``` text
┌─────────────────────────┐
│      UNITY CLIENT       │
│                         │
│ PC / Android / iOS      │
└────────────┬────────────┘
             │
          HTTPS
             │
┌────────────▼────────────┐
│         NAKAMA          │
│                         │
│ Authentication          │
│ Cloud Save              │
│ Party                   │
│ Matchmaking             │
│ Ghost PvP               │
│ Run Management          │
└────────────┬────────────┘
             │
┌────────────▼────────────┐
│       PostgreSQL        │
│                         │
│ Accounts                │
│ Runs                    │
│ Snapshots               │
│ Match History           │
│ Unlocks                 │
└─────────────────────────┘
```

------------------------------------------------------------------------

# 32. Critical Technical Decision: Separate Simulation from Visuals

ระบบ Battle ไม่ควรผูกกับ Animation

ควรเป็น:

``` text
Battle Simulation
       ↓
Game Rules
       ↓
Battle Events
       ↓
Visual Layer
       ↓
Animation / VFX / Audio
```

ตัวอย่าง Event:

``` text
Time: 3.25

Knight_01
ATTACK
Archer_04

Damage:
52
```

Unity Visual Layer นำ Event ไปแสดง Animation

ข้อดี:

-   Test ง่าย
-   Replay ง่าย
-   Server Validation ง่าย
-   Async PvP ง่าย
-   Debug ง่าย
-   Deterministic Simulation ทำได้ง่ายขึ้น
-   ลดการโกง

------------------------------------------------------------------------

# 33. Deterministic Battle Simulation

ควรออกแบบให้ Battle สามารถ Re-simulate จาก:

``` text
Build A
Build B
Map
Seed
Game Version
```

แล้วได้ผลลัพธ์เดียวกันหรือใกล้เคียงตามกฎที่กำหนด

Random ทุกอย่างควรใช้ Seed

ตัวอย่าง:

``` text
Seed = 1837291
```

ห้ามใช้ Random ที่ควบคุมไม่ได้กระจายทั่ว Codebase

------------------------------------------------------------------------

# 34. Suggested Unity Project Structure

``` text
Assets/
│
├── Game/
│   ├── Battle/
│   │   ├── Simulation/
│   │   ├── Events/
│   │   ├── Rules/
│   │   └── Results/
│   │
│   ├── Units/
│   │   ├── Data/
│   │   ├── Logic/
│   │   ├── AI/
│   │   └── Abilities/
│   │
│   ├── Structures/
│   │   ├── Data/
│   │   ├── Towers/
│   │   ├── Walls/
│   │   └── Traps/
│   │
│   ├── Grid/
│   │   ├── GridSystem/
│   │   ├── Pathfinding/
│   │   └── Placement/
│   │
│   ├── Items/
│   │   ├── Data/
│   │   ├── Equipment/
│   │   └── Effects/
│   │
│   ├── Crafting/
│   │
│   ├── Economy/
│   │   ├── Shop/
│   │   ├── Gold/
│   │   └── Rewards/
│   │
│   ├── Run/
│   │   ├── RunState/
│   │   ├── Lives/
│   │   └── Encounters/
│   │
│   ├── Synergies/
│   ├── UI/
│   └── Networking/
│
├── Art/
├── Audio/
├── Prefabs/
└── Scenes/
```

------------------------------------------------------------------------

# 35. Development Roadmap

## Phase 0 --- Paper Design

ก่อนเขียนระบบใหญ่ ให้กำหนด:

-   Board Size
-   Unit Movement
-   Targeting
-   Pathfinding
-   Wall Rules
-   Tower Rules
-   Win/Lose
-   Economy
-   Basic Shop
-   Basic Crafting

------------------------------------------------------------------------

## Phase 1 --- Offline Combat Prototype

ใช้เพียง:

``` text
Unity
C#
Git
```

สร้าง:

### Units

-   Knight
-   Archer
-   Mage
-   Healer

### Structures

-   Wall
-   Archer Tower
-   Cannon

### Items

-   Sword
-   Bow
-   Armor
-   Fire Crystal

### Core Loop

``` text
SHOP
 ↓
BUY
 ↓
PLACE
 ↓
READY
 ↓
AUTO BATTLE
 ↓
RESULT
 ↓
REWARD
 ↓
SHOP
```

**Goal: พิสูจน์ว่าเกมสนุก**

------------------------------------------------------------------------

# 36. Phase 2 --- Complete Offline Run

เพิ่ม:

-   Lives
-   Wins
-   Multiple Encounters
-   PvE
-   Boss
-   Crafting
-   Synergies
-   Economy
-   Terrain
-   Attack/Defense
-   Run End

ตอนนี้ควรสามารถเล่น Run เต็มได้โดยไม่ต้องมี Server

------------------------------------------------------------------------

# 37. Phase 3 --- Data & Balance Tools

ทำให้:

-   Unit data แก้ง่าย
-   Item data แก้ง่าย
-   Recipe แก้ง่าย
-   Reward แก้ง่าย

ควรมี Debug Tools เช่น:

-   Give Gold
-   Spawn Unit
-   Skip Battle
-   Force Seed
-   Set Stage
-   Simulate 100/1000 Battles

สิ่งนี้สำคัญมากสำหรับ Auto-Battler เพราะ Balance ต้องใช้ Simulation จำนวนมาก

------------------------------------------------------------------------

# 38. Phase 4 --- Backend

เพิ่ม:

-   Nakama
-   PostgreSQL
-   Account
-   Cloud Save
-   Run Save
-   Build Snapshot

ยังไม่ต้องทำ Co-op

------------------------------------------------------------------------

# 39. Phase 5 --- Async PvP

สร้าง Flow:

``` text
READY
 ↓
Upload Build
 ↓
Find Ghost
 ↓
Get Opponent Build
 ↓
Battle Simulation
 ↓
Validate Result
 ↓
Reward
 ↓
Save Match
```

เพิ่ม:

-   MMR
-   Match History
-   Ghost Pool
-   Version Compatibility

------------------------------------------------------------------------

# 40. Phase 6 --- Mobile

เมื่อ Core/UX เสถียร:

-   Android Build
-   Touch Controls
-   Responsive UI
-   Performance Optimization
-   Battery/Heat Testing
-   Different Aspect Ratios

iOS สามารถตามมาภายหลัง

------------------------------------------------------------------------

# 41. Phase 7 --- Co-op

เพิ่ม:

-   Party
-   Invite
-   Ready State
-   Shared Run
-   Shared Lives
-   Duo Matchmaking
-   Co-op PvE
-   Team Synergy
-   Reconnect
-   Disconnect Handling

จากนั้นค่อยพิจารณา Trio/4 Player

------------------------------------------------------------------------

# 42. สิ่งที่ไม่ควรทำในช่วงแรก

ยังไม่ควรทำ:

-   Open World
-   Guild
-   Housing
-   MMORPG systems
-   Real-time PvP
-   100 Units
-   500 Items
-   20 Maps
-   Battle Pass
-   Gacha
-   Marketplace
-   Kubernetes
-   Microservices
-   Complex Anti-cheat

ทั้งหมดนี้เพิ่ม Scope แต่ไม่ได้พิสูจน์ว่า Core Game สนุก

------------------------------------------------------------------------

# 43. Prototype v0.1 Scope

เป้าหมายแรกควรเล็กมาก

## Board

หนึ่งสนาม

## Units

4 Units

``` text
Knight
Archer
Mage
Healer
```

## Structures

3 Structures

``` text
Wall
Archer Tower
Cannon
```

## Items

4 Items

``` text
Sword
Armor
Bow
Fire Crystal
```

## Systems

-   Grid Placement
-   Movement
-   Target Selection
-   Attack
-   HP/Damage
-   Wall
-   Tower
-   Shop
-   Gold
-   Ready
-   Battle
-   Reward
-   Restart

------------------------------------------------------------------------

# 44. Prototype Success Criteria

Prototype ยังไม่ต้องสวย

คำถามสำคัญคือ:

### ก่อนกด Ready สนุกไหม?

ผู้เล่นควรรู้สึก:

> "ถ้าเอา Knight ไปตรงนี้ Archer น่าจะปลอดภัย"

หรือ:

> "ถ้าปิดช่องนี้ด้วย Wall ศัตรูน่าจะต้องเดินผ่าน Cannon"

### ตอน Battle สนุกไหม?

ผู้เล่นควรมองแล้วเข้าใจว่า:

-   ทำไมชนะ
-   ทำไมแพ้
-   Build ไหนทำงาน
-   Formation ไหนผิด
-   Item ไหนสร้าง Impact

### หลังแพ้ อยากแก้ Build แล้วกด Ready อีกไหม?

ถ้าคำตอบคือ "ใช่" แปลว่า Core Loop เริ่มทำงาน

------------------------------------------------------------------------

# 45. Product Identity

เกมไม่ควรขายตัวเองว่า:

> "TFT + Backpack Battles + Tower Defense"

สิ่งเหล่านี้เป็นเพียง Reference ในการออกแบบ

Identity ที่ควรพัฒนาให้ชัดคือ:

> **เกม Strategy Roguelite ที่คุณสร้างกองทัพและป้อมของตัวเอง ปรับ Build
> โดยไม่มีแรงกดดันเรื่องเวลา แล้วส่งแผนของคุณเข้าสู่สนามรุก/รับกับ PvE หรือ Build
> ของผู้เล่นอื่น โดยสามารถเล่นคนเดียวหรือสร้าง Team Build ร่วมกับเพื่อนได้**

Core Fantasy:

**BUILD → PLAN → READY → WATCH YOUR PLAN WORK → ADAPT**

------------------------------------------------------------------------

# 46. Key Design Question

ทุกระบบใหม่ควรถามว่า:

> "ระบบนี้ทำให้ 10--30 วินาทีก่อนกด READY สนุกขึ้นหรือไม่?"

ถ้าไม่:

-   อาจไม่จำเป็น
-   อาจควรทำทีหลัง
-   หรือควรตัดออก

ตัวอย่างความรู้สึกที่ต้องการ:

> "เอากำแพงมาปิดตรงนี้ ย้าย Knight มารับด้านซ้าย แล้วใส่ Fire Core ให้ Cannon
> เพราะรอบนี้ศัตรูมากันเป็นกลุ่ม... โอเค Ready"

จากนั้น Battle ต้องแสดงให้ผู้เล่นเห็นอย่างชัดเจนว่าแผนนั้นสำเร็จหรือล้มเหลวเพราะอะไร

------------------------------------------------------------------------

# 47. Recommended Stack Summary

``` text
ENGINE
Unity 6

LANGUAGE
C#

RENDERING
URP

CLIENT
Windows
Android
iOS (later)

GAME DATA
ScriptableObject
JSON

BACKEND (later)
Nakama

DATABASE
PostgreSQL

DEPLOYMENT
Docker
VPS / Cloud VM

VERSION CONTROL
Git
GitHub

3D
Blender

ARCHITECTURE
Data-driven
Simulation separated from Presentation
Seeded / deterministic battle where practical
Server-authoritative validation for online progression
```

------------------------------------------------------------------------

# 48. Recommended Development Order

``` text
1. Paper Design
       ↓
2. Offline Battle Prototype
       ↓
3. Offline Full Run
       ↓
4. Balance / Simulation Tools
       ↓
5. Backend + Accounts
       ↓
6. Async PvP
       ↓
7. Android
       ↓
8. Co-op Duo
       ↓
9. Trio / More Content
       ↓
10. Polish / Live Systems
```

------------------------------------------------------------------------

# 49. Final Principle

**อย่าเริ่มจากการสร้างเกมใหญ่**

เริ่มจากคำถามเดียว:

> "Unit + Wall + Tower + Formation แล้วกด Ready ดูมันสู้กัน สนุกหรือไม่?"

ถ้าระบบเล็ก ๆ นี้สนุก เราสามารถเพิ่ม:

-   Craft
-   Synergy
-   PvE
-   PvP
-   Attack/Defense
-   Terrain
-   Co-op
-   Boss
-   Meta Progression

ได้ภายหลัง

แต่ถ้า Core Battle ยังไม่สนุก การเพิ่ม Content หรือ Backend จะไม่แก้ปัญหา

ดังนั้น Milestone แรกสุดของโปรเจกต์คือ:

**สร้าง Offline Prototype ที่ทำให้ผู้เล่นอยากพูดว่า "ขออีกรอบ" หลัง Battle จบ**
