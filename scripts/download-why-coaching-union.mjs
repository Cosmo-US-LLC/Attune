import sharp from "sharp";
import { writeFile, mkdir } from "fs/promises";

const outDir = "public/life-coaching/desktop/why-coaching";
await mkdir(outDir, { recursive: true });

const assets = [
  {
    url: "https://www.figma.com/api/mcp/asset/f70e0d2f-97da-478b-8b8c-334686482004",
    file: "union-bg.webp",
  },
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
