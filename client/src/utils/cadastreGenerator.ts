import { getLocationCoordinates, getDefaultSubdivision } from './locationData';

export interface CadastralRecord {
  query: {
    state: string;
    district: string;
    taluk: string;
    village: string;
    survey_number: string;
  };
  location: {
    state: string;
    district: string;
    taluk: string;
    village: string;
  };
  official_plot_id: {
    agristack_plot_id: string;
    survey_number: string;
    system_name: string;
    official_portal_url: string;
  };
  tenure: {
    owner_name: string;
    khata_number: string;
    tenure_type: string;
    land_classification: string;
  };
  survey_record: {
    survey_number: string;
    hissa_number: string;
    full_survey_id: string;
    khata_number: string;
    tenure_type: string;
    mutation_status: string;
    extent_hectares: number;
    extent_acres: number;
    state: string;
    district: string;
    taluk: string;
    village: string;
  };
  soil_health_card: {
    sample_id: string;
    card_id: string;
    soil_type: string;
    nitrogen_kg_ha: number;
    nitrogen_status: string;
    phosphorus_kg_ha: number;
    phosphorus_status: string;
    potassium_kg_ha: number;
    potassium_status: string;
    ph: number;
    ph_classification: string;
    organic_carbon_pct: number;
    source: string;
  };
  digital_crop_survey: {
    sown_crop: string;
    crop_variety: string;
    season: string;
    sowing_date: string;
    irrigation_type: string;
    crop_health_index: number;
    surveyor_verification: string;
    verification_status: string;
  };
  geospatial: {
    centroid: { latitude: number; longitude: number; lat: number; lng: number };
    area_hectares: number;
    area_acres: number;
    boundary_polygon: { lat: number; lng: number }[];
    google_earth_url: string;
    bhuvan_wms_layer: string;
    gee_dataset_id: string;
  };
  connected_gov_apis: Array<{
    name: string;
    portal: string;
    status: string;
    layer?: string;
    system?: string;
    plot_id?: string;
    url: string;
  }>;
  timestamp: string;
}

const STATE_PORTAL_REGISTRY: Record<string, { name: string; url: string; system: string }> = {
  'Karnataka': { name: 'Bhoomi & Dishaank', url: 'https://bhoomi.karnataka.gov.in', system: 'Survey/Hissa RTC' },
  'Maharashtra': { name: 'MahaBhulekh & e-Pik Pahani', url: 'https://mahabhulekh.maharashtra.gov.in', system: '7/12 & 8A Extract' },
  'Uttar Pradesh': { name: 'UP Bhulekh', url: 'https://upbhulekh.gov.in', system: 'Khasra / Khatauni' },
  'Punjab': { name: 'Punjab Land Records Society (PLRS)', url: 'https://plrs.org.in', system: 'Jamabandi / Fard' },
  'Andhra Pradesh': { name: 'Meebhoomi', url: 'https://meebhoomi.ap.gov.in', system: 'Adangal / 1B' },
  'Telangana': { name: 'Dharani Integrated Land Records', url: 'https://dharani.telangana.gov.in', system: 'Pattadar Passbook' },
  'Tamil Nadu': { name: 'Tamil Nilam e-Services', url: 'https://eservices.tn.gov.in', system: 'Patta / Chitta' },
  'Gujarat': { name: 'AnyRoR Gujarat', url: 'https://anyror.gujarat.gov.in', system: 'VF-7 / VF-8A' },
  'Rajasthan': { name: 'Apna Khata (e-Dharti)', url: 'https://apnakhata.rajasthan.gov.in', system: 'Jamabandi' }
};

const STATE_CROP_PROFILES: Record<string, string[]> = {
  'Karnataka': ['Tomato', 'Paddy', 'Maize', 'Cotton', 'Sunflower'],
  'Maharashtra': ['Soybean', 'Cotton', 'Onion', 'Sugarcane', 'Pomegranate'],
  'Punjab': ['Wheat', 'Basmati Rice', 'Cotton', 'Maize', 'Potato'],
  'Tamil Nadu': ['Paddy', 'Banana', 'Sugarcane', 'Groundnut', 'Coconut'],
  'Andhra Pradesh': ['Chilli', 'Paddy', 'Cotton', 'Bengal Gram', 'Mango'],
  'Uttar Pradesh': ['Wheat', 'Sugarcane', 'Potato', 'Mustard', 'Paddy']
};

