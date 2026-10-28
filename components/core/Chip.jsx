import React from 'react';
export function Chip({pressed=false,count,children,onClick}){
  const [h,setH]=React.useState(false);
  return <button type="button" aria-pressed={pressed} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'inline-flex',alignItems:'baseline',gap:6,background:'none',border:0,borderRadius:0,padding:'8px 0 9px',font:'14px/1.3 var(--font-sans)',fontWeight:pressed?600:400,color:pressed?'var(--heading)':h?'var(--ink)':'var(--muted)',boxShadow:pressed?'inset 0 -3px 0 var(--accent)':h?'inset 0 -1px 0 var(--line-strong)':'none',cursor:'pointer',whiteSpace:'nowrap',transition:'color var(--dur-fast), box-shadow var(--dur-fast)'}}>
    {children}{count!=null&&<span style={{font:'12px var(--font-mono)',color:'var(--muted)',fontWeight:400}}>{count}</span>}
  </button>;
}
export function ChipRow({children,label='Filter by tag'}){
  return <div role="group" aria-label={label} style={{display:'flex',flexWrap:'wrap',gap:'0 20px',borderBottom:'1px solid var(--line)'}}>{children}</div>;
}
