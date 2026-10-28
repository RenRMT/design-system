import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';
export function ProjectNote({title,summary,href='#'}){
  return <aside style={{maxWidth:'var(--measure)',padding:'18px 22px 20px',background:'var(--code-bg)',borderRadius:'var(--radius)',display:'flex',flexDirection:'column',gap:6}}>
    <Eyebrow mark>Project</Eyebrow>
    <a href={href} style={{fontWeight:600,fontSize:17}}>{title}</a>
    {summary&&<p style={{margin:0,fontSize:14,color:'var(--muted)'}}>{summary}</p>}
  </aside>;
}
