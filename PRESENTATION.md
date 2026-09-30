# 🌾 KisanSathi — Hackathon Project Presentation Deck
> **Build with AI: Code for Communities 2.0 • Agricultural Intelligence Track**  
> *AI-Assisted Agricultural Market Intelligence, Multispectral Remote Sensing & Regenerative Advisory Platform*  
> **Live Production URL:** [https://hack2skill-flax.vercel.app](https://hack2skill-flax.vercel.app) • **GitHub:** [https://github.com/sriharshapn/KishanSathi](https://github.com/sriharshapn/KishanSathi)

---

## Slide 1: Title & Executive Summary
### **KisanSathi — Sovereign Agricultural Intelligence & Decision Support Platform**
*Democratising precision farming & fair price discovery for 100M+ small and marginal farmers across India.*

- **Hackathon Track:** Google Cloud "Build with AI: Code for Communities 2.0" (Agricultural Intelligence)
- **Tagline:** One Unified Platform: From Soil & Satellite to Mandi Realization
- **Core Pillars:**
  1. 📊 **Zero-Hallucination Market Intelligence:** Real-time APMC/Agmarknet mandi rates across 2,400+ yards.
  2. 🛰️ **Geospatial & Cadastre Telemetry:** Sentinel-2 multispectral NDVI + interactive field polygon sculpting with geodesic area calculation.
  3. 🤖 **Grounded AI Agro-Advisory:** Gemini 2.0 Flash regenerative farming schedules and disease diagnosis.
  4. 🏛️ **Digital Public Good (DPG):** ETSI NGSI-LD federated state extension & 1800-180-1551 Kisan Call Centre IVR scripts.

---

## Slide 2: The Problem
### **Smallholder Farmers Lack Unified, Grounded Decision Support**
*86% of Indian farmers cultivate operational holdings under 2 hectares, facing extreme information asymmetry.*

```
❌ FRAGMENTED DATA          Scattered across 10+ disjointed portals (e-NAM, IMD, Soil Health, State RoR)
❌ PRICE ASYMMETRY          Mandi middlemen exploit lack of real-time inter-market price comparison
❌ ZERO VALUE FORESIGHT     Farmers cannot estimate net in-hand returns after freight, loading & market cess
❌ CROP PATHOLOGY LOSSES    20-35% annual yield loss due to delayed disease identification in the field
❌ DIGITAL & LANGUAGE GAP   Technical agronomic data rarely delivered in regional vernaculars or low-bandwidth formats
```

- **Root Cause:** Traditional apps either display raw, uncurated tables or employ ungrounded LLMs that hallucinate commodity prices and dosages.

---

## Slide 3: Our Solution
### **KisanSathi — Unified Sovereign Agricultural Decision Mesh**
*A production-ready Digital Public Good fusing verified government open data, European Space Agency remote sensing, and Google AI.*

```
                                    ┌────────────────────────┐
                                    │       KisanSathi       │
                                    │    Unified Platform    │
                                    └───────────┬────────────┘
         ┌──────────────────┬───────────────────┼───────────────────┬──────────────────┐
         ▼                  ▼                   ▼                   ▼                  ▼
┌─────────────────┐ ┌───────────────┐ ┌───────────────────┐ ┌───────────────┐ ┌────────────────┐
│ Market Terminal │ │  AI Advisory  │ │ Sentinel-2 NDVI   │ │ Crop Vision   │ │ Weather & Cad. │
│ Agmarknet Live  │ │ Gemini 2.0    │ │ GEE + Interactive │ │ Gemini Vision │ │ Open-Meteo NWP │
│ 2,400+ Mandis   │ │ 10 Languages  │ │ Polygon Area      │ │ Dual Remedy   │ │ AgriStack RoR  │
└─────────────────┘ └───────────────┘ └───────────────────┘ └───────────────┘ └────────────────┘
```

- **Guiding Tenet:** Strict decoupling between **Verified Ground-Truth Data** (prices, coordinates, areas) and **AI Explanation/Translation** (Gemini 2.0).

---

## Slide 4: Key Platform Modules
### **10 Comprehensive Production Capabilities**

| # | Module | Core Functionality | Underlying Technology |
|---|---|---|---|
| **01** | **Live APMC Mandi Terminal** | Real-time commodity modal, min/max prices & arrivals across 369 districts | `data.gov.in` Agmarknet API (30-min auto sync) |
| **02** | **Inter-Mandi Arbitrage Engine** | Compare nearby mandis by net return after freight & handling deductions | Haversine GPS routing + deterministic math |
| **03** | **Interactive Field Polygon Sculpting** | Real-time boundary adjustments (drag vertices, scale ±5%, rotate ↺15°) | Google Maps JS API + WGS84 Geodesic Area Engine |
| **04** | **Multispectral NDVI & Moisture** | Sentinel-2 10m spatial resolution canopy vigor, nitrogen & soil stress | `@google/earthengine` + Copernicus S2_SR |
| **05** | **Regenerative Crop Advisory** | 4-milestone seasonal execution calendar + Soil Regenerative Score (A-F) | Gemini 2.0 Flash + Soil Health Card database |
| **06** | **Leaf Disease Vision Pathology** | Instant macroscopic leaf disease diagnosis with dual remedy (bio + chemical) | Gemini 2.0 Flash Vision (zero-shot multimodal) |
| **07** | **Micro-Climate NWP Forecast** | 7-day precipitation, dew point, thermal stress & evapotranspiration | Open-Meteo High-Resolution NWP models |
| **08** | **Government Cadastre Integration** | AgriStack Plot ID, Survey Number, Certified Patta & DCS verified crop | ISRO Bhuvan + State RoR (Bhoomi, Mahabhulekh) |
| **09** | **Kisan Call Centre IVR Synthesizer** | Toll-free (1800-180-1551) audio telephony scripts in regional dialects | Vernacular Speech Synthesizer Engine |
| **10** | **Pan-India DPG Data Exchange** | Inter-state crop model & pest alert sharing compliant with MeitY guidelines | ETSI GS CIM 009 NGSI-LD Standard |

---

## Slide 5: How It Works
### **End-to-End Deterministic + AI Pipeline**

```
 [1. FARMER INPUT]   ──► District, Crop Selection, GPS Location, or Leaf Image Capture
           │
           ▼
 [2. INGESTION]      ──► Live Agmarknet Feed + Open-Meteo NWP + Sentinel-2 L2A Bands
           │
           ▼
 [3. DETERMINISTIC]  ──► • Quantity Normalization (kg ⇄ quintal ⇄ tonne)
   CALCULATION CORE  ──► • True Net-Realization (Gross - Freight - Hamali - Cess)
     (Zero Hallucination) • Geodesic Polygon Area Calculation (hectares + acres)
           │
           ▼
 [4. AI EXPLANATION] ──► Gemini 2.0 Flash contextualizes metrics into farmer's mother tongue
           │
           ▼
 [5. MULTI-CHANNEL]  ──► Responsive Web PWA • Offline LocalStorage Cache • IVR Voice Telephony
```

---

## Slide 6: System Architecture
### **Technical Architecture Overview**

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 PRESENTATION LAYER                                     │
│     React 19 • TypeScript • Vite • Tailwind CSS • Framer Motion • Lucide Icons        │
│          PWA Offline Cache • Responsive Mobile Drawer • 10-Language Vernacular         │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ HTTPS / JSON-LD
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                           API GATEWAY & DOMAIN CONTROLLERS                             │
│                    Vercel Serverless (api/index.js) / Node.js 20+ Express              │
│      ├── /api/markets/search        ├── /api/satellite/ndvi     ├── /api/health       │
│      ├── /api/advisory/generate     ├── /api/diagnose/disease   ├── /api/sync/trigger │
└───────┬───────────────────────────┬───────────────────────────┬────────────────────────┘
        │                           │                           │
        ▼                           ▼                           ▼
┌────────────────────────┐  ┌────────────────────────┐  ┌────────────────────────────────┐
│ DETERMINISTIC ENGINES  │  │   AI INFERENCE CORE    │  │     GEOSPATIAL TELEMETRY       │
│ • Net Farm-Gate Realiz.│  │ • Google Gemini 2.0    │  │ • Google Earth Engine API      │
│ • Geodesic Area Calc   │  │   Flash (Agro-Advis.)  │  │ • Sentinel-2 Harmonized MSI    │
│ • Unit Normalizer      │  │ • Gemini Vision AI     │  │ • Google Maps Satellite Layer  │
│ • 30-Day Trend Stats   │  │   (Leaf Pathology)     │  │ • Cadastral Boundary Overlays  │
└───────┬────────────────┘  └───────┬────────────────┘  └───────┬────────────────────────┘
        │                           │                           │
        └───────────────────────────┼───────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        DATA PERSISTENCE & SOVEREIGN INTEGRATION                        │
│   SQLite / Firestore DB  •  Data.gov.in Agmarknet  •  Open-Meteo  •  ISRO Bhuvan       │
│                ETSI GS CIM 009 NGSI-LD Cross-State DPG Data Mesh                      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Slide 7: Technology Stack
### **Modern, Resilient, Production-Ready Stack**

- **Frontend Application:**
  - `React 19` & `TypeScript` for type-safe, reactive UI components
  - `Vite 8` for lightning-fast sub-second bundling & HMR
  - `Tailwind CSS v4` implementing Behance AgroInvest design system (`#022113`, `#546C18`, `#DFEB38`)
  - `Lucide React` for clean, professional iconography (zero emojis)
  - `Leaflet` & Google Maps JS API for vector and satellite parcel rendering

- **Backend & Compute:**
  - `Node.js 20+` & `Express.js` with modular domain routing
  - Serverless entrypoint via `api/index.js` for instant Vercel edge deployment
  - Resilient SQLite database (`better-sqlite3`) & Google Cloud Firestore adapter

- **AI & Remote Sensing:**
  - `Google Gemini 2.0 Flash` for sub-second, grounded multilingual crop advisories
  - `Google Gemini Vision` for macroscopic leaf pathogen detection
  - `@google/earthengine` & Copernicus Sentinel-2 MSI multispectral earth observation

- **Sovereign Public APIs:**
  - `data.gov.in` Agmarknet Daily Wholesale Bulletin API
  - `Open-Meteo` Numerical Weather Prediction (NWP) API
  - `AgriStack` / ISRO Bhuvan cadastral and state land record mappings

---

## Slide 8: Responsible AI Architecture
### **AI + Verified Data: Responsible by Design**

> *"Artificial Intelligence explains, translates, and guides — it must NEVER invent market numbers."*

```
               ┌───────────────────────────────────────────────────────┐
               │              LAYER 1: GROUND TRUTH DATA               │
               │   Official Agmarknet Mandi Records (data.gov.in)      │
               │   Exact Modal, Min, Max Prices & Physical Arrivals    │
               └──────────────────────────┬────────────────────────────┘
                                          │
                                          ▼
               ┌───────────────────────────────────────────────────────┐
               │          LAYER 2: DETERMINISTIC CALCULATION           │
               │   • Gross Realization = Quantity × Modal Price        │
               │   • Net In-Hand = Gross - (Freight + Hamali + Cess)   │
               │   • 30-Day Trend % = ((Current - Past) / Past) × 100  │
               │   • Geodesic Parcel Area = Spherical Polygon Integral │
               └──────────────────────────┬────────────────────────────┘
                                          │
                                          ▼
               ┌───────────────────────────────────────────────────────┐
               │          LAYER 3: GEMINI 2.0 EXPLANATION CORE         │
               │   • Translates deterministic outputs into vernacular  │
               │   • Generates agronomic reasoning and checklist       │
               │   • Strictly barred from overwriting verified prices  │
               └───────────────────────────────────────────────────────┘
```

- **Resilience Guarantee:** If Gemini API limits or network drops occur, deterministic rule engines execute immediately — **the application never crashes**.

---

## Slide 9: User Journey
### **From Seed to Sale — The 6-Step Farmer Flow**

1. **Location & Crop Selection:**
   - Farmer selects state, district, crop, and mother tongue (or clicks *"Use My GPS"*).
2. **Instant Price Discovery & Logistics Evaluation:**
   - Compares 3 nearby mandis with true net realization after transport deductions.
3. **Interactive Parcel Boundary Verification:**
   - Verifies field satellite NDVI health, adjusts parcel polygon handles, and sees live area in ha & acres.
4. **Natural Language AI Agronomy Insights:**
   - Receives Gemini 2.0 regenerative planting calendar, nitrogen recommendations, and irrigation schedules.
5. **Field Leaf Disease Diagnosis:**
   - Snaps a photo of diseased leaves for instant identification with certified bio & organic dual remedies.
6. **Market Action & Checklist Execution:**
   - Reviews the 11-step Mandi Selling Checklist, downloads trade slips, or calls 1800-180-1551 IVR desk.

---

## Slide 10: Technical Highlights & Differentiators
### **What Sets KisanSathi Apart from Existing Solutions**

| Feature | Generic Agri-Apps | KisanSathi Platform |
|---|---|---|
| **Price Integrity** | Often uses web scrapers or unverified estimates | Direct `data.gov.in` Agmarknet API ingestion with 30-min sync |
| **Price Hallucination Risk** | High (LLMs invent market numbers) | **Zero** (Prices strictly calculated deterministically) |
| **Field Boundary Tracking** | Static pin on map | **Interactive polygon sculpting** with real-time geodesic area calculation |
| **Satellite Intelligence** | Mock satellite images | Real Copernicus Sentinel-2 MSI 10m NDVI & Google Earth 3D topography |
| **Disease Remediation** | Promotes expensive chemical brands | **Dual protocol:** Zero-cost organic bio-remedy + statutory chemical formula |
| **Governance Interoperability** | Siloed, proprietary database | **ETSI NGSI-LD DPG standard** linking state agriculture departments |
| **Low-Literacy Access** | Complex text dashboards | **1800-180-1551 IVR speech synthesis** in 10 Indian vernaculars |

---

## Slide 11: Future Roadmap
### **Scaling to 100M+ Small & Marginal Growers**

- **Phase 1 (Current Production):**
  - Web PWA with live Agmarknet sync, Sentinel-2 NDVI, Gemini 2.0 advisory, disease vision, and interactive polygon editing.
- **Phase 2 (Q2 2026):**
  - **WhatsApp / SMS Push Micro-Service:** Automated morning price alerts and frost/pest alerts over Twilio / Gupshup.
  - **Voice-First Conversational Agent:** Two-way voice bot on phone calls via WebRTC / Gemini Live API.
- **Phase 3 (Q3 2026):**
  - **Offline Mesh Sync:** Bluetooth/Wi-Fi Direct peer-to-peer sync among village self-help groups (SHGs) and KVK agents.
  - **Micro-Credit & Crop Insurance Underwriting API:** Export verified NDVI health and Agmarknet trade history as verifiable credentials for KCC loans.

---

## Slide 12: Conclusion & Summary
### **Empowering Every Indian Farmer with Sovereign Intelligence**

```
   📊 DATA-DRIVEN           Verified Agmarknet, Sentinel-2, Open-Meteo & AgriStack data
   🤖 RESPONSIBLE AI        Gemini 2.0 Flash explains & diagnoses without hallucination
   🌾 FARMER-CENTRIC        10 Indian languages, interactive maps, and net-realization calculators
   🏆 PRODUCTION DEPLOYED   Live on Vercel at https://hack2skill-flax.vercel.app
```

> **Thank You!**  
> *Ready for Evaluation & Live Demonstration.*
