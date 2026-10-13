import {writeFileSync,rmSync} from 'node:fs';
const publicMode=(process.env.PUBLICATION_MODE||'review')==='public';
const base=('/'+(process.env.BASE_PATH||'/').replace(/^\/+|\/+$/g,'')+'/').replace('//','/');
const site=process.env.SITE_URL;
const routes=['','research/','people/','publications/','news/','join/','contact/'];
const dir=new URL('../dist/',import.meta.url);
writeFileSync(new URL('.nojekyll',dir),'');
if(publicMode&&process.env.CUSTOM_DOMAIN){writeFileSync(new URL('CNAME',dir),process.env.CUSTOM_DOMAIN.trim()+'\n');}else{rmSync(new URL('CNAME',dir),{force:true});}
if(publicMode&&site){
 const loc=(l,r)=>new URL(base+l+'/'+r,site).href;
 const pages=['en','ko'].flatMap(l=>routes.map(r=>`<url><loc>${loc(l,r)}</loc><xhtml:link rel="alternate" hreflang="en" href="${loc('en',r)}"/><xhtml:link rel="alternate" hreflang="ko" href="${loc('ko',r)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${loc('en',r)}"/></url>`));
 writeFileSync(new URL('sitemap.xml',dir),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${pages.join('')}</urlset>`);
 writeFileSync(new URL('robots.txt',dir),`User-agent: *\nAllow: /\nSitemap: ${new URL(base+'sitemap.xml',site).href}\n`);
}else{writeFileSync(new URL('robots.txt',dir),'User-agent: *\nDisallow: /\n');rmSync(new URL('sitemap.xml',dir),{force:true});}
console.log(`Finalized ${publicMode?'public':'review'} output. No domain is configured unless explicitly supplied.`);
