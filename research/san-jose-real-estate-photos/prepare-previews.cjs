const path = require('node:path');
const sharp = require('sharp');

async function main() {
  const previews = [
    ['San Jose — editorial', 'san-jose-desktop.jpg'],
    ['Santa Clara — photo collage', 'santa-clara-desktop.jpg'],
    ['Milpitas — warm and modular', 'milpitas-desktop.jpg'],
  ];
  const composites = [];
  for (const [index, [title, file]] of previews.entries()) {
    const screenshot = await sharp(path.join(__dirname, file)).resize(480, 300).toBuffer();
    const label = Buffer.from(
      `<svg width="480" height="32"><rect width="480" height="32" fill="#182c36"/><text x="16" y="22" font-family="Arial,sans-serif" font-size="14" fill="white">${title}</text></svg>`,
    );
    composites.push({ input: label, left: index * 480, top: 0 });
    composites.push({ input: screenshot, left: index * 480, top: 32 });
  }
  await sharp({ create: { width: 1440, height: 332, channels: 3, background: '#fff' } })
    .composite(composites)
    .jpeg({ quality: 88 })
    .toFile(path.join(__dirname, 'page-previews.jpg'));
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
