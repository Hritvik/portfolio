import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');

test('mobile navigation is a compact accessible disclosure', async () => {
  const [source, css] = await Promise.all([
    read('../src/components/Navigation.tsx'),
    read('../src/styles/globals.css'),
  ]);

  assert.match(source, /type="button"/);
  assert.match(source, /aria-expanded=/);
  assert.match(source, /aria-controls="primary-navigation"/);
  assert.match(source, /id="primary-navigation"/);
  assert.match(source, /Escape/);
  assert.match(source, /toggleRef\.current\?\.focus\(\)/);
  assert.match(css, /\.nav-container\s*\{[^}]*padding:\s*var\(--space-4\)\s+var\(--container-padding\)/s);
});

test('mobile home prioritizes proof and action while keeping linked evidence', async () => {
  const [home, css] = await Promise.all([
    read('../src/components/home/MobileHome.tsx'),
    read('../src/styles/globals.css'),
  ]);

  assert.match(home, /hero-mobile-proof/);
  assert.ok(home.indexOf('hero-actions') < home.indexOf('hero-copy'));
  assert.match(css, /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(css, /\.flagship-card\s*\{[^}]*min-height:\s*0/s);
  assert.match(css, /\.case-section-nav a\s*\{[^}]*min-height:\s*44px/s);
  assert.match(css, /\.nav-container\s*\{[^}]*padding:\s*var\(--space-2\)\s+var\(--space-4\)/s);
  assert.match(home, /mobile-work-card--\$\{index \+ 1\}/);
  assert.match(css, /\.mobile-work-stack\s*\{[^}]*gap:\s*var\(--space-5\)/s);
  for (const index of [1, 2, 3]) {
    assert.match(css, new RegExp(`\\.mobile-work-card--${index}\\s*\\{[^}]*--project-accent:`));
  }
});

test('project-specific system maps become vertical without a second content model', async () => {
  const [maps, css] = await Promise.all([
    read('../src/components/case-study/SystemMaps.tsx'),
    read('../src/styles/globals.css'),
  ]);

  assert.equal((maps.match(/<figure className="system-map/g) ?? []).length, 3);
  assert.match(maps, /Business SOP/);
  assert.match(maps, /Deterministic bucket/);
  assert.match(maps, /Topological derived-KPI engine/);
  assert.match(css, /\.map-lane,[^}]*\.telecom-pipeline[^}]*min-width:\s*0/s);
  assert.match(css, /\.telecom-branch\s*\{[^}]*grid-template-columns:\s*1fr/s);
  assert.match(css, /\.system-map\s*\{[^}]*overflow-x:\s*visible/s);
});

test('case studies expose a mobile reading path and collapsible decisions', async () => {
  const source = await read('../src/components/case-study/MobileCaseStudy.tsx');

  assert.match(source, /aria-label="Case study sections"/);
  for (const id of ['outcome', 'ownership', 'architecture', 'decisions', 'evidence']) {
    assert.match(source, new RegExp(`(?:id="${id}"|href="#${id}")`));
  }
  assert.match(source, /<details className="hard-problem[^\"]*"/);
  assert.match(source, /<summary>/);
});

test('portfolio keeps the approved light editorial theme across system preferences', async () => {
  const [base, tokens, globals, html] = await Promise.all([
    read('../src/index.css'),
    read('../src/styles/design-system.css'),
    read('../src/styles/globals.css'),
    read('../index.html'),
  ]);

  assert.match(base, /color-scheme:\s*light;/);
  assert.doesNotMatch(base, /prefers-color-scheme:\s*dark/);
  assert.doesNotMatch(tokens, /prefers-color-scheme:\s*dark/);
  assert.doesNotMatch(globals, /prefers-color-scheme:\s*dark/);
  assert.match(html, /name="theme-color" content="#f7f8fa"/i);
});
