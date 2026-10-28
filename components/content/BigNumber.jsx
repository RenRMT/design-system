import React from 'react';
export function BigNumber({label,value,context,trend,accent='brand'}){
  const arrow=trend==='up'?'▲':trend==='down'?'▼':null;
  return <div style={{display:'inline-flex',flexDirection:'column',gap:4,minWidth:208,padding:'16px 20px',background:'var(--surface)',border:'1px solid var(--line)',borderTop:'4px solid '+(accent==='accent'?'var(--accent)':'var(--link)'),borderRadius:'var(--radius)',verticalAlign:'top'}}>
    <span style={{fontSize:14,color:'var(--muted)'}}>{label}</span>
    <span style={{fontSize:'var(--fs-ban)',fontWeight:700,lineHeight:1.1,color:'var(--heading)',fontVariantNumeric:'tabular-nums',letterSpacing:'-0.02em'}}>{value}</span>
    {context&&<span style={{fontSize:14,color:'var(--ink)'}}>{arrow&&<span aria-hidden="true" style={{fontSize:11,marginRight:4,color:trend==='up'?'var(--cherry-6)':'var(--teal-6)'}}>{arrow}</span>}{context}</span>}
  </div>;
}
