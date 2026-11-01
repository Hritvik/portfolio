import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { compileCommonJs } from './helpers/compile-typescript.mjs';

test('direct URLs resolve to stable portfolio pages', async () => {
  const source = await readFile(new URL('../src/lib/routes.ts', import.meta.url), 'utf8');
  const { resolveRoute } = compileCommonJs(source, 'routes.ts');

  assert.equal(JSON.stringify(resolveRoute('/')), JSON.stringify({ kind: 'home' }));
  assert.equal(JSON.stringify(resolveRoute('/work')), JSON.stringify({ kind: 'work' }));
  assert.equal(JSON.stringify(resolveRoute('/work/configurable-support-automation')), JSON.stringify({
    kind: 'case-study', slug: 'configurable-support-automation',
  }));
  assert.equal(JSON.stringify(resolveRoute('/work/genai-runtime-reliability')), JSON.stringify({
    kind: 'case-study', slug: 'genai-runtime-reliability',
  }));
  assert.equal(JSON.stringify(resolveRoute('/work/telecom-analytics-computation')), JSON.stringify({
    kind: 'case-study', slug: 'telecom-analytics-computation',
  }));
  assert.equal(JSON.stringify(resolveRoute('/unknown')), JSON.stringify({ kind: 'not-found' }));
});

test('navigation uses shareable links instead of state-only buttons', async () => {
  const source = await readFile(new URL('../src/components/Navigation.tsx', import.meta.url), 'utf8');

  assert.match(source, /href: '\/work'/);
  assert.match(source, /href: '\/about'/);
  assert.match(source, /href: '\/contact'/);
  assert.doesNotMatch(source, /onSectionChange/);
});
