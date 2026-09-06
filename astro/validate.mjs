import f from 'node:fs';

const j = JSON.parse(f.readFileSync('migration/manifest-pretty.json', 'utf8'));
const src = f.readFileSync('astro/src/data/blogPosts.ts', 'utf8');
const slugs = new Set([...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]));
console.log('ported slugs: ' + slugs.size);

const staticPages = {
  '/': 'index',
  '/about': 'about',
  '/blog': 'blog/index',
  '/contact': 'contact',
  '/privacy': 'privacy',
  '/terms': 'terms',
  '/support': 'support',
  '/docs': 'docs',
  '/ai-code-viewer-ai': 'ai-code-viewer-ai',
  '/apps': 'apps/index',
  '/apps/admin': 'apps/admin',
};

let ok = 0;
const missing = [];
for (const u of j.sitemap.included_paths) {
  const p = new URL(u).pathname;
  if (staticPages[p]) {
    if (f.existsSync('astro/src/pages/' + staticPages[p] + '.astro')) ok++;
    else missing.push(u);
  } else if (p.startsWith('/blog/')) {
    if (slugs.has(p.slice(6))) ok++;
    else missing.push(u);
  } else {
    missing.push(u + ' (no manifest route)');
  }
}
console.log(`sitemap URLs resolving to a built page: ${ok}/${j.sitemap.included_paths.length}`);
console.log('UNRESOLVED:');
missing.forEach((m) => console.log(' - ' + m));

// Internal-link check: every href used in Header/Footer/pages must be in-manifest or external
const linkRe = /href="(\/[^"]*)"/g;
const known = new Set([...Object.keys(staticPages), '/blog/:slug', '/*', ...[...slugs].map((s) => '/blog/' + s)]);
import { execSync } from 'node:child_process';
const files = execSync('git ls-files astro/src -- "*.astro" 2>nul || dir /s /b astro\\src\\*.astro', { shell: 'powershell.exe' })
  .toString().split(/\r?\n/).filter(Boolean);
const bad = [];
for (const file of files) {
  const content = f.readFileSync(file.trim(), 'utf8');
  for (const m of content.matchAll(linkRe)) {
    const href = m[1];
    const dyn = href.replace(/\/[^/]+$/, '/:slug');
    if (!known.has(href) && href !== '/blog/:slug' && !(href.startsWith('/blog/') && slugs.has(href.slice(6)))) {
      // allow concrete slug links and template-generated links
      if (!href.startsWith('/blog/${')) bad.push(`${file} -> ${href}`);
    }
  }
}
console.log('internal links checked across ' + files.length + ' astro files');
console.log(bad.length ? 'BROKEN:\n' + bad.join('\n') : 'all internal hrefs resolve: OK');
