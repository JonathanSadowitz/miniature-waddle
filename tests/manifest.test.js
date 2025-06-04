const fs = require('fs');
const path = require('path');
const assert = require('assert');

const manifestPath = path.join(__dirname, '..', 'manifest.json');
const manifestData = fs.readFileSync(manifestPath, 'utf-8');
let manifest;
try {
  manifest = JSON.parse(manifestData);
} catch (err) {
  throw new Error('manifest.json is not valid JSON');
}

assert(Array.isArray(manifest.icons), 'manifest.icons should be an array');

manifest.icons.forEach(icon => {
  assert(typeof icon.src === 'string', 'icon.src should be a string');
  const iconPath = path.join(path.dirname(manifestPath), icon.src);
  if (!fs.existsSync(iconPath)) {
    throw new Error(`Icon file missing: ${icon.src}`);
  }
});

console.log('Manifest icon tests passed');
