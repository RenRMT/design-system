function Track({track}){
  const {Chip,ChipRow,ProjectCard,EmptyState,Button}=window.RENDataDesignSystem_372f57;
  const D=window.REN_DATA;
  const items=D.projects.filter(p=>p.track===track).sort((a,b)=>b.started.localeCompare(a.started));
  const tags=[...new Set(items.flatMap(p=>p.tags))];
  const [f,setF]=React.useState('');
  React.useEffect(()=>setF(''),[track]);
  const shown=items.filter(p=>!f||p.tags.includes(f));
  const title=track==='work'?'Work':'Play';
  const desc=track==='work'?'Professional projects — data quality, pipelines and charting tools. Newest first.':'Personal projects — games, maps and photos. Newest first.';
  return <>
    <header style={{marginBottom:32}}><h1>{title}</h1><p className="lead">{desc}</p></header>
    {tags.length>1&&<div style={{marginBottom:32}}><ChipRow>
      <Chip pressed={!f} onClick={()=>setF('')}>All</Chip>
      {tags.map(t=><Chip key={t} pressed={f===t} onClick={()=>setF(t)}>{t}</Chip>)}
    </ChipRow></div>}
    {shown.length?<div className="grid">{shown.map(p=><ProjectCard key={p.slug} dense showTags title={p.title} year={p.started.slice(0,4)} summary={p.summary} tags={p.tags} href="#" onClick={e=>e.preventDefault()}/>)}</div>
      :<EmptyState action={<Button size="sm" variant="outline" onClick={()=>setF('')}>Show all</Button>}>No projects here yet.</EmptyState>}
  </>;
}
window.Track=Track;