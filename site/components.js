window.DOC_COMPONENTS=[
{name:'Button',group:'Core',file:'core/Button',examples:[
{title:'Variants',code:`
<Button href="/about/">Get in touch</Button>
<Button variant="outline">All work projects</Button>
<Button variant="quiet">Copy hex codes</Button>`},
{title:'Size and state',code:`
<Button busy>Checking 1,284 activities</Button>
<Button disabled>Export CSS</Button>
<Button size="sm">Copy</Button>
<Button size="sm" variant="outline">Reset</Button>`}]},
{name:'Tag',group:'Core',file:'core/Tag',examples:[
{title:'Tones',code:`
<Tag>Python</Tag>
<Tag>IATI</Tag>
<Tag tone="strong">Featured</Tag>
<Tag tone="plain">Draft</Tag>`}]},
{name:'Chip',extra:['ChipRow'],group:'Core',file:'core/Chip',examples:[
{title:'Filter row',layout:'block',code:`
function Example() {
  const [active, setActive] = React.useState("All");
  const counts = { All: 7, Python: 4, "Data quality": 2, IATI: 2, "Power BI": 1 };
  return (
    <ChipRow label="Filter projects">
      {Object.entries(counts).map(([tag, n]) => (
        <Chip key={tag} count={n} pressed={active === tag} onClick={() => setActive(tag)}>
          {tag}
        </Chip>
      ))}
    </ChipRow>
  );
}`}]},
{name:'Eyebrow',group:'Core',file:'core/Eyebrow',examples:[
{title:'Plain and marked',code:`
<Eyebrow>14 October 2026</Eyebrow>
<Eyebrow mark>404 · Page not found</Eyebrow>`}]},
{name:'Sidebar',group:'Navigation',file:'navigation/Sidebar',examples:[
{title:'rendata.nl sidebar',code:`
function Example() {
  const [page, setPage] = React.useState("work");
  const [theme, setTheme] = React.useState("light");
  return (
    <div style={{ width: 272, height: 560 }}>
      <Sidebar
        name="Renze Terpstra"
        tagline="I build tools that make aid data work."
        avatar="../assets/img/avatar.png"
        items={[
          { id: "home", label: "Home" },
          { id: "work", label: "Work" },
          { id: "play", label: "Play" },
          { id: "blog", label: "Blog" },
          { id: "about", label: "About" },
        ]}
        active={page}
        onNavigate={setPage}
        social={[{ label: "GitHub", href: "https://github.com/RenRMT" }]}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
}`},
{title:'Compact, under 860px',layout:'block',code:`
<Sidebar
  compact
  name="Renze Terpstra"
  items={[{ id: "home", label: "Home" }, { id: "work", label: "Work" }, { id: "blog", label: "Blog" }]}
  active="blog"
  onNavigate={() => {}}
/>`}]},
{name:'ThemeToggle',group:'Navigation',file:'navigation/ThemeToggle',examples:[
{title:'Switches this page',code:`
function Example() {
  const [theme, setTheme] = React.useState(document.documentElement.dataset.theme || "light");
  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("ren-docs-theme", next);
    setTheme(next);
  };
  return <ThemeToggle theme={theme} onToggle={toggle} showLabel />;
}`}]},
{name:'SectionHead',group:'Navigation',file:'navigation/SectionHead',examples:[
{title:'With and without link',layout:'block',code:`
<SectionHead title="Work" moreLabel="All work projects" moreHref="/work/" />
<SectionHead title="Elsewhere" level={3} />`}]},
{name:'ProjectCard',group:'Content',file:'content/ProjectCard',examples:[
{title:'Grid, no image',layout:'block',code:`
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
  <ProjectCard
    title="IATI quality checker"
    year="2025"
    summary="Runs the quality checks IATI's own validator doesn't make."
    tags={["Python", "IATI"]}
    showTags
    href="#"
  />
  <ProjectCard
    title="Chart styler for Excel"
    year="2024"
    summary="Applies the style guide to any chart in one click."
    tags={["Office JS"]}
    showTags
    href="#"
  />
</div>`}]},
{name:'PostList',group:'Content',file:'content/PostList',examples:[
{title:'Posts',layout:'block',code:`
<PostList
  posts={[
    {
      title: "Checking IATI data before it reaches the dashboard",
      date: "14 October 2026",
      description: "The checks I run on every publisher file.",
    },
    { title: "A palette that survives colour blindness", date: "2 September 2026" },
  ]}
/>`},
{title:'Empty',layout:'block',code:`
<PostList posts={[]} emptyText="No posts with this tag yet." />`}]},
{name:'BigNumber',group:'Content',file:'content/BigNumber',examples:[
{title:'Key figures',layout:'block',code:`
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
  <BigNumber
    label="Security incidents, March 2026"
    value="112"
    context="+24% on the 12-month average"
    trend="up"
  />
  <BigNumber
    label="Planned missions cancelled, Q1 2026"
    value="26%"
    context="About 1 in every 4 planned missions"
    accent="accent"
  />
</div>`}]},
{name:'Callout',group:'Content',file:'content/Callout',examples:[
{title:'Kinds',layout:'block',code:`
<Callout kind="rule">Use one colour, plus grey. The series that carries the message is Teal; everything else is Steel.</Callout>
<Callout kind="avoid">Drop shadows, 3D effects and gradients on charts.</Callout>
<Callout kind="adapt">In Excel, set the gap width to 50% before applying colours.</Callout>
<Callout kind="why">Grey keeps context visible without competing with the message.</Callout>`}]},
{name:'RulePair',group:'Content',file:'content/RulePair',examples:[
{title:'Do and avoid',layout:'block',code:`
<RulePair
  doItems={["Write the message as the title", "Label lines directly", "Start bar axes at zero"]}
  avoidItems={["Legends when direct labels fit", "Rotated axis labels"]}
/>`}]},
{name:'ProjectNote',group:'Content',file:'content/ProjectNote',examples:[
{title:'Under a post',layout:'block',code:`
<ProjectNote
  title="IATI quality checker"
  summary="Runs the quality checks IATI's own validator doesn't make."
  href="#"
/>`}]},
{name:'Swatch',group:'Content',file:'content/Swatch',examples:[
{title:'Copy and missing states',layout:'block',code:`
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12 }}>
  <Swatch name="Primary Teal" hex="#1C6758" ink="#FFFFFF" />
  <Swatch name="Coral" hex="#FF9779" ink="#191919" />
  <Swatch name="Jasmine" hex="#FFDD77" ink="#191919" />
  <Swatch name="Corall" />
</div>`}]},
{name:'Alert',group:'Feedback',file:'feedback/Alert',examples:[
{title:'Config error',layout:'block',code:`
<Alert
  title="2 problems in palette.json"
  items={[
    \`Section "Data colours": no colour called "Corall".\`,
    \`Colour "Sky": "#88CCF" is not a 6-digit hex code.\`,
  ]}
/>`}]},
{name:'EmptyState',group:'Feedback',file:'feedback/EmptyState',examples:[
{title:'No matches',layout:'block',code:`
<EmptyState action={<Button variant="quiet" size="sm">Show all projects</Button>}>
  No projects tagged R yet.
</EmptyState>`}]},
{name:'Tide',group:'Feedback',file:'feedback/Tide',examples:[
{title:'404',layout:'block',code:`
<Tide />`}]},
{name:'Select',group:'Forms',file:'forms/Select',examples:[
{title:'Toolbar select',code:`
function Example() {
  const [palette, setPalette] = React.useState("Data colours");
  const [steps, setSteps] = React.useState("5");
  return (
    <>
      <Select label="Palette" options={["Brand colours", "Data colours", "Neutral shades"]} value={palette} onChange={setPalette} />
      <Select label="Steps" options={["3", "5", "7", "9"]} value={steps} onChange={setSteps} />
    </>
  );
}`}]}
];
(function(){
var D=DOCS,main=document.getElementById('list');
function parseProps(dts,name){var i=dts.indexOf('export interface '+name+'Props');if(i<0)return null;var dm=dts.slice(0,i).match(/\/\*\*([\s\S]*?)\*\/\s*$/);var desc=dm?dm[1].split('\n').map(function(l){return l.replace(/^\s*\*\s?/,'').trim()}).filter(function(l){return l&&l[0]!=='@'}).join(' '):'';
 var s=dts.indexOf('{',i),d=0,e=s;for(;e<dts.length;e++){if(dts[e]==='{')d++;else if(dts[e]==='}'&&!--d)break}var body=dts.slice(s+1,e),re=/(?:\/\*\*\s*([\s\S]*?)\s*\*\/\s*)?(\w+)(\?)?:\s*([^;\n]+?)\s*(?:;|\n|$)/g,m,props=[];while((m=re.exec(body)))props.push({name:m[2],opt:!!m[3],type:m[4],doc:(m[1]||'').replace(/\s*\n\s*\*?\s*/g,' ')});return{desc:desc,props:props}}
function table(name,p){var h='<h3>'+(name)+' props</h3><div class="props-wrap"><table class="props"><thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead><tbody>';p.props.forEach(function(r){h+='<tr><td>'+r.name+(r.opt?'':'<span class="req">required</span>')+'</td><td class="ty">'+D.esc(r.type)+'</td><td>'+D.esc(r.doc)+'</td></tr>'});return h+'</tbody></table></div>'}
DOC_COMPONENTS.forEach(function(c){var sec=D.el('section','d-sec');sec.id=c.name.toLowerCase();sec.dataset.nav=c.name;sec.dataset.group=c.group;
 sec.innerHTML='<p class="d-eyebrow">'+c.group+'</p><h2>'+c.name+'</h2><p class="d-desc" data-desc></p><p class="d-file">components/'+c.file+'.jsx</p>';
 c.examples.forEach(function(x){sec.appendChild(D.example(x))});var pt=D.el('div');sec.appendChild(pt);main.appendChild(sec);
 fetch('../components/'+c.file+'.d.ts').then(function(r){if(!r.ok)throw new Error(r.status);return r.text()}).then(function(t){var p=parseProps(t,c.name);if(!p)return;sec.querySelector('[data-desc]').textContent=p.desc;var h=table(c.name,p);(c.extra||[]).forEach(function(n){var q=parseProps(t,n);if(q)h+=table(n,q)});pt.innerHTML=h}).catch(function(){sec.querySelector('[data-desc]').remove()});
});
})();
