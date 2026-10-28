import React from 'react';
export function Eyebrow({children,mark=false,as='p'}){
  const El=as;
  return <El style={{display:'flex',alignItems:'center',gap:10,font:'13px/1.4 var(--font-mono)',textTransform:'uppercase',letterSpacing:'var(--tracking-eyebrow)',color:'var(--link)',margin:0}}>
    {mark&&<span aria-hidden="true" style={{width:8,height:8,borderRadius:'var(--radius-mark)',background:'var(--accent)',flex:'none'}}></span>}{children}
  </El>;
}
