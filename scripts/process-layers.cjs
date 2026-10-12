const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function run() {
  const inputPath = path.join(__dirname, '../public/macbook-exploded.jpg');
  const outputDir = path.join(__dirname, '../public/macbook-layers');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Image dimensions: ${width}x${height}, channels: ${channels}`);

  const rgba = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    const brightness = (r + g + b) / 3;

    rgba[dstIdx] = r;
    rgba[dstIdx + 1] = g;
    rgba[dstIdx + 2] = b;

    if (r > 248 && g > 248 && b > 248) {
      rgba[dstIdx + 3] = 0;
    } else if (brightness > 236 && r > 230 && g > 230 && b > 230) {
      const alphaFactor = Math.max(0, Math.min(1, 1 - (brightness - 236) / 14));
      rgba[dstIdx + 3] = Math.round(255 * alphaFactor);
    } else {
      rgba[dstIdx + 3] = 255;
    }
  }

  // Save the full transparent composite
  const fullTransparentPath = path.join(__dirname, '../public/macbook-exploded-transparent.png');
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 8 })
    .toFile(fullTransparentPath);
  console.log(`Saved: ${fullTransparentPath}`);

  // Define layers
  const layers = [
    { id: 'screen', name: '01-screen', top: 30, bottom: 215 },
    { id: 'lid', name: '02-lid', top: 216, bottom: 308 },
    { id: 'keyboard', name: '03-keyboard', top: 309, bottom: 490 },
    { id: 'logicboard', name: '04-logicboard', top: 491, bottom: 602 },
    { id: 'battery', name: '05-battery', top: 603, bottom: 680 },
    { id: 'trackpad', name: '06-trackpad-speakers', top: 681, bottom: 780 },
    { id: 'chassis', name: '07-chassis', top: 781, bottom: 940 },
    { id: 'screws', name: '08-screws', top: 941, bottom: 995 }
  ];

  for (const l of layers) {
    const h = l.bottom - l.top;
    const outPath = path.join(outputDir, `${l.name}.png`);
    await sharp(rgba, { raw: { width, height, channels: 4 } })
      .extract({ left: 0, top: l.top, width, height: h })
      .png({ compressionLevel: 8 })
      .toFile(outPath);
    console.log(`Saved layer: ${l.name} (${width}x${h})`);
  }

  console.log('All layers processed successfully!');
}

run().catch((err) => {
  console.error('Error processing layers:', err);
  process.exit(1);
});
