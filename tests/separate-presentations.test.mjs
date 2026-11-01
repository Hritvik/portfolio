import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');

test('home composes intentionally separate desktop and mobile presentations', async () => {
  const source = await read('../src/components/Home.tsx');

  assert.match(source, /DesktopHome/);
  assert.match(source, /MobileHome/);
});

test('case studies compose intentionally separate desktop and mobile presentations', async () => {
  const source = await read('../src/components/case-study/CaseStudyPage.tsx');

  assert.match(source, /DesktopCaseStudy/);
  assert.match(source, /MobileCaseStudy/);
});

test('responsive presentation shells expose exactly one design at each breakpoint', async () => {
  const css = await read('../src/styles/globals.css');

  assert.match(css, /\.desktop-presentation\s*\{[^}]*display:\s*(?:block|grid|flex)/s);
  assert.match(css, /\.mobile-presentation\s*\{[^}]*display:\s*none/s);
  assert.match(
    css,
    /@media\s*\(max-width:\s*640px\)[\s\S]*?\.desktop-presentation\s*\{[^}]*display:\s*none[^}]*\}[\s\S]*?\.mobile-presentation\s*\{[^}]*display:\s*(?:block|grid|flex)/s,
  );
});

test('desktop flagship cards share one aligned baseline', async () => {
  const css = await read('../src/styles/globals.css');

  assert.doesNotMatch(css, /\.desktop-flagship-grid\s+\.flagship-card:nth-child\(2\)[^{]*\{[^}]*transform:/s);
});
