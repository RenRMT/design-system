import React from 'react';
const KINDS={rule:{label:'Rule',c:'var(--teal-6)'},avoid:{label:'Avoid',c:'var(--cherry-6)'},adapt:{label:'Adapt',c:'var(--jasmine-7)'},why:{label:'Why',c:'var(--baltic-6)'}};
export function Callout({kind='rule',label,children}){
  const k=KINDS[kind];
  return <div style={{display:'grid',gridTemplateColumns:'72px minmax(0,1fr)',gap:16,padding:'12px 0',borderTop:'1px solid var(--line-strong)',maxWidth:'var(--measure)'}}>
    <span style={{display:'flex',alignItems:'center',gap:8,font:'12px/1.9 var(--font-mono)',textTransform:'uppercase',letterSpacing:'var(--tracking-eyebrow)',color:'var(--ink)',alignSelf:'start'}}>
      <span aria-hidden="true" style={{width:8,height:8,borderRadius:'var(--radius-mark)',background:k.c,flex:'none'}}></span>{label||k.label}</span>
    <div style={{fontSize:15,lineHeight:1.6,color:'var(--ink)'}}>{children}</div>
  </div>;
}
