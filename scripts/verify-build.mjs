import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const base = (process.env.BASE_PATH?.trim() || '/').replace(/\/?$/, '/');
const origin = process.env.SITE_URL?.trim() || 'https://local-build.invalid';
const errors = [];
const html = new Map();
async function walk(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) await walk(full);
    else if (item.isFile() && item.name.endsWith('.html')) html.set(full, await readFile(full, 'utf8'));
  }
}
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&#(x[\da-f]+|\d+);/gi, (_, n) => String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1), 16) : Number(n)));
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map(m => [m[1].toLowerCase(), decode(m[2] ?? m[3] ?? m[4])]));
const routeFor = (file) => base + path.relative(dist, file).split(path.sep).join('/').replace(/index\.html$/, '');
const ids = new Map();
try {
  await walk(dist);
  for (const [file, source] of html) {
    const tags = [...source.matchAll(/<[a-zA-Z][^>]*>/g)].map(m => attrs(m[0]));
    ids.set(file, new Set(tags.flatMap(a => [a.id, a.name].filter(Boolean))));
  }
  for (const language of ['en', 'ko']) {
    const count = [...html.keys()].filter(f => path.relative(dist, f).startsWith(`${language}${path.sep}`)).length;
    if (count < 7) errors.push(`${language}: expected at least 7 pages; found ${count}.`);
  }
  const routes = new Set([...html.keys()].map(f => path.relative(dist, f).split(path.sep).join('/')));
  for (const language of ['en', 'ko']) {
    for (const section of ['', 'research/', 'people/', 'publications/', 'news/', 'join/', 'contact/']) {
      const required = `${language}/${section}index.html`;
      if (!routes.has(required)) errors.push(`Missing required route: ${required}`);
    }
  }
  for (const route of routes) {
    if (/^(en|ko)\//.test(route)) {
      const counterpart = route.replace(/^(en|ko)\//, route.startsWith('en/') ? 'ko/' : 'en/');
      if (!routes.has(counterpart)) errors.push(`Missing language counterpart: ${counterpart}`);
    }
  }
  let checked = 0;
  for (const [file, source] of html) {
    const sourceRoute = routeFor(file);
    for (const match of source.matchAll(/<[a-zA-Z][^>]*>/g)) {
      const a = attrs(match[0]);
      const links = [a.href, a.src, a.poster].filter(Boolean);
      if (a.srcset && !a.srcset.trim().startsWith('data:')) links.push(...a.srcset.split(',').map(x => x.trim().split(/\s+/)[0]));
      for (const link of links) {
        if (/^(?:mailto:|tel:|data:|javascript:|blob:)/i.test(link)) continue;
        let url;
        try { url = new URL(link, new URL(sourceRoute, origin)); } catch { errors.push(`${sourceRoute}: invalid URL ${link}`); continue; }
        if (url.origin !== new URL(origin).origin) continue;
        if (!url.pathname.startsWith(base)) { errors.push(`${sourceRoute}: local link escapes BASE_PATH: ${link}`); continue; }
        let local;
        try { local = decodeURIComponent(url.pathname.slice(base.length)); } catch { errors.push(`${sourceRoute}: invalid URI encoding ${link}`); continue; }
        let target = path.resolve(dist, local || '.');
        if (target !== dist && !target.startsWith(dist + path.sep)) { errors.push(`${sourceRoute}: link escapes dist: ${link}`); continue; }
        try {
          if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
          if (!(await stat(target)).isFile()) throw new Error('not a file');
          checked++;
          if (url.hash && html.has(target) && !url.hash.startsWith('#:~:text=')) {
            const fragment = decodeURIComponent(url.hash.slice(1));
            if (fragment && !ids.get(target)?.has(fragment)) errors.push(`${sourceRoute}: missing fragment ${link}`);
          }
        } catch { errors.push(`${sourceRoute}: missing file or invalid fragment encoding: ${link}`); }
      }
    }
  }
  const mode = process.env.PUBLICATION_MODE?.trim() || 'review';
  for (const [file, source] of html) {
    const meta = [...source.matchAll(/<meta\b[^>]*>/gi)].map(m => attrs(m[0]));
    const noindex = meta.some(a => a.name?.toLowerCase() === 'robots' && /\bnoindex\b/i.test(a.content || ''));
    if (mode === 'review' && !noindex) errors.push(`${routeFor(file)}: review page lacks robots noindex.`);
    const isNotFound = path.relative(dist, file) === '404.html';
    if (mode === 'public' && noindex && !isNotFound) errors.push(`${routeFor(file)}: public page still has robots noindex.`);
    if (isNotFound && !noindex) errors.push(`${routeFor(file)}: error page must have robots noindex.`);
  }
  console.log(`Build verification: ${html.size} HTML pages, ${checked} local references, BASE_PATH=${base}, mode=${mode}.`);
  if (errors.length) { console.error([...new Set(errors)].join('\n')); process.exitCode = 1; }
  else console.log('PASS: language routes, local assets, links, fragments, and indexing mode.');
} catch (error) {
  console.error(`Build verification failed: ${error.message}. Run npm run build first.`);
  process.exitCode = 1;
}
