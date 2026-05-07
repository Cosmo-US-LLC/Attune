import sharp from 'sharp';
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const assets = [
  // Hero section
  { url: "https://www.figma.com/api/mcp/asset/119d8488-e5f8-4479-b87a-41a868e3ed3b", dest: "public/life-coaching/desktop/hero/character-group.webp" },
  { url: "https://www.figma.com/api/mcp/asset/67faf506-4bdb-4886-84bf-d497d37d4521", dest: "public/life-coaching/desktop/hero/cashback-icon.webp" },
  { url: "https://www.figma.com/api/mcp/asset/65fc03a9-4ba6-43c6-82af-2fecf0ba0a3a", dest: "public/life-coaching/desktop/hero/character-1.webp" },
  { url: "https://www.figma.com/api/mcp/asset/2790f4fd-51ee-4cb3-96db-1bbb5d27bf2f", dest: "public/life-coaching/desktop/hero/character-2.webp" },
  { url: "https://www.figma.com/api/mcp/asset/4436af0a-fed6-45a0-90c7-719a1cc00a1c", dest: "public/life-coaching/desktop/hero/character-3.webp" },
  { url: "https://www.figma.com/api/mcp/asset/bbb74af7-f33a-4f63-a57f-c5632fe7ea90", dest: "public/life-coaching/desktop/hero/character-4.webp" },
  { url: "https://www.figma.com/api/mcp/asset/cc562afc-309b-4618-84d2-436537e7f554", dest: "public/life-coaching/desktop/hero/character-5.webp" },

  // How It Works — checkmark icon
  { url: "https://www.figma.com/api/mcp/asset/561e8562-1817-4145-b63f-e24203ae2ab7", dest: "public/life-coaching/desktop/how-it-works/checkmark.webp" },

  // Real Outcomes
  { url: "https://www.figma.com/api/mcp/asset/830da94c-7e77-4cf9-b4a8-9ef4fc1ba03e", dest: "public/life-coaching/desktop/real-outcomes/divider-v.webp" },
  { url: "https://www.figma.com/api/mcp/asset/b0787b71-32ef-41a2-b2cc-b974a58a72c4", dest: "public/life-coaching/desktop/real-outcomes/divider-h.webp" },
  { url: "https://www.figma.com/api/mcp/asset/1851dfcd-3551-4673-856b-803949de6c2c", dest: "public/life-coaching/desktop/real-outcomes/coach-illustration.webp" },

  // Quiz — checkmark icon
  { url: "https://www.figma.com/api/mcp/asset/53788c56-6a68-4b15-be59-d21cf08ed59a", dest: "public/life-coaching/desktop/quiz/checkmark.webp" },

  // Why Choose Coaching
  { url: "https://www.figma.com/api/mcp/asset/d895d940-b68f-43ed-a03c-bf4421b747dd", dest: "public/life-coaching/desktop/why-coaching/character-card-1.webp" },
  { url: "https://www.figma.com/api/mcp/asset/e794fc5e-daf8-47d5-9ace-d8262a737db3", dest: "public/life-coaching/desktop/why-coaching/character-card-2.webp" },
  { url: "https://www.figma.com/api/mcp/asset/ba02e016-f04c-4cba-a2d7-27bacdfd4ef7", dest: "public/life-coaching/desktop/why-coaching/character-card-3.webp" },
  { url: "https://www.figma.com/api/mcp/asset/b6abc720-8287-4e4d-9f42-ac217399c1b3", dest: "public/life-coaching/desktop/why-coaching/background-union.webp" },

  // Pricing — checkmark icon
  { url: "https://www.figma.com/api/mcp/asset/bdd872fa-d083-44fe-a61d-fd0e95b27f27", dest: "public/life-coaching/desktop/pricing/checkmark.webp" },

  // Testimonials — star icon
  { url: "https://www.figma.com/api/mcp/asset/ec8ed9f0-d38b-46ed-a88c-b2ccb9e847d8", dest: "public/life-coaching/desktop/testimonials/star.webp" },

  // Guarantee section
  { url: "https://www.figma.com/api/mcp/asset/a3d97d3d-401e-405c-8692-4e6478659d05", dest: "public/life-coaching/desktop/guarantee/character-1.webp" },
  { url: "https://www.figma.com/api/mcp/asset/11af0bdb-fed8-49a5-a52e-936557af8a45", dest: "public/life-coaching/desktop/guarantee/character-2.webp" },
  { url: "https://www.figma.com/api/mcp/asset/058242b7-6aa8-4918-beca-138a47778f9b", dest: "public/life-coaching/desktop/guarantee/character-3.webp" },
  { url: "https://www.figma.com/api/mcp/asset/bc2fd587-7d30-4070-8452-28d7fe6b393c", dest: "public/life-coaching/desktop/guarantee/character-4.webp" },
  { url: "https://www.figma.com/api/mcp/asset/22118d1a-1226-4947-be02-52cd49fc39d5", dest: "public/life-coaching/desktop/guarantee/character-5.webp" },
  { url: "https://www.figma.com/api/mcp/asset/aee7f579-cf4f-41e6-bae0-04faaf30b64e", dest: "public/life-coaching/desktop/guarantee/character-6.webp" },

  // Begin Journey section
  { url: "https://www.figma.com/api/mcp/asset/60271d6b-6a9c-4f38-ad02-05aa20b5950d", dest: "public/life-coaching/desktop/begin-journey/bg-vector.webp" },
  { url: "https://www.figma.com/api/mcp/asset/35de6252-5668-4b67-9c05-c8ff5d42c0cc", dest: "public/life-coaching/desktop/begin-journey/photo-frame.webp" },
  { url: "https://www.figma.com/api/mcp/asset/eddc90d2-c729-4c80-86b1-94da0edec627", dest: "public/life-coaching/desktop/begin-journey/photo-bg.webp" },
  { url: "https://www.figma.com/api/mcp/asset/f5742353-003b-47be-a65f-79868c728271", dest: "public/life-coaching/desktop/begin-journey/photo-main.webp" },
  { url: "https://www.figma.com/api/mcp/asset/0128fa35-d4d3-4486-9662-bb8bcea61ed6", dest: "public/life-coaching/desktop/begin-journey/doodle-phone.webp" },
];

const succeeded = [];
const failed = [];

for (const asset of assets) {
  const destPath = join(ROOT, asset.dest);
  await mkdir(dirname(destPath), { recursive: true });

  try {
    const res = await fetch(asset.url);
    if (!res.ok) {
      console.error(`FAILED (HTTP ${res.status}): ${asset.dest}`);
      failed.push({ dest: asset.dest, reason: `HTTP ${res.status}` });
      continue;
    }
    const buffer = Buffer.from(await res.arrayBuffer());

    await sharp(buffer).webp({ quality: 85 }).toFile(destPath);

    const stat = await import('fs/promises').then(m => m.stat(destPath));
    const kb = (stat.size / 1024).toFixed(1);
    console.log(`✓ ${asset.dest} (${kb} KB)`);
    succeeded.push({ dest: asset.dest, kb });
  } catch (err) {
    console.error(`FAILED: ${asset.dest} — ${err.message}`);
    failed.push({ dest: asset.dest, reason: err.message });
  }
}

console.log(`\n=== Summary ===`);
console.log(`Downloaded: ${succeeded.length}/${assets.length}`);
if (failed.length > 0) {
  console.log(`\nFailed (${failed.length}):`);
  for (const f of failed) console.log(`  ✗ ${f.dest}: ${f.reason}`);
}