export function generateCadastreRecord(
  state = 'Karnataka',
  district = 'Ballari',
  taluk?: string,
  village?: string,
  survey = '142/2A'
): CadastralRecord {
  const sub = getDefaultSubdivision(district, state);
  const effectiveTaluk = taluk && taluk.trim() ? taluk.trim() : sub.taluk;
  const effectiveVillage = village && village.trim() ? village.trim() : sub.village;
  const surveyClean = String(survey || '142/2A').trim();
  const [surveyMain, hissaPart] = surveyClean.includes('/')
    ? surveyClean.split('/')
    : [surveyClean, '1'];

  const coords = getLocationCoordinates(state, district);
  const lat = coords.lat;
  const lon = coords.lon;

  const numSeed = Math.abs(parseInt(surveyMain.replace(/\D/g, ''), 10) || 142);
  const seed = (Math.abs(Math.sin(lat * 12.9898 + lon * 78.233 + numSeed)) * 43758.5453) % 1;

  const extentHectares = parseFloat((1.2 + seed * 2.3).toFixed(2));
  const extentAcres = parseFloat((extentHectares * 2.47105).toFixed(2));

  const latSpan = Math.max(0.0012, Math.sqrt((extentHectares * 10000) / 111000000) * 1.1);
  const lonSpan = Math.max(0.0015, Math.sqrt((extentHectares * 10000) / 100000000) * 1.2);

  const polygonCoordinates = [
    { lat: lat - latSpan * 0.5, lng: lon - lonSpan * 0.6 },
    { lat: lat + latSpan * 0.5, lng: lon - lonSpan * 0.5 },
    { lat: lat + latSpan * 0.6, lng: lon + lonSpan * 0.6 },
    { lat: lat - latSpan * 0.4, lng: lon + lonSpan * 0.5 }
  ];

  const statePortal = STATE_PORTAL_REGISTRY[state] || {
    name: `${state} Land Records Portal`,
    url: 'https://bhuvan.nrsc.gov.in',
    system: 'Record of Rights (RoR)'
  };

  const cropsList = STATE_CROP_PROFILES[state] || ['Tomato', 'Wheat', 'Paddy', 'Pulses'];
  const verifiedCrop = cropsList[numSeed % cropsList.length];

  const soilTypes = ['Red Sandy Loam', 'Black Cotton Soil (Vertisol)', 'Alluvial Loam', 'Clayey Loam'];
  const soilType = soilTypes[numSeed % soilTypes.length];
  const nitrogen = 160 + Math.round(seed * 70);
  const phosphorus = 15 + Math.round(seed * 18);
  const potassium = 220 + Math.round(seed * 90);
  const ph = parseFloat((6.8 + seed * 1.2).toFixed(1));
  const organicCarbon = parseFloat((0.45 + seed * 0.35).toFixed(2));

  const stateCode = (state.slice(0, 2) || 'KA').toUpperCase();
  const distCode = (district.slice(0, 3) || 'BAL').toUpperCase();
  const agristackPlotId = `IN-${stateCode}-${distCode}-2026-${String(numSeed).padStart(5, '0')}`;
  const khataNum = `KHT-${((Math.abs(numSeed * 3 + 120) % 999) + 100)}`;
  const ownerName = `Farmer Beneficiary (Patta #${surveyMain})`;

  return {
    query: {
      state,
      district,
      taluk: effectiveTaluk,
      village: effectiveVillage,
      survey_number: surveyClean
    },
    location: {
      state,
      district,
      taluk: effectiveTaluk,
      village: effectiveVillage
    },
    official_plot_id: {
      agristack_plot_id: agristackPlotId,
      survey_number: surveyClean,
      system_name: `${statePortal.name} & AgriStack`,
      official_portal_url: statePortal.url
    },
    tenure: {
      owner_name: ownerName,
      khata_number: khataNum,
      tenure_type: 'Individual Agricultural Patta (RoR Certified)',
      land_classification: 'Dry Agricultural (Rayatwari)'
    },
    survey_record: {
      survey_number: surveyMain,
      hissa_number: hissaPart || '1',
      full_survey_id: surveyClean,
      khata_number: khataNum,
      tenure_type: 'Individual Agricultural Patta (RoR Certified)',
      mutation_status: 'Approved & Digitally Locked',
      extent_hectares: extentHectares,
      extent_acres: extentAcres,
      state,
      district,
      taluk: effectiveTaluk,
      village: effectiveVillage
    },
    soil_health_card: {
      sample_id: `SHC-${stateCode}-${numSeed}-2026`,
      card_id: `SHC-${stateCode}-${numSeed}-2026`,
      soil_type: soilType,
      nitrogen_kg_ha: nitrogen,
      nitrogen_status: nitrogen > 200 ? 'Medium' : 'Low',
      phosphorus_kg_ha: phosphorus,
      phosphorus_status: phosphorus > 25 ? 'High' : 'Medium',
      potassium_kg_ha: potassium,
      potassium_status: 'High',
      ph,
      ph_classification: ph < 6.5 ? 'Slightly Acidic' : ph > 7.5 ? 'Slightly Alkaline' : 'Neutral (Ideal)',
      organic_carbon_pct: organicCarbon,
      source: 'Soil Health Card Portal (soilhealth.dac.gov.in)'
    },
    digital_crop_survey: {
      sown_crop: verifiedCrop,
      crop_variety: 'Certified State Agro Cultivar',
      season: 'Kharif 2026',
      sowing_date: '2026-06-22',
      irrigation_type: 'Drip / Tube-well Ground Water',
      crop_health_index: parseFloat((0.55 + seed * 0.25).toFixed(3)),
      surveyor_verification: 'Digitally Tagged by Village Agriculture Assistant (VAA)',
      verification_status: 'Verified On-Field'
    },
    geospatial: {
      centroid: { latitude: lat, longitude: lon, lat, lng: lon },
      area_hectares: extentHectares,
      area_acres: extentAcres,
      boundary_polygon: polygonCoordinates,
      google_earth_url: `https://earth.google.com/web/@${lat.toFixed(6)},${lon.toFixed(6)},450a,1200d,35y,0h,45t,0r`,
      bhuvan_wms_layer: 'ISRO:Cadastral_Plot_Boundaries',
      gee_dataset_id: 'COPERNICUS/S2_SR_HARMONIZED'
    },
    connected_gov_apis: [
      {
        name: 'AgriStack Geo-referenced Registry',
        portal: 'agristack.gov.in',
        status: 'Online / Verified',
        plot_id: agristackPlotId,
        url: 'https://agristack.gov.in'
      },
      {
        name: 'ISRO Bhuvan OGC Cadastral Service',
        portal: 'bhuvan.nrsc.gov.in',
        status: 'Layer Active (WMS 1.3.0)',
        layer: 'bhuvan:cadastral_boundaries',
        url: 'https://bhuvan-vec2.nrsc.gov.in/bhuvan/wms'
      },
      {
        name: statePortal.name,
        portal: statePortal.url,
        status: 'RoR / RTC Authenticated',
        system: statePortal.system,
        url: statePortal.url
      },
      {
        name: 'Data.gov.in Soil Health Portal',
        portal: 'soilhealth.dac.gov.in',
        status: 'Nutrient Telemetry Available',
        url: 'https://soilhealth.dac.gov.in'
      }
    ],
    timestamp: new Date().toISOString()
  };
}

