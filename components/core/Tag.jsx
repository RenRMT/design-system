import React from 'react';
export function Tag({children,tone='default'}){
  const key={default:'var(--teal-4)',strong:'var(--brand)',plain:'var(--ren-steel)'}[tone];
  return <span style={{display:'inline-flex',alignItems:'center',gap:6,font:'12px/1.4 var(--font-mono)',color:tone==='strong'?'var(--ink)':'var(--muted)',whiteSpace:'nowrap'}}>
    <span aria-hidden="true" style={{width:6,height:6,background:key,flex:'none'}}></span>{children}
  </span>;
}
