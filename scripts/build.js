const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

// Só isto vai para o ar. docs/, .github/ e o restante do repositório ficam de fora.
const include = [
  'index.html',
  '404.html',
  'css',
  'js',
  'assets',
  'robots.txt',
  'sitemap.xml',
  '_headers',
  '_redirects',
];

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }
  fs.copyFileSync(src, dest);
}

function walkFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, acc);
    else acc.push(full);
  }
  return acc;
}

function contentHash(files) {
  const hash = crypto.createHash('sha256');
  for (const file of files) hash.update(fs.readFileSync(file));
  return hash.digest('hex').slice(0, 10);
}

if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const item of include) {
  const src = path.join(root, item);
  if (!fs.existsSync(src)) continue;
  copyRecursive(src, path.join(dist, item));
}

const version = contentHash([
  ...walkFiles(path.join(dist, 'css')),
  ...walkFiles(path.join(dist, 'js')),
]);

for (const htmlPath of walkFiles(dist).filter((file) => file.endsWith('.html'))) {
  const html = fs.readFileSync(htmlPath, 'utf8').replace(
    /((?:href|src)=["'])((?:\/)?(?:css|js)\/[A-Za-z0-9_./-]+\.(?:css|js))(?:\?[^"']*)?/g,
    `$1$2?v=${version}`
  );
  fs.writeFileSync(htmlPath, html);
}

console.log(`Build concluído em dist/ (assets v=${version})`);
