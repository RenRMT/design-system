function Home({go,openPost}){
  const {Eyebrow,Button,SectionHead,ProjectCard,PostList}=window.RENDataDesignSystem_372f57;
  const D=window.REN_DATA;
  const feat=t=>D.projects.filter(p=>p.track===t&&p.featured).sort((a,b)=>b.started.localeCompare(a.started)).slice(0,3);
  const now=D.projects.find(p=>p.slug==='iati-scout');
  return <>
    <section style={{display:'grid',gridTemplateColumns:'minmax(0,640px) minmax(180px,220px)',gap:'32px 56px',alignItems:'end',marginBottom:72}} className="hero">
      <div style={{display:'flex',flexDirection:'column',gap:18}}>
        <Eyebrow>Hello</Eyebrow>
        <h1 style={{fontSize:'var(--fs-hero)',lineHeight:1.05,margin:0}}>I build tools that make aid data work</h1>
        <p style={{fontSize:18,margin:0,maxWidth:'52ch'}}>Data pipelines and quality checks for humanitarian and aid data, chart styling tools, and a few side projects.</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:12,marginTop:6}}><Button onClick={()=>go('work')}>Work</Button><Button variant="outline" onClick={()=>go('play')}>Play</Button></div>
      </div>
      <aside style={{borderTop:'1px solid var(--line-strong)',paddingTop:12,display:'flex',flexDirection:'column',gap:6}}>
        <Eyebrow mark>Now</Eyebrow>
        <p style={{margin:0,fontSize:14,lineHeight:1.55}}>Writing the duplicate-transaction check for <a href="#" onClick={e=>{e.preventDefault();go('work')}}>{now.title}</a>.</p>
        <span style={{font:'12px var(--font-mono)',color:'var(--muted)'}}>since Sep 2026</span>
      </aside>
    </section>
    {['work','play'].map(t=><section key={t} style={{marginBottom:56}}>
      <SectionHead title={t[0].toUpperCase()+t.slice(1)} moreLabel={'All '+t+' projects'} onMore={()=>go(t)}/>
      <div className="grid">{feat(t).map(p=><ProjectCard key={p.slug} title={p.title} year={p.started.slice(0,4)} summary={p.summary} href="#" onClick={e=>e.preventDefault()}/>)}</div>
    </section>)}
    <section><SectionHead title="Latest writing" moreLabel="All posts" onMore={()=>go('blog')}/><PostList posts={D.posts.slice(0,3)} onOpen={openPost}/></section>
  </>;
}
window.Home=Home;