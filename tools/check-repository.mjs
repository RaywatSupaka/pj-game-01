import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const ignored = new Set(['.git', 'node_modules', 'Library', 'Temp', 'Logs', 'obj']);
async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (ignored.has(entry.name)) continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await walk(file));
    else if (entry.name.endsWith('.md')) result.push(file);
  }
  return result;
}
const files = await walk(root);
const errors = [];
const indexed = new Set();
for (const file of files) {
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const href = match[1].split('#')[0];
    if (!href || /^[a-z]+:/i.test(href)) continue;
    const target = path.resolve(path.dirname(file), decodeURIComponent(href));
    if (file === path.join(root, 'index.md')) indexed.add(target);
    try { await stat(target); }
    catch { errors.push(`${path.relative(root, file)}: missing ${href}`); }
  }
}
for (const file of files.filter(f => f.startsWith(path.join(root, 'knowledge') + path.sep))) {
  if (!indexed.has(file)) errors.push(`Unindexed knowledge: ${path.relative(root, file)}`);
  if (!file.includes(`${path.sep}sources${path.sep}`)) {
    const source = await readFile(file, 'utf8');
    for (const field of ['Status:', 'Source:', 'Updated:']) {
      if (!source.includes(field)) errors.push(`${path.relative(root, file)} missing ${field}`);
    }
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`PASS: ${files.length} Markdown files; local link targets, knowledge coverage and metadata checked.`);
