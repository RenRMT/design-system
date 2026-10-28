function DocsNav({page,go}){
  const items=[['home','Home'],['principles','Principles'],['planning','Planning'],['colour','Colour'],['typography','Typography'],['charts','Charts'],['maps','Maps'],['your-own','Make your own'],['background','Background']];
  const live=['home','principles','colour'];
  return <nav style={{width:248,flex:'none',background:'var(--sidebar)',borderRight:'1px solid var(--sidebar-line)',padding:'28px 0',minHeight:'100vh'}}>
    <div style={{padding:'0 24px 20px',fontFamily:'var(--font-serif)',fontWeight:600,fontSize:20,color:'var(--link)'}}>Style guide</div>
    {items.map(([id,l])=>{const a=page===id;const ok=live.includes(id);return <a key={id} href="#" onClick={e=>{e.preventDefault();ok&&go(id)}} aria-current={a?'page':undefined}
      style={{display:'flex',justifyContent:'space-between',padding:'7px 24px',fontSize:14,textDecoration:'none',color:a?'var(--link)':ok?'var(--ink)':'var(--muted)',fontWeight:a?600:400,boxShadow:a?'inset 3px 0 0 var(--accent)':'none',cursor:ok?'pointer':'default'}}>
      {l}{!ok&&<span style={{font:'11px var(--font-mono)',color:'var(--line-strong)'}}>not in kit</span>}</a>})}
  </nav>;
}
window.DocsNav=DocsNav;