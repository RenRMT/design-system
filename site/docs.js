(function(){
var NS='RENDataDesignSystem_372f57';
var NAV=[['index.html','Overview'],['tokens.html','Tokens'],['components.html','Components'],['patterns.html','Patterns'],['dashboards.html','Dashboards'],['pages.html','Pages']];
var root=document.documentElement;
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
var RE=/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->)|("(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`)|(<\/?)([A-Za-z][\w.]*)|\b(const|let|var|function|return|true|false|null|import|from|export|new)\b|([A-Za-z][\w-]*)(?==[{"])/g;
function hl(src){var out='',last=0,m;RE.lastIndex=0;while((m=RE.exec(src))){out+=esc(src.slice(last,m.index));if(m[1])out+='<span class="tk-com">'+esc(m[1])+'</span>';else if(m[2])out+='<span class="tk-str">'+esc(m[2])+'</span>';else if(m[4])out+=esc(m[3])+'<span class="tk-tag">'+esc(m[4])+'</span>';else if(m[5])out+='<span class="tk-key">'+m[5]+'</span>';else if(m[6])out+='<span class="tk-attr">'+esc(m[6])+'</span>';last=RE.lastIndex}return out+esc(src.slice(last))}
function copy(text,btn){var done=function(){if(!btn)return;var t=btn.dataset.label||btn.textContent;btn.dataset.label=t;btn.textContent='Copied';setTimeout(function(){btn.textContent=t},1200)};
 var fallback=function(){var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy')}catch(e){}ta.remove();done()};
 if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(text).then(done,fallback);else fallback()}
function codeBlock(code,solo){var d=document.createElement('div');d.className='ex-code'+(solo?' solo':'');var pre=document.createElement('pre');pre.innerHTML='<code>'+hl(code)+'</code>';var b=document.createElement('button');b.className='copy';b.type='button';b.textContent='Copy';b.onclick=function(){copy(code,b)};d.append(pre,b);return d}
function mount(el,code){try{var src=/function Example\s*\(/.test(code)?code:'const Example = () => (<>'+code+'</>);';var js=Babel.transform(src,{presets:['react']}).code;var lib=window[NS];var Ex=new Function('React','NS','const {'+Object.keys(lib).join(',')+'}=NS;\n'+js+'\nreturn Example;')(React,lib);ReactDOM.createRoot(el).render(React.createElement(Ex))}catch(e){el.innerHTML='<p class="ex-err">'+esc(e.message||e)+'</p>'}}
function example(o){var code=o.code.replace(/^\n+|\s+$/g,'');var w=document.createElement('figure');w.className='ex';w.style.margin='';if(o.title){var c=document.createElement('figcaption');c.className='ex-title';c.textContent=o.title;w.appendChild(c)}var p=document.createElement('div');p.className='ex-prev'+(o.layout==='block'?' block':'');if(o.minHeight)p.style.minHeight=o.minHeight+'px';w.append(p,codeBlock(code));mount(p,code);return w}
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e}
function setTheme(t){root.dataset.theme=t;try{localStorage.setItem('ren-docs-theme',t)}catch(e){}var b=document.getElementById('themeBtn');if(b)b.textContent=t==='dark'?'Light mode':'Dark mode'}
function init(){var page=document.body.dataset.page;var side=document.getElementById('side');var subs=[].slice.call(document.querySelectorAll('main [data-nav]'));
 var h='<div><a class="d-brand" href="index.html">REN Data</a><p class="d-kicker">Design system</p></div><nav class="d-nav" aria-label="Sections">';
 NAV.forEach(function(n){var on=n[0]===page;h+='<a href="'+n[0]+'"'+(on?' aria-current="page"':'')+'>'+n[1]+'</a>';if(on&&subs.length){h+='<div class="d-sub">';var g=null;subs.forEach(function(s){if(s.dataset.group&&s.dataset.group!==g){g=s.dataset.group;h+='<p class="grp">'+esc(g)+'</p>'}h+='<a href="#'+s.id+'" data-for="'+s.id+'">'+esc(s.dataset.nav)+'</a>'});h+='</div>'}});
 h+='</nav><button class="d-theme" type="button" id="themeBtn"></button>';side.innerHTML=h;
 document.getElementById('themeBtn').onclick=function(){setTheme(root.dataset.theme==='dark'?'light':'dark')};setTheme(root.dataset.theme||'light');
 document.querySelectorAll('pre[data-code]').forEach(function(p){var code=p.textContent.replace(/^\n+|\s+$/g,'');p.replaceWith(codeBlock(code,true))});
 if('IntersectionObserver' in window&&subs.length){var links={};side.querySelectorAll('.d-sub a').forEach(function(a){links[a.dataset.for]=a});var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){Object.values(links).forEach(function(a){a.classList.remove('on')});if(links[e.target.id])links[e.target.id].classList.add('on')}})},{rootMargin:'0px 0px -70% 0px'});subs.forEach(function(s){io.observe(s)})}}
window.DOCS={NS:NS,hl:hl,esc:esc,el:el,copy:copy,codeBlock:codeBlock,example:example,init:init};
})();
