# CosmeScan Open API — Cosmetic & Perfume Batch Code Reference (2,375 Brands)

[![Website](https://img.shields.io/badge/Website-cosmescan.com-261F1C)](https://cosmescan.com)
[![Auth](https://img.shields.io/badge/Auth-None-3E7B5B)](https://cosmescan.com/api/v1/brands.json)
[![CORS](https://img.shields.io/badge/CORS-Enabled%20(*)-3E7B5B)](https://cosmescan.com/api/v1/brands.json)
[![HTTPS](https://img.shields.io/badge/HTTPS-Yes-3E7B5B)](https://cosmescan.com/api/v1/brands.json)
[![License: CC BY 4.0](https://img.shields.io/badge/Data%20License-CC%20BY%204.0-lightgrey)](https://creativecommons.org/licenses/by/4.0/)

Free, public, read-only JSON API providing structured metadata for **2,375 cosmetic, skincare, K-Beauty, and fragrance brands**, including batch code formats, physical code locations (multilingual), conglomerates, and canonical reference links.

- **No API key required** (`Auth: No`)
- **HTTPS only** (`HTTPS: Yes`)
- **CORS enabled** (`Access-Control-Allow-Origin: *`, `CORS: Yes`)
- **Backed by** [CosmeScan](https://cosmescan.com) — independent cosmetic batch code decoder, [2026 Counterfeit Observatory](https://cosmescan.com/observatory-2026/) (306 documented cloned batch codes), and [EU CE 1223/2009 Methodology](https://cosmescan.com/methodology/).

---

## Endpoints

### 1. List all 2,375 brands
```http
GET https://cosmescan.com/api/v1/brands.json
```

Returns a JSON array of 2,375 brand objects:

```json
[
  {
    "id": "100-percent-pure",
    "name": "100% PURE",
    "conglomerate": "Purity Cosmetics",
    "category": "Fruit Pigmented Cosmetics & Skincare",
    "url": "https://cosmescan.com/brand/100-percent-pure/",
    "urlFr": "https://cosmescan.com/fr/marque/100-percent-pure/",
    "api": "https://cosmescan.com/api/v1/brand/100-percent-pure.json"
  }
]
```

### 2. Get detailed brand & batch code specification
```http
GET https://cosmescan.com/api/v1/brand/{id}.json
```

Example: `GET https://cosmescan.com/api/v1/brand/dior.json`

```json
{
  "id": "dior",
  "name": "Christian Dior",
  "conglomerate": "LVMH",
  "category": "Haute Parfumerie & Beauté",
  "batchCode": {
    "format": "4B01 (4 chars)",
    "locationFr": "Gravé au laser sous le verre du flacon ou gaufré sur la boîte",
    "locationEn": "Laser-etched on glass bottom or embossed on box base flap",
    "locations": {
      "en": "Laser-etched on glass bottom or embossed on box base flap",
      "fr": "Gravé au laser sous le verre du flacon ou gaufré sur la boîte"
    }
  }
}
```

---

## Quick Start

### cURL
```bash
# Fetch the full brand index (2,375 brands)
curl -s https://cosmescan.com/api/v1/brands.json | jq 'length'

# Fetch batch code metadata for Christian Dior
curl -s https://cosmescan.com/api/v1/brand/dior.json | jq '{name, conglomerate, batchCode: .batchCode.format}'
```

### JavaScript / Node.js (`examples/node-example.mjs`)
```javascript
const res = await fetch("https://cosmescan.com/api/v1/brand/dior.json");
const brand = await res.json();
console.log(`${brand.name} (${brand.conglomerate}) — format: ${brand.batchCode.format}`);
```

### Python (`examples/python_example.py`)
```python
import requests

brand = requests.get("https://cosmescan.com/api/v1/brand/dior.json", timeout=10).json()
print(f"{brand['name']} ({brand['conglomerate']}) — format: {brand['batchCode']['format']}")
```

---

## Free Embeddable Widget & Resources
- **Live Decoder (12 languages):** https://cosmescan.com
- **Free Embeddable Widget & 1-line HTML Badge:** https://cosmescan.com/embed/
- **2026 Cosmetic Counterfeit Observatory (306 cloned batch codes):** https://cosmescan.com/observatory-2026/
- **EU Regulation (EC) 1223/2009 Methodology:** https://cosmescan.com/methodology/
- **LLM-friendly index:** https://cosmescan.com/llms.txt

## Attribution & License
Data is provided free of charge under **CC BY 4.0** — attribution with a link to `https://cosmescan.com` is appreciated. Code examples in this repository are MIT-licensed.
