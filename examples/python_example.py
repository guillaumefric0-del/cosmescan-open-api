import requests

resp = requests.get(
    "https://cosmescan-vision.guillaumefric0.workers.dev/v1/decode",
    params={"brand": "dior", "code": "4B01"},
    timeout=10,
)
resp.raise_for_status()
data = resp.json()

print(f"{data['brand']['name']} ({data['brand']['conglomerate']})")
print(f"Batch: {data['normalizedCode']} | Manufactured: {data['productionDateFormatted']} | Status: {data['statusLabel']}")
print(f"Source: {data['sourceUrl']}")
