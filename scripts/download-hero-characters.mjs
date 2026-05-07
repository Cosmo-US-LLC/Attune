import sharp from "sharp";
import { writeFile, mkdir } from "fs/promises";

const outDir = "public/life-coaching/desktop/hero";
await mkdir(outDir, { recursive: true });

const assets = [
  { url: "https://www.figma.com/api/mcp/asset/a4037644-e701-4059-ae17-e1d6c7a6a7bf", file: "character-1.webp" },
  { url: "https://www.figma.com/api/mcp/asset/69aec06a-1c52-4e34-bfc6-6aae52adb84f", file: "character-2.webp" },
  { url: "https://www.figma.com/api/mcp/asset/5e588ecd-2293-48f1-b290-a2fd8f6a3c29", file: "character-3.webp" },
  { url: "https://www.figma.com/api/mcp/asset/333ae0f5-6841-44f1-bbf9-6c6c3c73a141", file: "character-4.webp" },
  { url: "https://www.figma.com/api/mcp/asset/5e345a66-3d28-472c-a2e6-4e60edb1fb67", file: "character-5.webp" },
];

for (const { url, file } of assets) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const outPath = `${outDir}/${file}`;
    await sharp(buf).webp({ quality: 90 }).toFile(outPath);
    console.log(`✓ ${file}`);
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}
console.log("Done.");
