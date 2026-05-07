import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import { get } from "https";
import { unlink } from "fs/promises";
import sharp from "sharp";

mkdirSync("public/about-us/hero/icons", { recursive: true });

const assets = [
  { url: "https://www.figma.com/api/mcp/asset/374d1024-f436-45d7-bb8f-7850d33eba62", dest: "public/about-us/hero/phone-frame.png", keepPng: true },
  { url: "https://www.figma.com/api/mcp/asset/6e933ae2-22eb-441e-9362-b4185dd4d8d4", dest: "public/about-us/hero/phone-screen-mask.png", keepPng: true },
  { url: "https://www.figma.com/api/mcp/asset/c052fa16-f243-425c-8fb3-5d74281d8b95", dest: "public/about-us/hero/coach-man.png" },
  { url: "https://www.figma.com/api/mcp/asset/491b3ea4-0835-4d4a-a023-e4c5fc41a5f0", dest: "public/about-us/hero/woman-pip.png" },
  { url: "https://www.figma.com/api/mcp/asset/6f9ff081-3bcb-4515-8be3-095701870f68", dest: "public/about-us/hero/icons/mic.png" },
  { url: "https://www.figma.com/api/mcp/asset/ad11d478-8e9c-4630-80a1-9cce64bb5cb4", dest: "public/about-us/hero/icons/video.png" },
  { url: "https://www.figma.com/api/mcp/asset/f35baa0e-a39e-4d4c-b6ef-8209f8993965", dest: "public/about-us/hero/icons/send.png" },
  { url: "https://www.figma.com/api/mcp/asset/29b3863f-3c8d-48d0-a0d3-76258cf93763", dest: "public/about-us/hero/icons/record.png" },
  { url: "https://www.figma.com/api/mcp/asset/8ce577d1-3ecc-455c-82fa-96c5b56ef8bd", dest: "public/about-us/hero/icons/message.png" },
  { url: "https://www.figma.com/api/mcp/asset/e21de31a-973b-4b96-b191-ff869b9c35f7", dest: "public/about-us/hero/icons/dots.png" },
  { url: "https://www.figma.com/api/mcp/asset/ca52c557-b10b-4acf-889c-bd29c728d2e2", dest: "public/about-us/hero/icons/bell.png" },
  { url: "https://www.figma.com/api/mcp/asset/8cd2e90d-2d7d-470d-a3f3-7cbadf921535", dest: "public/about-us/hero/icons/chevron.png" },
];

async function download(url, dest) {
  return new Promise((res, rej) => {
    const f = createWriteStream(dest);
    get(url, r => { pipeline(r, f).then(res).catch(rej); }).on("error", rej);
  });
}

console.log("Downloading hero phone assets...");
for (const { url, dest, keepPng } of assets) {
  try {
    await download(url, dest);
    if (keepPng) { console.log("✓ (png)", dest); continue; }
    const webp = dest.replace(".png", ".webp");
    await sharp(dest).webp({ quality: 90 }).toFile(webp);
    await unlink(dest);
    console.log("✓", webp);
  } catch (e) {
    console.warn("✗", dest, e.message);
  }
}
console.log("Done.");
