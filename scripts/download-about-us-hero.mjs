/**
 * Downloads the About Us Hero phone mockup assets.
 * phone-frame and phone-screen-mask are kept as PNG (alpha channel needed for masking).
 * coach-man and woman-pip are converted to WebP.
 */
import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import { get } from "https";
import sharp from "sharp";
import { unlink } from "fs/promises";

const DIR = "public/about-us/hero";
mkdirSync(DIR, { recursive: true });

const assets = [
  // Phone frame — keep as PNG (needs alpha transparency for overlay)
  {
    url: "https://www.figma.com/api/mcp/asset/c818ea0e-e285-4622-8d3e-bbfcab76dd42",
    dest: `${DIR}/phone-frame.png`,
    keepPng: true,
  },
  // Phone screen mask — keep as PNG (alpha channel defines the screen clipping shape)
  {
    url: "https://www.figma.com/api/mcp/asset/299ed911-9da0-44f5-a65b-0caa82cc497d",
    dest: `${DIR}/phone-screen-mask.png`,
    keepPng: true,
  },
  // Coach man photo (main screen content) — convert to WebP
  {
    url: "https://www.figma.com/api/mcp/asset/1f2753ce-af1f-418c-9a83-316d362acec6",
    dest: `${DIR}/coach-man.png`,
    keepPng: false,
  },
  // Woman PIP photo — convert to WebP
  {
    url: "https://www.figma.com/api/mcp/asset/803cec49-1fbe-40b7-ac34-aedb0b030296",
    dest: `${DIR}/woman-pip.png`,
    keepPng: false,
  },
];

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(dest);
    get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      pipeline(res, file).then(resolve).catch(reject);
    }).on("error", reject);
  });
}

console.log("Downloading Hero phone mockup assets...");
for (const { url, dest, keepPng } of assets) {
  try {
    await download(url, dest);
    if (keepPng) {
      console.log(`✓ ${dest} (PNG kept)`);
    } else {
      const webp = dest.replace(".png", ".webp");
      await sharp(dest).webp({ quality: 90 }).toFile(webp);
      await unlink(dest);
      console.log(`✓ ${webp}`);
    }
  } catch (e) {
    console.warn(`✗ ${dest}: ${e.message}`);
  }
}
console.log("Done.");
