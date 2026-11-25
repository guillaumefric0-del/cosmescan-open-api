// Example: Decode a cosmetic/perfume batch code using CosmeScan Public REST API v1
const url = 'https://cosmescan-vision.guillaumefric0.workers.dev/v1/decode?brand=dior&code=4B01';

const res = await fetch(url);
if (!res.ok) {
  throw new Error(`HTTP ${res.status}: ${await res.text()}`);
}

const data = await res.json();
console.log(`${data.brand.name} (${data.brand.conglomerate})`);
console.log(`Batch: ${data.normalizedCode} | Manufactured: ${data.productionDateFormatted} | Status: ${data.statusLabel}`);
console.log(`Source: ${data.sourceUrl}`);
