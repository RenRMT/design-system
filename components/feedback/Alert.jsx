import React from 'react';
export function Alert({title,items=[],children}){
  return <div role="alert" style={{background:'var(--danger-bg)',color:'var(--danger)',padding:'12px 16px',borderRadius:'var(--radius-code)',boxShadow:'inset 0 0 0 1px var(--danger-line)',fontSize:14,maxWidth:'84ch'}}>
    {title&&<p style={{margin:'0 0 6px',fontWeight:600}}>{title}</p>}
    {children}
    {items.length>0&&<ul style={{margin:0,paddingLeft:20}}>{items.map((t,i)=><li key={i}>{t}</li>)}</ul>}
  </div>;
}
