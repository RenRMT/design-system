(function(){
var esc=DOCS.esc;
function parse(t,file,all){var ruleRe=/([^{}]+)\{([^{}]*)\}/g,m;while((m=ruleRe.exec(t))){var sel=m[1].replace(/\/\*[\s\S]*?\*\//g,'').trim();var group='',re=/\/\*\s*([\s\S]*?)\s*\*\/|(--[\w-]+)\s*:\s*([^;]+);/g,x;while((x=re.exec(m[2]))){if(x[2]===undefined){if(!/^@kind/.test(x[1]))group=x[1]}else all.push({file:file,sel:sel,group:group,name:x[2],value:x[3].trim()})}}}
function copyName(e){var n=e.target.closest('[data-tok]');if(n)DOCS.copy('var('+n.dataset.tok+')')}
function swatches(list){return '<div class="sw-grid">'+list.map(function(t){return '<button class="sw" type="button" data-tok="'+t.name+'" title="Copy var('+t.name+')"><i style="background:var('+t.name+')"></i><b>'+t.name+'</b><span>'+esc(t.value)+'</span></button>'}).join('')+'</div>'}
function note(g){var i=g.indexOf('. ');return i>0?'<p class="d-note">'+esc(g.slice(i+2))+'</p>':''}
function head(g){var s=g.split(/[,.]/)[0];return '<h3>'+esc(s)+'</h3>'}
function table(rows,cols){return '<table class="tt"><tbody>'+rows.map(function(r){return '<tr><td data-tok="'+r.name+'">'+r.name+'</td><td class="v">'+esc(r.value)+'</td>'+(cols?'<td>'+cols(r)+'</td>':'<td></td>')+'</tr>'}).join('')+'</tbody></table>'}
function render(all){
 var pal=all.filter(function(t){return t.file==='colors'&&t.sel===':root'});
 var groups={};pal.forEach(function(t){(groups[t.group]=groups[t.group]||[]).push(t)});
 var col='';Object.keys(groups).forEach(function(g){if(/^Ramps/.test(g))return;col+=head(g)+note(g)+swatches(groups[g])});
 document.getElementById('t-colour').innerHTML=col;
 var ramps={};Object.keys(groups).filter(function(g){return /^Ramps/.test(g)}).forEach(function(g){groups[g].forEach(function(t){var m=t.name.match(/^--(\w+)-(\d+)$/);if(m)(ramps[m[1]]=ramps[m[1]]||[]).push(t)})});
 var r='<div class="ramps"><div class="ramp-idx"><span></span>'+[1,2,3,4,5,6,7,8,9,10].map(function(n){return '<span>'+n+'</span>'}).join('')+'</div>';
 Object.keys(ramps).forEach(function(k){r+='<div class="ramp"><span>'+k+'</span>'+ramps[k].map(function(t){return '<button type="button" data-tok="'+t.name+'" title="'+t.name+' '+t.value+'" style="background:var('+t.name+')"></button>'}).join('')+'</div>'});
 document.getElementById('t-ramps').innerHTML=r+'</div>';
 var light=all.filter(function(t){return t.file==='colors'&&/light/.test(t.sel)}),dark={};all.forEach(function(t){if(t.file==='colors'&&/dark/.test(t.sel))dark[t.name]=t.value});
 var s='<table class="props"><thead><tr><th>Token</th><th>Light</th><th>Dark</th></tr></thead><tbody>'+light.map(function(t){var d=dark[t.name];return '<tr><td data-tok="'+t.name+'" style="cursor:pointer">'+t.name+'</td><td><span class="chip" data-theme="light"><i style="background:var('+t.name+')"></i>'+esc(t.value)+'</span></td><td>'+(d?'<span class="chip" data-theme="dark"><i style="background:var('+t.name+')"></i>'+esc(d)+'</span>':'<span class="d-file">same as light</span>')+'</td></tr>'}).join('')+'</tbody></table>';
 document.getElementById('t-semantic').innerHTML=s;
 var ty=all.filter(function(t){return t.file==='typography'});var by=function(re){return ty.filter(function(t){return re.test(t.name)})};
 var fam=by(/^--font-(serif|sans|mono)$/).map(function(t){return '<div style="padding:14px 0;border-bottom:1px solid var(--line)"><p class="d-file" data-tok="'+t.name+'" style="margin:0 0 4px;cursor:pointer">'+t.name+'</p><p style="margin:0;font:500 28px/1.25 var('+t.name+')">Data work is people work.</p></div>'}).join('');
 var tt='<h3>Families</h3><div style="border-top:1px solid var(--line)">'+fam+'</div>'+'<h3>Aliases</h3>'+table(by(/^--font-(display|body|meta)$/));
 tt+='<h3>Sizes</h3>'+table(by(/^--fs-/),function(t){return '<div class="sample" style="font-size:var('+t.name+');line-height:1.2;font-family:'+(/hero|h1|h2/.test(t.name)?'var(--font-serif)':/meta|micro/.test(t.name)?'var(--font-mono)':'var(--font-sans)')+'">Incidents fell by a third</div>'});
 tt+='<h3>Line height, tracking, weight, measure</h3>'+table(by(/^--(lh|tracking|fw|measure)/));
 document.getElementById('t-type').innerHTML=tt;
 var sp=all.filter(function(t){return t.file==='spacing'});var bar=function(t){return /^\d+px$/.test(t.value)?'<div class="bar" style="width:'+t.value+'"></div>':''};
 var sh='<h3>Scale</h3>'+table(sp.filter(function(t){return /^--space-/.test(t.name)}),bar)+'<h3>Gaps</h3>'+table(sp.filter(function(t){return /^--gap-/.test(t.name)}),bar)+'<h3>Layout</h3>'+table(sp.filter(function(t){return /^--(sidebar|main)/.test(t.name)}));
 document.getElementById('t-spacing').innerHTML=sh;
 var rad=sp.filter(function(t){return /^--radius/.test(t.name)}),oth=sp.filter(function(t){return /^--(hairline|focus|ease|dur)/.test(t.name)});
 document.getElementById('t-shape').innerHTML='<h3>Radii</h3>'+table(rad,function(t){return '<div class="rad" style="border-radius:var('+t.name+')"></div>'})+'<h3>Effects &amp; timing</h3>'+table(oth);
 document.getElementById('main').addEventListener('click',copyName);
}
Promise.all(['colors','typography','spacing'].map(function(f){return fetch('../tokens/'+f+'.css').then(function(r){return r.text()}).then(function(t){return [f,t]})})).then(function(res){var all=[];res.forEach(function(x){parse(x[1],x[0],all)});render(all)}).catch(function(e){document.getElementById('t-colour').innerHTML='<p class="ex-err">Could not read tokens/*.css: '+esc(e.message)+'. Serve the folder over http (GitHub Pages does).</p>'});
})();
