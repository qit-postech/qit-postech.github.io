import { defineConfig } from 'astro/config';

const mode = process.env.PUBLICATION_MODE?.trim() || 'review';
if (!['review', 'public'].includes(mode)) throw new Error('PUBLICATION_MODE must be review or public.');
const rawBase = process.env.BASE_PATH?.trim() || '/';
if (!/^\/(?:[A-Za-z0-9_-]+\/)*[A-Za-z0-9_-]*\/?$/.test(rawBase)) {
  throw new Error('BASE_PATH must be an absolute URL path such as / or /qit-lab/.');
}
const base = rawBase === '/' ? '/' : `${rawBase.replace(/\/+$/, '')}/`;
const rawSite = process.env.SITE_URL?.trim();
let site;
if (rawSite) {
  const url = new URL(rawSite);
  if (url.protocol !== 'https:' || url.username || url.password || url.port || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL must be an HTTPS origin without a path, port, credentials, query, or fragment. Use BASE_PATH for the repository path.');
  }
  site = url.origin;
}
if (mode === 'public' && !site) throw new Error('Public builds require an approved SITE_URL.');
const domain = process.env.CUSTOM_DOMAIN?.trim();
if (domain) {
  if (mode !== 'public') throw new Error('CUSTOM_DOMAIN is allowed only for an approved public build.');
  if (!/^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(domain)) throw new Error('CUSTOM_DOMAIN must be a hostname only.');
  if (new URL(site).hostname !== domain.toLowerCase() || base !== '/') throw new Error('CUSTOM_DOMAIN must match SITE_URL hostname and requires BASE_PATH=/.');
}

export default defineConfig({
  ...(site ? { site } : {}),
  base,
  output: 'static',
  devToolbar: { enabled: false },
  outDir: './dist',
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: { define: { 'import.meta.env.PUBLICATION_MODE': JSON.stringify(mode) } },
});
