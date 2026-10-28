function Palette(){
  const {Swatch,Select,Button,Alert}=window.RENDataDesignSystem_372f57;
  const P=window.REN_PALETTE;const names=Object.keys(P.ramps);
  const [sc,setSc]=React.useState('Teal');const [sn,setSn]=React.useState('7');
  const [l,setL]=React.useState('Cherry');const [r,setR]=React.useState('Teal');const [dn,setDn]=React.useState('9');
  const [copied,setCopied]=React.useState(false);const [broken,setBroken]=React.useState(false);
  const pick=(ramp,n)=>{n=Math.max(1,Math.min(ramp.length,n));if(n===1)return [ramp.length-1];return Array.from({length:n},(_,k)=>Math.round(k*(ramp.length-1)/(n-1)))};
  const seq=pick(P.ramps[sc],+sn).map(i=>[sc+' '+(i+1),P.ramps[sc][i]]);
  const per=(+dn-1)/2;
  const div=[...pick(P.ramps[l],per).reverse().map(i=>[l+' '+(i+1),P.ramps[l][i]]),['Neutral','#F9F9F9'],...pick(P.ramps[r],per).map(i=>[r+' '+(i+1),P.ramps[r][i]])];
  const H2=({children})=><h2 style={{fontSize:22,margin:'40px 0 0',paddingTop:16,borderTop:'1px solid var(--line-strong)'}}>{children}</h2>;
  const Row=({list,cols})=><div style={{display:'grid',gridTemplateColumns:'repeat('+(cols||list.length)+',minmax(0,1fr))',gap:8,marginTop:12}}>{list.map(([n,h])=><Swatch key={n+h} name={n} hex={h} ink={window.inkFor(h)} height={92}/>)}</div>;
  return <div style={{maxWidth:980}}>
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'12px 24px'}}>
      <h1 style={{margin:0}}>REN colours</h1>
      <div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}><Select label="Palette" options={['REN','ROOS','Rijk']} value="REN"/>
      <Button size="sm" variant="outline" onClick={()=>{setCopied(true);setTimeout(()=>setCopied(false),1400)}}>{copied?'CSS variables copied':'Copy as CSS variables'}</Button></div>
    </div>
    <p className="lead" style={{fontSize:15,marginTop:8}}>Brand colours for text and page elements; data colours for bars, lines, areas and map fills. Click a swatch to copy its hex.</p>
    <p style={{margin:'8px 0 0',fontSize:13}}><a href="#" onClick={e=>{e.preventDefault();setBroken(!broken)}}>{broken?'Hide':'Show'} the config-error state</a></p>
    {broken&&<div style={{marginTop:16}}><Alert title="ren.json has problems:" items={['Section "Data colours" › "Contrasting order": no colour called "Corall".']}/></div>}
    <H2>Brand colours</H2><Row list={P.brand} cols={6}/>
    <h3 style={{fontSize:15,margin:'24px 0 0'}}>Neutral shades</h3><Row list={broken?[...P.neutral,['Corall',null]]:P.neutral} cols={6}/>
    <H2>Data colours · contrasting order</H2><Row list={P.contrasting}/>
    <H2>Sequential</H2>
    <div style={{display:'flex',gap:16,marginTop:12,flexWrap:'wrap'}}><Select label="Colour" options={names} value={sc} onChange={setSc}/><Select label="Steps" options={['2','3','4','5','6','7','8','9','10']} value={sn} onChange={setSn}/></div>
    <p style={{font:'600 14px var(--font-sans)',margin:'16px 0 0'}}>{sc} · {sn} steps</p><Row list={seq}/>
    <H2>Diverging</H2>
    <div style={{display:'flex',gap:16,marginTop:12,flexWrap:'wrap'}}><Select label="Colour 1" options={names} value={l} onChange={setL}/><Select label="Colour 2" options={names} value={r} onChange={setR}/><Select label="Steps" options={['3','5','7','9','11']} value={dn} onChange={setDn}/></div>
    <p style={{font:'600 14px var(--font-sans)',margin:'16px 0 0'}}>{l} – {r} · {dn} steps</p><Row list={div}/>
  </div>;
}
window.Palette=Palette;