const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.join(__dirname,'..','docs');
const els=new Map();function el(id){if(!els.has(id))els.set(id,{innerHTML:'',classList:{remove(){},toggle(){}},setAttribute(){},addEventListener(){},focus(){},scrollIntoView(){}});return els.get(id)}
const ctx={console,location:{hash:''},document:{querySelector:el,querySelectorAll:()=>[],addEventListener(){},title:''},addEventListener(){},scrollTo(){},setTimeout,AbortController};ctx.window=ctx;vm.createContext(ctx);
for(const name of ['course.js','pages.js','app.js','badges.js','webmcp.js'])vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),ctx,{filename:name});
assert.equal(ctx.COURSE.length,28);assert.equal(ctx.BADGES.length,6);assert.equal(ctx.BADGES.reduce((n,b)=>n+b.hours,0),70);
let routeCount=0;const missing=new Set(),links=new Set();
function check(route){ctx.location.hash=route;vm.runInContext('render()',ctx);const html=el('#content').innerHTML;assert(html.length>100,route);assert(!html.includes('Página no encontrada'),route);assert(!/undefined/.test(html),'undefined or NaN at '+route);for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){const href=m[1].replaceAll('&amp;','&');if(href.startsWith('#'))links.add(href);else if(!/^(https?:|data:)/.test(href)&&!fs.existsSync(path.join(root,decodeURIComponent(href.split('?')[0]))))missing.add(href)}routeCount++;return html}
check('#inicio');check('#recursos');check('#proyecto');const guide=check('#guia');assert(!guide.includes('Prueba 2 · después de sesión 13'));assert(guide.includes('evaluaciones/Prueba_Corta_II.ipynb'));
for(const b of ctx.BADGES){assert.equal(ctx.COURSE.filter(m=>m.badge===b.id).length,b.end-b.start+1);assert.equal(b.hours,(b.end-b.start+1)*2.5);for(const section of ['modulos','ruta','evidencia','reto','materiales']){const html=check(`#badge-${b.id}/${section}`);assert.equal((html.match(/class="section-card /g)||[]).length,5);if(section==='modulos')assert(html.indexOf('Secciones del badge')<html.indexOf('Sesiones de este badge'))}check(`#badge-${b.id}`)}
for(const m of ctx.COURSE){check(`#modulo-${m.id}`);check(`#modulo-${m.id}/lecciones`);check(`#modulo-${m.id}/practica`);check(`#modulo-${m.id}/evaluacion`);for(let i=0;i<m.lessons.length;i++){const html=check(`#modulo-${m.id}/leccion-${i+1}`);assert(html.includes(m.lessons[i].title.replaceAll('&','&amp;')));assert.equal((html.match(/<article class="paper">/g)||[]).length,1)}for(const q of m.quiz)assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length)}
for(const route of links)check(route);
assert.deepEqual([...missing],[],'Missing assets: '+[...missing].join(', '));
ctx.location.hash='#modulo-999/leccion-1';vm.runInContext('render()',ctx);assert(el('#content').innerHTML.includes('Página no encontrada'));
console.log('OK:',routeCount,'page renders;',links.size,'internal links; no missing assets.');

