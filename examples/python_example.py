"""Run with: python examples/python_example.py"""
import requests

BASE_URL = "https://cosmescan.com/api/v1"


def main():
    brands = requests.get(f"{BASE_URL}/brands.json", timeout=10).json()
    print(f"Loaded {len(brands)} cosmetic & perfume brands from CosmeScan.")

    dior = requests.get(f"{BASE_URL}/brand/dior.json", timeout=10).json()
    print(f"Sample: {dior['name']} ({dior['conglomerate']}) — Format: {dior['batchCode']['format']}")
    print(f"Location (EN): {dior['batchCode']['locationEn']}")


if __name__ == "__main__":
    main()