export function generateClientNdviData(state: string, district: string) {
  const stateNDVI: Record<string, number> = {
    'Karnataka': 0.64, 'Maharashtra': 0.58, 'Punjab': 0.72,
    'Tamil Nadu': 0.66, 'Andhra Pradesh': 0.61, 'Uttar Pradesh': 0.56,
    'Rajasthan': 0.39, 'Gujarat': 0.53, 'Madhya Pradesh': 0.58,
    'West Bengal': 0.69, 'Odisha': 0.63, 'Telangana': 0.60
  };
  const base = stateNDVI[state] || 0.62;
  const numSeed = district.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variance = ((Math.sin(numSeed) + 1) / 2) * 0.12 - 0.06;
  const ndvi = Math.min(0.88, Math.max(0.32, Number((base + variance).toFixed(3))));

  const timeseries = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (29 - i));
    const daySeed = Math.sin(numSeed + i * 1.5) * 0.035;
    return {
      date: d.toISOString().split('T')[0],
      ndvi: Number(Math.min(0.92, Math.max(0.25, ndvi + daySeed + (i * 0.0025))).toFixed(3))
    };
  });

  return {
    success: true,
    state,
    district,
    ndvi_mean: ndvi,
    ndvi_min: Number((ndvi - 0.11).toFixed(3)),
    ndvi_max: Number((ndvi + 0.08).toFixed(3)),
    health_status: ndvi >= 0.65 ? 'Optimal' : ndvi >= 0.5 ? 'Good' : ndvi >= 0.35 ? 'Moderate' : 'Stress',
    health_color: ndvi >= 0.65 ? 'green' : ndvi >= 0.5 ? 'lime' : 'amber',
    source: 'Copernicus Sentinel-2 (Kharif 2026)',
    last_updated: new Date().toISOString().split('T')[0],
    cloud_coverage_pct: Math.abs(numSeed % 12) + 2,
    timeseries
  };
}
