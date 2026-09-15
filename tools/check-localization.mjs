import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

function validate(en, th) {
  const errors = [];
  for (const key of new Set([...Object.keys(en), ...Object.keys(th)])) {
    if (!/^[a-z][a-z0-9]*(\.[a-z][a-z0-9]*)+$/.test(key)) errors.push(`Invalid key: ${key}`);
    for (const [locale, catalog] of [['en', en], ['th', th]]) {
      if (typeof catalog[key] !== 'string' || !catalog[key].trim()) errors.push(`${locale}: missing/empty ${key}`);
    }
    if (typeof en[key] !== 'string' || typeof th[key] !== 'string') continue;
    const params = value => [...value.matchAll(/\{([a-zA-Z][a-zA-Z0-9_]*)\}/g)].map(m => m[1]).sort();
    for (const value of [en[key], th[key]]) {
      if (/[{}]/.test(value.replace(/\{[a-zA-Z][a-zA-Z0-9_]*\}/g, ''))) errors.push(`Unsupported parameter syntax: ${key}`);
    }
    if (JSON.stringify(params(en[key])) !== JSON.stringify(params(th[key]))) errors.push(`Parameter mismatch: ${key}`);
  }
  return errors;
}

// Failure-path fixtures ensure missing translations and format mismatches block CI.
assert.ok(validate({ 'ui.ready': 'Ready' }, {}).length);
assert.ok(validate({ 'reward.gold': '{amount}' }, { 'reward.gold': '{count}' }).length);
assert.ok(validate({ 'ui.ready': 'Ready' }, { 'ui.ready': ' ' }).length);
assert.deepEqual(validate({ 'reward.gold': '{amount}' }, { 'reward.gold': 'ทอง {amount}' }), []);

const root = new URL('../content/localization/', import.meta.url);
const en = JSON.parse(await readFile(new URL('en.json', root), 'utf8'));
const th = JSON.parse(await readFile(new URL('th.json', root), 'utf8'));
const errors = validate(en, th);
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`PASS: th/en catalogs, ${Object.keys(en).length} keys, parameters and negative fixtures.`);
