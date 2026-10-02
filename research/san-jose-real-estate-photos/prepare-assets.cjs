// Rebuild local, optimized assets from the researched official portfolio URLs.
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const sources = require('./assets.json');

const projectRoot = path.resolve(__dirname, '../..');
const outputDir = path.join(projectRoot, 'public/san-jose-real-estate-photos');
const jobs = [
  { name: 'logo.png', url: sources.branding[0].url },
  ...sources.featuredProjects.map((project, index) => ({
    name: [
      'deodara-exterior.webp',
      'woodridge-exterior.webp',
      'lakemead-living-room.webp',
      'upton-exterior.webp',
    ][index],
    url: project.image,
  })),
  ...sources.photoGalleries.slice(0, 2).flatMap((gallery, index) =>
    gallery.images.slice(0, index === 1 ? 4 : 3).map((url, imageIndex) => ({
      name: `${['san-miguel', 'montecito', 'palo-alto'][index]}-0${imageIndex + 1}.webp`,
      url,
    })),
  ),
];

async function prepare(job) {
  const file = path.join(outputDir, job.name);
  let existing = false;
  try {
    await fs.access(file);
    existing = true;
  } catch {}
  if (!existing) {
    let original;
    for (let attempt = 1; attempt <= 2; attempt += 1) {
      try {
        const response = await fetch(job.url, { signal: AbortSignal.timeout(90000) });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        if (!response.headers.get('content-type')?.startsWith('image/'))
          throw new Error('Response was not an image');
        original = Buffer.from(await response.arrayBuffer());
        break;
      } catch (error) {
        if (attempt === 2) throw new Error(`${job.name}: ${error.message}`);
        console.log(`Retrying ${job.name}: ${error.message}`);
      }
    }
    const transform = sharp(original).rotate();
    if (job.name.endsWith('.png')) {
      await transform.resize({ width: 800, withoutEnlargement: true }).png().toFile(file);
    } else {
      await transform
        .resize({ width: 1800, withoutEnlargement: true })
        .webp({ quality: 84 })
        .toFile(file);
    }
  }
  const metadata = await sharp(file).metadata();
  const stat = await fs.stat(file);
  console.log(
    `${job.name}: ${metadata.width}x${metadata.height}, ${Math.round(stat.size / 1024)} KB`,
  );
  return {
    file: `/san-jose-real-estate-photos/${job.name}`,
    source: job.url,
    width: metadata.width,
    height: metadata.height,
    bytes: stat.size,
  };
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  const manifest = [];
  for (let index = 0; index < jobs.length; index += 4) {
    manifest.push(...(await Promise.all(jobs.slice(index, index + 4).map(prepare))));
  }
  await fs.writeFile(
    path.join(__dirname, 'prepared-assets.json'),
    JSON.stringify(manifest, null, 2) + '\n',
  );
  const photoJobs = jobs.filter((job) => job.name.endsWith('.webp'));
  const columns = 4;
  const tileWidth = 320;
  const tileHeight = 250;
  const tiles = await Promise.all(
    photoJobs.map(async (job, index) => {
      const photo = await sharp(path.join(outputDir, job.name))
        .resize(tileWidth, 220, { fit: 'cover' })
        .toBuffer();
      const label = Buffer.from(
        `<svg width="320" height="30"><rect width="320" height="30" fill="#17202d"/><text x="10" y="21" fill="white" font-family="Arial" font-size="14">${job.name}</text></svg>`,
      );
      return [
        {
          input: photo,
          left: (index % columns) * tileWidth,
          top: Math.floor(index / columns) * tileHeight,
        },
        {
          input: label,
          left: (index % columns) * tileWidth,
          top: Math.floor(index / columns) * tileHeight + 220,
        },
      ];
    }),
  );
  await sharp({
    create: {
      width: columns * tileWidth,
      height: Math.ceil(photoJobs.length / columns) * tileHeight,
      channels: 3,
      background: '#eef0f2',
    },
  })
    .composite(tiles.flat())
    .jpeg({ quality: 88 })
    .toFile(path.join(__dirname, 'assets-preview.jpg'));
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
