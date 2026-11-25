# CosmeScan Public REST API v1 — Cosmetic & Perfume Batch Code Decoder (2,375 Brands)

[![API Docs](https://img.shields.io/badge/API%20Docs-cosmescan.com%2Fapi--docs-3E7B5B)](https://cosmescan.com/api-docs/)
[![OpenAPI 3.1](https://img.shields.io/badge/OpenAPI-3.1.0-261F1C)](https://cosmescan.com/api/v1/openapi.json)
[![Auth](https://img.shields.io/badge/Auth-None-3E7B5B)](https://cosmescan-vision.guillaumefric0.workers.dev/v1)
[![CORS](https://img.shields.io/badge/CORS-Enabled%20(*)-3E7B5B)](https://cosmescan-vision.guillaumefric0.workers.dev/v1)
[![HTTPS](https://img.shields.io/badge/HTTPS-Yes-3E7B5B)](https://cosmescan-vision.guillaumefric0.workers.dev/v1)
[![License: CC BY 4.0](https://img.shields.io/badge/Data%20License-CC%20BY%204.0-lightgrey)](https://creativecommons.org/licenses/by/4.0/)

Free, public, read-only REST API for decoding **cosmetic, skincare, K-Beauty, and perfume batch codes across 2,375 brands** (LVMH, L'Oréal, Estée Lauder, Chanel, Coty, Puig, Shiseido, K-Beauty, and indie houses).

- **Documentation & Live Playground:** https://cosmescan.com/api-docs/
- **OpenAPI 3.1 Spec:** https://cosmescan.com/api/v1/openapi.json (also at `/v1/openapi.json`)
- **Base URL:** `https://cosmescan-vision.guillaumefric0.workers.dev`
- **No API key required** (`Auth: No`) · **HTTPS only** (`HTTPS: Yes`) · **CORS enabled** (`Access-Control-Allow-Origin: *`)
- **Fair-use rate limit:** `6 requests/minute` and `30 requests/hour` per IP (`X-RateLimit-*` headers + HTTP `429` with `Retry-After`)

---

## Live Endpoints

### 1. Decode a batch code
```http
GET https://cosmescan-vision.guillaumefric0.workers.dev/v1/decode?brand=dior&code=4B01
```

Optional query parameter: `lang` (`en`, `fr`, `es`, `de`, `it`, `pt`, `pl`, `ja`, `zh`, `ko`, `ru`, `ar`).

```json
{
  "brand": {
    "id": "dior",
    "name": "Christian Dior",
    "conglomerate": "LVMH",
    "category": "Haute Parfumerie & Beauté",
    "formatExample": "4B01 (4 chars)",
    "unopenedShelfLifeMonths": 48,
    "defaultPaoMonths": 36,
    "hasDecennialCycle": true,
    "url": "https://cosmescan.com/brand/dior/"
  },
  "inputCode": "4B01",
  "normalizedCode": "4B01",
  "status": "FRESH",
  "statusLabel": "Fresh & Potent",
  "datePrecision": "month",
  "productionDate": "2024-02-01",
  "productionDateFormatted": "February 2024",
  "expiryDate": "2028-02-01",
  "expiryDateFormatted": "February 2028",
  "ageMonths": 33,
  "remainingMonths": 15,
  "knownClonedCode": false,
  "activeRecallsCount": 0,
  "sourceUrl": "https://cosmescan.com/brand/dior/",
  "attribution": "Powered by CosmeScan (https://cosmescan.com)"
}
```

### 2. Search supported brands (2,375 brands)
```http
GET https://cosmescan-vision.guillaumefric0.workers.dev/v1/brands?q=dior&limit=20&offset=0
```

### 3. Get single brand metadata & batch code format
```http
GET https://cosmescan-vision.guillaumefric0.workers.dev/v1/brands/dior
```

### 4. OpenAPI 3.1 Specification
```http
GET https://cosmescan-vision.guillaumefric0.workers.dev/v1/openapi.json
```

---

## Quick Start

### cURL
```bash
# Decode a Christian Dior batch code
curl -s "https://cosmescan-vision.guillaumefric0.workers.dev/v1/decode?brand=dior&code=4B01" | jq '{brand: .brand.name, productionDate, status, knownClonedCode}'

# Search brands
curl -s "https://cosmescan-vision.guillaumefric0.workers.dev/v1/brands?q=chanel&limit=5" | jq '.brands[] | {id, name, formatExample}'
```

### JavaScript / Node.js (`examples/node-example.mjs`)
```javascript
const res = await fetch("https://cosmescan-vision.guillaumefric0.workers.dev/v1/decode?brand=dior&code=4B01");
const data = await res.json();
console.log(`${data.brand.name} — manufactured ${data.productionDateFormatted} (${data.statusLabel})`);
```

### Python (`examples/python_example.py`)
```python
import requests

data = requests.get(
    "https://cosmescan-vision.guillaumefric0.workers.dev/v1/decode",
    params={"brand": "dior", "code": "4B01"},
    timeout=10,
).json()
print(f"{data['brand']['name']} — manufactured {data['productionDateFormatted']} ({data['statusLabel']})")
```

---

## Resources
- **API Documentation & Live Playground:** https://cosmescan.com/api-docs/
- **Web Decoder (12 languages):** https://cosmescan.com
- **Free Embeddable Widget:** https://cosmescan.com/embed/
- **2026 Cosmetic Counterfeit Observatory (306 cloned batch codes):** https://cosmescan.com/observatory-2026/
- **EU Regulation (EC) 1223/2009 Methodology:** https://cosmescan.com/methodology/
- **LLM-friendly index:** https://cosmescan.com/llms.txt

## Attribution & License
Data & API responses are provided free for non-abusive use under **CC BY 4.0** — attribution with a link to `https://cosmescan.com` is appreciated. Code examples in this repository are MIT-licensed.
