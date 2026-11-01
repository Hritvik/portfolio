import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('home leads with Platform Engineer positioning and flagship actions', async () => {
  const source = await readFile(new URL('../src/components/home/DesktopHome.tsx', import.meta.url), 'utf8');
  const mobileSource = await readFile(new URL('../src/components/home/MobileHome.tsx', import.meta.url), 'utf8');
  const combined = `${source}\n${mobileSource}`;

  assert.match(combined, /Platform Engineer/);
  assert.match(combined, /8\+ years/);
  assert.match(combined, /View Flagship Work/);
  assert.match(combined, /Download Résumé/);
  assert.match(combined, /flagshipStudies/);
  assert.doesNotMatch(combined, /The portfolio is centered/);
});

test('contact has reliable channels without a fake form or public phone', async () => {
  const [source, links] = await Promise.all([
    readFile(new URL('../src/components/Contact.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../src/config/links.ts', import.meta.url), 'utf8'),
  ]);

  assert.doesNotMatch(source, /<form|<input|<textarea|Send Message|tel:/);
  assert.match(links, /hritvik\.works@gmail\.com/);
  assert.match(links, /hritvik-dinkar\.pages\.dev/);
  assert.match(source, /mailto:\$\{EMAIL\}/);
  assert.match(source, /Copy Email/);
  assert.match(source, /LinkedIn/);
  assert.match(source, /Download Résumé/);
});

test('canonical résumé is bundled and reused by portfolio CTAs', async () => {
  const [links, home, contact] = await Promise.all([
    readFile(new URL('../src/config/links.ts', import.meta.url), 'utf8'),
    readFile(new URL('../src/components/home/DesktopHome.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../src/components/Contact.tsx', import.meta.url), 'utf8'),
  ]);

  const resume = await readFile(new URL('../public/hritvik-dinkar-resume-v3.pdf', import.meta.url));

  assert.match(links, /\/hritvik-dinkar-resume-v3\.pdf/);
  assert.doesNotMatch(links, /['"]\/hritvik-dinkar-resume\.pdf['"]/);
  assert.equal(resume.subarray(0, 5).toString(), '%PDF-');
  assert.match(home, /RESUME_URL/);
  assert.match(contact, /RESUME_URL/);
});
