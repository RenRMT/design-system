import React from 'react';
export function Select({label,options=[],value,onChange,id}){
  const [h,setH]=React.useState(false);
  const sid=id||('sel-'+(label||'x').toLowerCase().replace(/[^a-z0-9]+/g,'-'));
  return <span style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:14}}>
    {label&&<label htmlFor={sid} style={{font:'12px var(--font-mono)',textTransform:'uppercase',letterSpacing:'var(--tracking-eyebrow)',color:'var(--muted)'}}>{label}</label>}
    <select id={sid} value={value} onChange={e=>onChange&&onChange(e.target.value)} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{font:'14px var(--font-sans)',padding:'6px 28px 6px 10px',border:'1px solid '+(h?'var(--link)':'var(--line-strong)'),borderRadius:'var(--radius-code)',background:'var(--surface) url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2710%27 height=%276%27%3E%3Cpath d=%27M0 0l5 6 5-6z%27 fill=%27%235C6B68%27/%3E%3C/svg%3E") no-repeat right 10px center',color:'var(--ink)',appearance:'none',minWidth:100,cursor:'pointer'}}>
      {options.map(o=>{const v=typeof o==='object'?o.value:o;const l=typeof o==='object'?o.label:o;return <option key={v} value={v}>{l}</option>;})}
    </select>
  </span>;
}
