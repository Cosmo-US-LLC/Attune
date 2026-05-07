import sharp from "sharp";
import { mkdir } from "fs/promises";

const assets = [
  // Hero info card icons
  { url: "https://www.figma.com/api/mcp/asset/29a02f0b-654c-4712-b29f-568594a9f6da", path: "public/contact-us/icons/location.webp" },
  { url: "https://www.figma.com/api/mcp/asset/3ff466cf-61b4-4341-bf14-7b2a70905bd8", path: "public/contact-us/icons/energy.webp" },
  { url: "https://www.figma.com/api/mcp/asset/d03cf2c4-eca2-46a4-9f91-018a09696f50", path: "public/contact-us/icons/security.webp" },
  // Stats section
  { url: "https://www.figma.com/api/mcp/asset/87224870-c17e-46e8-b90e-bbd69fd25364", path: "public/contact-us/stats/star.webp" },
  // Footer
  { url: "https://www.figma.com/api/mcp/asset/92fb0fda-61b4-4526-bca3-77b516cee053", path: "public/contact-us/footer/feel-attune.webp" },
  { url: "https://www.figma.com/api/mcp/asset/7b5b388c-8920-4555-8c86-2eab02f49078", path: "public/contact-us/footer/social-linkedin.webp" },
  { url: "https://www.figma.com/api/mcp/asset/4bdb4cab-cf7a-4fff-a495-4d8c2321a0c9", path: "public/contact-us/footer/social-facebook.webp" },
  { url: "https://www.figma.com/api/mcp/asset/82f0355c-02a1-49b4-b080-faba5183b682", path: "public/contact-us/footer/social-instagram.webp" },
];

// Create all needed dirs
const dirs = [...new Set(assets.map(a => a.path.replace(/\/[^/]+$/, "")))];
for (const dir of dirs) await mkdir(dir, { recursive: true });

for (const { url, path } of assets) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await sharp(buf).webp({ quality: 90 }).toFile(path);
    console.log(`✓ ${path}`);
  } catch (e) {
    console.error(`✗ ${path}: ${e.message}`);
  }
}
console.log("Done.");
