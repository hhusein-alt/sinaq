import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join } from "path";

const BASE = "public";

const IMAGES = [
  // Logo ticker logos
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/us_ca/bloomberg.svg",
  "https://cdn-assets.theforage.com/vinternships/companyassets/qbcPPWhE6mhQeKgdy/aKzq7v9PZGmKezDeX/1764819888879/clifford-chance-black.svg",
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/us_ca/cbre.svg",
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/other/pfizer.svg",
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/gb_eu/british-airways.svg",
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/us_ca/lloyds.svg",
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/us_ca/morrison-foerster.svg",
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/us_ca/citi.svg",
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/gb_eu/whitecase.svg",
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/us_ca/skyscanner.svg",
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/us_ca/jpmorgan.svg",
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/us_ca/walmart.svg",
  "https://cdn-assets.theforage.com/firm_logos/firm-logo-ticker-logos/v2/us_ca/goldman-sachs.svg",
  // Favicons
  "https://cdn-assets.theforage.com/favicon/favicon-16x16.png",
  "https://cdn-assets.theforage.com/favicon/favicon-32x32.png",
  "https://cdn-assets.theforage.com/favicon/favicon-96x96.png",
  "https://cdn-assets.theforage.com/favicon/apple-icon-180x180.png",
];

async function download(url, destPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  FAIL ${res.status}: ${url}`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const dir = dirname(destPath);
    if (!existsSync(dir)) await mkdir(dir, { recursive: true });
    await writeFile(destPath, buffer);
    console.log(`  OK: ${destPath}`);
    return true;
  } catch (e) {
    console.error(`  ERROR: ${url} - ${e.message}`);
    return false;
  }
}

async function main() {
  console.log("Downloading assets...\n");

  // Download in batches of 4
  let ok = 0;
  let fail = 0;

  for (let i = 0; i < IMAGES.length; i += 4) {
    const batch = IMAGES.slice(i, i + 4);
    const results = await Promise.all(
      batch.map((url) => {
        const filename = url.split("/").pop();
        // Route favicons to seo/, logos to images/logos/
        let dest;
        if (url.includes("favicon") || url.includes("apple-icon")) {
          dest = join(BASE, "seo", filename);
        } else {
          dest = join(BASE, "images", "logos", filename);
        }
        return download(url, dest);
      })
    );
    results.forEach((r) => (r ? ok++ : fail++));
  }

  console.log(`\nDone: ${ok} downloaded, ${fail} failed`);
}

main();
