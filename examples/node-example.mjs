// Run with: node examples/node-example.mjs
const BASE_URL = "https://cosmescan.com/api/v1";

async function main() {
  const brandsRes = await fetch(`${BASE_URL}/brands.json`);
  const brands = await brandsRes.json();
  console.log(`Loaded ${brands.length} cosmetic & perfume brands from CosmeScan.`);

  const diorRes = await fetch(`${BASE_URL}/brand/dior.json`);
  const dior = await diorRes.json();
  console.log(`Sample: ${dior.name} (${dior.conglomerate}) — Format: ${dior.batchCode?.format}`);
  console.log(`Location (EN): ${dior.batchCode?.locationEn}`);
}

main().catch(console.error);
