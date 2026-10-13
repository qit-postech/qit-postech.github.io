import {readFileSync} from 'node:fs';
const read=name=>JSON.parse(readFileSync(new URL(`../src/data/${name}.json`,import.meta.url),'utf8'));
const fail=message=>{throw new Error(`Content validation: ${message}`);};
const bilingual=(item,key)=>{if(!item[key]?.en||!item[key]?.ko)fail(`${item.id||'entry'} requires ${key}.en and ${key}.ko`);};
const safeUrl=(v)=>{if(v&&!/^https:\/\//.test(v))fail(`Only HTTPS source URLs are allowed: ${v}`);};
const unique=(items,key)=>{const values=items.map(i=>i[key]);if(new Set(values).size!==values.length)fail(`Duplicate ${key}`);};
const people=read('people'),news=read('news'),papers=read('publications'),research=read('research');
unique(people,'id');unique(papers,'id');unique(news,'id');
for(const p of people){bilingual(p,'name');bilingual(p,'role');if(!['current','alumni'].includes(p.group))fail('Unknown people group');if(typeof p.approvedForPublic!=='boolean'||!p.verification)fail('Person requires approval and verification');if(!p.sourceUrl&&!p.sourceLabel)fail('Person requires a source');safeUrl(p.sourceUrl);}
for(const p of people.filter(p=>p.group==='alumni')){if(p.kind!=='alumni'||!['official','legacy','unverified'].includes(p.affiliation?.status))fail(`${p.id} requires an alumni affiliation status`);if(p.period)bilingual(p,'period');if(p.affiliation.status!=='unverified'){bilingual(p.affiliation,'institution');bilingual(p.affiliation,'role');if(!p.affiliation.sourceUrl||!p.affiliation.checked)fail(`${p.id} requires an affiliation source and check date`);safeUrl(p.affiliation.sourceUrl);safeUrl(p.affiliation.roleSourceUrl);}}
for(const p of papers){if(!p.title||!p.authors||!Number.isInteger(p.year)||p.year<1900||p.year>new Date().getFullYear()+1)fail('Invalid paper title, authors or year');if(p.doi&&!/^10\.\d{4,9}\/.+/.test(p.doi))fail(`Invalid DOI: ${p.doi}`);if(p.arxiv&&!/^(?:\d{4}\.\d{4,5}(?:v\d+)?|[a-z-]+(?:\.[A-Z]{2})?\/\d{7}(?:v\d+)?)$/.test(p.arxiv))fail(`Invalid arXiv: ${p.arxiv}`);safeUrl(p.sourceUrl);if(p.sourceStatus!=='legacy'&&!p.verification)fail('Paper needs verification');}
for(const n of news){bilingual(n,'title');bilingual(n,'summary');if(!/^\d{4}-\d{2}-\d{2}$/.test(n.date)||isNaN(Date.parse(n.date)))fail('News requires ISO date');safeUrl(n.sourceUrl);if(typeof n.approvedForPublic!=='boolean')fail('News needs approval flag');}
for(const r of research){bilingual(r,'title');bilingual(r,'description');safeUrl(r.sourceUrl);if(!r.figure?.src?.startsWith('research/')||r.figure.src.includes('..'))fail(`${r.id} requires a local research figure`);bilingual(r.figure,'alt');bilingual(r.figure,'caption');}
console.log(`Content valid: ${papers.length} publications, ${people.length} people, ${news.length} news, ${research.length} research themes.`);
