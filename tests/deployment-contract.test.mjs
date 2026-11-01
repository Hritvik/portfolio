import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('static hosting rewrites direct portfolio routes to the application', async () => {
  const redirects = await readFile(new URL('../public/_redirects', import.meta.url), 'utf8');

  assert.match(redirects, /^\/\*\s+\/index\.html\s+200\s*$/m);
});

test('production shell includes the Cloudflare Web Analytics beacon', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

  assert.match(html, /https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js/);
  assert.match(html, /14b148349a554327af820a170c12d13e/);
  assert.equal((html.match(/static\.cloudflareinsights\.com\/beacon\.min\.js/g) ?? []).length, 1);
});
