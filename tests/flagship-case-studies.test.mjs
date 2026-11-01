import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { compileCommonJs } from './helpers/compile-typescript.mjs';

test('portfolio exposes three curated, decision-ready flagship studies', async () => {
  const source = await readFile(new URL('../src/data/caseStudies.ts', import.meta.url), 'utf8');
  const { caseStudies } = compileCommonJs(source, 'caseStudies.ts');

  assert.equal(JSON.stringify(caseStudies.map(({ slug }) => slug)), JSON.stringify([
    'configurable-support-automation',
    'genai-runtime-reliability',
    'telecom-analytics-computation',
  ]));
  assert.equal(new Set(caseStudies.map(({ slug }) => slug)).size, 3);
  assert.ok(caseStudies.every(({ hardProblems }) => hardProblems.length === 3));
  assert.ok(caseStudies.every(({ ownership, evolution, outcome, architecture }) =>
    ownership && evolution.length >= 3 && outcome && architecture.length >= 4));
});

test('Jio flagship states scale, business impact, and ownership boundaries', async () => {
  const source = await readFile(new URL('../src/data/caseStudies.ts', import.meta.url), 'utf8');
  const { caseStudies } = compileCommonJs(source, 'caseStudies.ts');
  const jio = caseStudies.find(({ slug }) => slug === 'telecom-analytics-computation');
  const evidence = JSON.stringify(jio).toLowerCase();

  assert.match(evidence, /2 billion/);
  assert.match(evidence, /90-minute/);
  assert.match(evidence, /topological/);
  assert.match(evidence, /forecast/);
  assert.match(evidence, /did not own raw-data ingestion/);
  assert.match(evidence, /did not design the overarching data lake/);
});
