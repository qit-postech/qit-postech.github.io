// Produce a review copy that opens directly from disk, without a local server.
import {readdirSync,readFileSync,mkdirSync,writeFileSync,rmSync,copyFileSync,statSync} from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist'),out=path.join(root,'offline-preview');
if((process.env.PUBLICATION_MODE||'review')!=='review'||(process.env.BASE_PATH||'/')!=='/')throw new Error('Offline preview requires a fresh review build at BASE_PATH=/');
rmSync(out,{force:true,recursive:true});mkdirSync(out,{recursive:true});
const copiedImages=new Set();
const decodeAttribute=value=>value.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'");
function copyImage(reference,file,target){
 const value=decodeAttribute(reference);
 if(/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(value))return reference;
 const pagePath='/'+path.relative(dist,file).split(path.sep).join('/');
 const resolved=new URL(value,new URL(pagePath,'https://offline.invalid'));
 const source=path.resolve(dist,'.'+decodeURIComponent(resolved.pathname));
 if(!source.startsWith(dist+path.sep)||!statSync(source).isFile())throw new Error(`Invalid local image: ${reference} in ${file}`);
 const destination=path.join(out,path.relative(dist,source));
 mkdirSync(path.dirname(destination),{recursive:true});
 if(!copiedImages.has(source)){copyFileSync(source,destination);copiedImages.add(source);}
 const relative=path.relative(path.dirname(target),destination).split(path.sep).map(encodeURIComponent).join('/');
 return relative+(resolved.search+resolved.hash).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(p,e.name)):[path.join(p,e.name)]);
for(const file of walk(dist).filter(p=>p.endsWith('.html'))){
 const relative=path.relative(dist,file),target=path.join(out,relative);mkdirSync(path.dirname(target),{recursive:true});
 let html=readFileSync(file,'utf8');
 html=html.replace(/<link\b[^>]*rel="stylesheet"[^>]*>/g,tag=>{const href=tag.match(/href="([^"]+)"/)?.[1];if(!href?.startsWith('/'))return tag;return `<style>${readFileSync(path.join(dist,href),'utf8')}</style>`;});
 html=html.replace(/<script\b([^>]*?)src="(\/[^"?]+)"([^>]*)><\/script>/g,(_,before,src,after)=>{const js=readFileSync(path.join(dist,src),'utf8');if(/\bimport\s+(?:\{|[^.(])/.test(js))throw new Error('Offline script imports require bundling');return `<script>${js.replace(/<\/script/gi,'<\\/script')}</script>`;});
 html=html.replace(/href="\/favicon.svg"/g,`href="data:image/svg+xml,${encodeURIComponent(readFileSync(path.join(root,'public/favicon.svg'),'utf8'))}"`);
 html=html.replace(/href="(\/[^"?#]*)([?#][^"]*)?"/g,(_,href,suffix='')=>{const destination=path.join(out,href,href.endsWith('/')?'index.html':'');return `href="${path.relative(path.dirname(target),destination)||'index.html'}${suffix}"`;});
 // Keep image folders intact and resolve each image relative to its HTML page.
 html=html.replace(/<(?:img|source)\b[^>]*>/gi,tag=>tag.replace(/\b(src|srcset)=(['"])(.*?)\2/gi,(_,attribute,quote,value)=>{
  if(attribute.toLowerCase()==='src')return `${attribute}=${quote}${copyImage(value,file,target)}${quote}`;
  // Data URLs contain commas; leave data-only sets untouched rather than corrupt them.
  if(/(?:^|\s)data:/i.test(value))return `${attribute}=${quote}${value}${quote}`;
  const candidates=value.split(',').map(candidate=>{const match=candidate.trim().match(/^(\S+)(.*)$/);return match?copyImage(match[1],file,target)+match[2]:candidate;});
  return `${attribute}=${quote}${candidates.join(', ')}${quote}`;
 }));
 // The source is already a review build. Keep noindex in the portable copy.
 writeFileSync(target,html);
}
console.log(`Portable review copy: offline-preview/index.html (${copiedImages.size} local images copied)`);
