import React from 'react';
function Col({title,items,c}){
  return <div style={{minWidth:0}}>
    <p style={{display:'flex',alignItems:'center',gap:8,margin:'0 0 8px',fontWeight:600,fontSize:15}}><span aria-hidden="true" style={{width:8,height:8,borderRadius:'var(--radius-mark)',background:c}}></span>{title}</p>
    <ul style={{margin:0,paddingLeft:18,fontSize:14,lineHeight:1.55,display:'flex',flexDirection:'column',gap:6}}>{items.map((t,i)=><li key={i}>{t}</li>)}</ul>
  </div>;
}
export function RulePair({doItems=[],avoidItems=[]}){
  return <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'20px 40px',padding:'18px 0',borderTop:'1px solid var(--line-strong)',borderBottom:'1px solid var(--line)'}}>
    <Col title="Do" items={doItems} c="var(--teal-6)"/><Col title="Avoid" items={avoidItems} c="var(--cherry-6)"/>
  </div>;
}
