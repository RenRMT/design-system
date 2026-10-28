function Blog({openPost}){
  const {Chip,ChipRow,PostList}=window.RENDataDesignSystem_372f57;
  const D=window.REN_DATA;
  const tags=[...new Set(D.posts.flatMap(p=>p.tags||[]))];
  const [f,setF]=React.useState('');
  const shown=D.posts.filter(p=>!f||(p.tags||[]).includes(f));
  const years=[...new Set(shown.map(p=>p.year))];
  return <>
    <header style={{marginBottom:32}}><h1>Blog</h1><p className="lead">Write-ups of projects, tools and things learned along the way.</p></header>
    <div style={{marginBottom:32}}><ChipRow>
      <Chip pressed={!f} onClick={()=>setF('')}>All</Chip>{tags.map(t=><Chip key={t} pressed={f===t} onClick={()=>setF(t)}>{t}</Chip>)}
    </ChipRow></div>
    {years.map(y=><section key={y} style={{marginBottom:40}}>
      <h2 style={{font:'600 14px var(--font-mono)',letterSpacing:'.04em',color:'var(--muted)',margin:'0 0 4px'}}>{y}</h2>
      <PostList posts={shown.filter(p=>p.year===y)} onOpen={p=>openPost(p,D.posts.indexOf(p))}/>
    </section>)}
    {!shown.length&&<p style={{color:'var(--muted)'}}>No posts with this tag.</p>}
    <p style={{font:'12px var(--font-mono)',color:'var(--muted)',marginTop:48}}>{D.sampleNote}</p>
  </>;
}
window.Blog=Blog;