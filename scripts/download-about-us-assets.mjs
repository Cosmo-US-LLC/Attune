import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import { get } from "https";
import path from "path";
import sharp from "sharp";

const BASE = "public/about-us";
const dirs = [
  `${BASE}/hero`,
  `${BASE}/story`,
  `${BASE}/stats`,
  `${BASE}/commitments`,
  `${BASE}/cta`,
];
dirs.forEach((d) => mkdirSync(d, { recursive: true }));

const assets = [
  // Hero — phone mockup background + person images
  { url: "https://www.figma.com/api/mcp/asset/62507c84-8ee2-4df3-ae06-6b80c3f8a668", dest: `${BASE}/hero/phone-frame.png` },
  { url: "https://www.figma.com/api/mcp/asset/e752d8ee-adcb-4471-b474-a8835735f6dc", dest: `${BASE}/hero/coach-woman.png` },
  { url: "https://www.figma.com/api/mcp/asset/f22b5736-69bc-4d2e-abbb-8cabc4d488dd", dest: `${BASE}/hero/coach-thumb.png` },

  // Stats section — three coach photos
  { url: "https://www.figma.com/api/mcp/asset/da14a9c5-8191-473b-827b-225460cc4572", dest: `${BASE}/stats/coach-headset.png` },
  { url: "https://www.figma.com/api/mcp/asset/60063cff-c6e4-4213-b042-d20e45f8d6ad", dest: `${BASE}/stats/coach-phone.png` },
  { url: "https://www.figma.com/api/mcp/asset/217a5dcd-109b-4f8e-9a45-d635817936f3", dest: `${BASE}/stats/coach-laptop.png` },

  // Star icon (for rating card)
  { url: "https://www.figma.com/api/mcp/asset/a037999f-9bbf-40ca-8885-191cee54e4c5", dest: `${BASE}/stats/star.png` },

  // Commitment icons
  { url: "https://www.figma.com/api/mcp/asset/adbddac1-8d34-4809-a3fa-e1587e724f94", dest: `${BASE}/commitments/icon-person.png` },
  { url: "https://www.figma.com/api/mcp/asset/ee07c5c1-d253-4a8b-9b29-45fe3c3dcdd5", dest: `${BASE}/commitments/icon-insights.png` },
  { url: "https://www.figma.com/api/mcp/asset/cb002e53-2f40-44b4-82ae-956f19ba24f1", dest: `${BASE}/commitments/icon-brain.png` },
  { url: "https://www.figma.com/api/mcp/asset/59b2e356-56c8-4ef9-90d2-673d7d6793e4", dest: `${BASE}/commitments/icon-badge.png` },

  // CTA — woman photo
  { url: "https://www.figma.com/api/mcp/asset/fae35ff1-4357-47b3-b52c-9b4092dac49f", dest: `${BASE}/cta/woman.png` },

  // Checkmark icon (Our Story bullet)
  { url: "https://www.figma.com/api/mcp/asset/054e4d45-0ada-4003-9633-07f88ca6ad77", dest: `${BASE}/story/checkmark.png` },
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

async function convertToWebP(src) {
  const dest = src.replace(/\.png$/, ".webp");
  await sharp(src).webp({ quality: 90 }).toFile(dest);
  return dest;
}

console.log("Downloading About Us assets...");
for (const { url, dest } of assets) {
  try {
    await download(url, dest);
    const webp = await convertToWebP(dest);
    const { unlink } = await import("fs/promises");
    await unlink(dest);
    console.log(`✓ ${webp}`);
  } catch (e) {
    console.warn(`✗ ${dest}: ${e.message}`);
  }
}
console.log("Done.");
