function NotFound({go}){
  const {Tide,Eyebrow,Button}=window.RENDataDesignSystem_372f57;
  return <section style={{maxWidth:720}}>
    <div style={{marginBottom:32}}><Tide/></div>
    <Eyebrow>404 · Page not found</Eyebrow>
    <h1 style={{marginTop:10}}>This page drifted out with the tide.</h1>
    <p className="lead" style={{marginBottom:32}}>The link may be old, or the page has moved. It might wash up somewhere below.</p>
    <div style={{display:'flex',flexWrap:'wrap',gap:12}}><Button onClick={()=>go('home')}>Back home</Button>{['work','play','blog','about'].map(p=><Button key={p} variant="outline" onClick={()=>go(p)}>{p[0].toUpperCase()+p.slice(1)}</Button>)}</div>
  </section>;
}
window.NotFound=NotFound;