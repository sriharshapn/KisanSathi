# KisanSathi 🌾

**Full-Stack AI Agricultural Platform for Small & Marginal Farmers**

Built for the **Google Cloud "Build with AI: Code for Communities 2.0"** Hackathon (Hack2skill) · Agriculture Track

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://hack2skill-flax.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-KisanSathi-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/sriharshapn/KisanSathi)
[![License: MIT](https://img.shields.io/badge/License-MIT-2E7D32?style=flat-square)](LICENSE)
[![Node](https://img.shields.io/badge/Node.js-20%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)

---

## What is KisanSathi?

India has 120 million small and marginal farmers with no real-time access to market prices, crop health intelligence, or hyper-local agronomic advice. KisanSathi bridges this gap with a single platform that combines:

- 🏛️ **Live APMC mandi prices** from government sources (zero hallucination)
- 🤖 **Gemini 2.0 Flash** AI for crop advisory and plant disease diagnosis
- 🛰️ **Sentinel-2 satellite NDVI** for field health monitoring
- 🌦️ **Microclimate weather forecasts** via Open-Meteo NWP
- 📊 **Federated government data mesh** (ETSI NGSI-LD / AgriStack)

---

## Live Links

| | |
|---|---|
| 🌐 **Production App** | [hack2skill-flax.vercel.app](https://hack2skill-flax.vercel.app) |
| 📦 **GitHub Repo** | [github.com/sriharshapn/KisanSathi](https://github.com/sriharshapn/KisanSathi) |

---

## Features

### 🏛️ Mandi Price Intelligence
- Live commodity prices from **Agmarknet / e-NAM** via `data.gov.in` official API
- Modal, min, max prices across 369 Indian APMC yards
- 30-minute automated background sync
- Net in-hand earnings estimator (deducting freight, hamali, APMC cess)
- 7 / 15 / 30-day price trend analysis

### 🤖 AI Agronomy Advisory (Gemini 2.0 Flash)
- Hyper-local crop recommendations grounded in soil health + NDVI telemetry + NWP weather
- Zero-hallucination pipeline — AI only explains; all numbers come from verified sources
- Regenerative farming score (A–F) with APMC price realization estimates
- 7-day precision irrigation schedule & seasonal execution calendar
- Plant disease diagnosis via **Vision AI** — photo upload → pathogen ID → treatment protocol

### 🛰️ Satellite Field Intelligence
- **Copernicus Sentinel-2** NDVI, RGB True Color, and Moisture Stress layers
- Interactive field boundary polygon editing (drag, resize, rotate, scale)
- Real-time geodesic area in hectares and acres
- All 369 Indian districts grounded with verified GPS centroids

### 🌦️ Microclimate Weather
- NWP forecasts from Open-Meteo at field level
- Irrigation and spray timing recommendations

### 📊 Government Data Mesh
- Federated cross-state data exchange (ETSI NGSI-LD / GS CIM 009)
- AgriStack, ISRO Bhuvan, Soil Health Card integration
- Disease outbreak early warning system

### 🌐 Multilingual
- 10 regional languages — Hindi, Kannada, Telugu, Tamil, Marathi and more
- All UI elements, AI insights, and educational guides localized

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion |
| **Maps** | Leaflet · React-Leaflet · Google Maps JS API |
| **Backend** | Node.js 20 · Express · REST API |
| **AI** | Google Gemini 2.0 Flash (text + vision) |
| **Satellite** | Copernicus Sentinel-2 · NDVI computation |
| **Auth** | Firebase Authentication (Google OAuth 2.0 / OTP) |
| **Database** | Cloud Firestore |
| **Data** | data.gov.in (Agmarknet) · Open-Meteo NWP |
| **Deployment** | Vercel (frontend + serverless API) |

---

## Architecture

```
Farmer / Mandi Trader
        │  HTTPS
        ▼
React 19 SPA  ──OAuth/OTP──▶  Firebase Auth (Google Cloud)
        │  REST/JSON
        ▼
Express API (Node.js 20 · port 5001)
   ├── generateContent ──▶  Gemini 2.0 Flash  (Google Cloud)
   ├── NWP query       ──▶  Weather NWP Service  ──▶  Open-Meteo API
   ├── price query     ──▶  Mandi Price Service  ──▶  data.gov.in
   ├── advisory req    ──▶  AI Advisory Service  ──▶  Firestore
   ├── NDVI compute    ──▶  Satellite Service    ──▶  Open-Meteo API
   └── EO tile fetch   ──▶  Copernicus EO (Sentinel-2)
```

---

## Getting Started

### Prerequisites
- **Node.js** v20+
- **npm** v10+

### 1. Clone
```bash
git clone https://github.com/sriharshapn/KisanSathi.git
cd KisanSathi
```

### 2. Install dependencies
```bash
npm install
npm run install:all
```

### 3. Configure environment
Create a `.env` file in the project root:
```env
PORT=5001
GEMINI_API_KEY=your_gemini_api_key_here
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
DATA_GOV_API_KEY=your_data_gov_api_key_here
```

> **Note:** The app includes fallback engines for all external APIs. It runs without keys, but with limited data.

### 4. Run locally
```bash
# Terminal 1 — Backend API (http://localhost:5001)
npm run dev:server

# Terminal 2 — Frontend (http://localhost:5173)
npm run dev:client
```

Open [http://localhost:5173](http://localhost:5173)

---

## Deployment

The project is pre-configured for **Vercel** via `vercel.json`.

### One-click deploy
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `sriharshapn/KisanSathi`
3. Vercel auto-detects the config — click **Deploy**

### CLI deploy
```bash
npx vercel --prod
```

---

## Data Integrity Promise

> **KisanSathi never fabricates a market price.**

All numerical market data (mandi prices, arrival volumes, price ranges) originates strictly from verified government sources (Agmarknet / data.gov.in). If verified data is unavailable for a crop or market, the app says so explicitly. Gemini AI is used only to explain, translate, and advise — never to generate prices.

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health check |
| `POST` | `/api/advisory` | AI crop advisory |
| `GET` | `/api/advisory/history` | Advisory history |
| `GET` | `/api/disease/reports` | Disease scan reports |
| `GET` | `/api/fields` | Saved field polygons |
| `POST` | `/api/fields` | Save field boundary |
| `GET` | `/api/weather` | Microclimate forecast |
| `GET` | `/api/satellite/ndvi` | NDVI telemetry |
| `GET` | `/api/gov/dashboard` | Gov data mesh dashboard |
| `GET` | `/api/interop/ngsi-ld/v1/entities` | ETSI NGSI-LD federated data |

---

## License

MIT License · Built with ❤️ for Indian farmers
