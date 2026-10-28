import React from 'react';
import { Tag } from '../core/Tag.jsx';
export function ProjectCard({title,year,summary,tags=[],showTags=false,image,href='#',dense=false,onClick}){
  const [h,setH]=React.useState(false);
  const [broken,setBroken]=React.useState(false);
  const ratio=dense?'16/8':'16/10';
  const hatch={display:'block',width:'100%',aspectRatio:ratio,background:'repeating-linear-gradient(135deg,var(--stripe-a) 0 10px,var(--stripe-b) 10px 20px)'};
  return <a href={href} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'flex',flexDirection:'column',background:'var(--surface)',border:'1px solid '+(h?'var(--accent)':'var(--line)'),borderRadius:'var(--radius)',overflow:'hidden',textDecoration:'none',color:'var(--ink)',transition:'border-color var(--dur-fast)',minWidth:0}}>
    {image&&!broken?<img src={image} alt="" loading="lazy" onError={()=>setBroken(true)} style={{width:'100%',aspectRatio:ratio,objectFit:'cover'}}/>:<span aria-hidden="true" style={hatch}></span>}
    <span style={{display:'flex',flexDirection:'column',gap:6,padding:'16px 18px 18px'}}>
      <span style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:8}}>
        <span style={{fontWeight:700,color:'var(--heading)',textDecoration:h?'underline':'none',textDecorationColor:'var(--accent)',textDecorationThickness:2,textUnderlineOffset:3,overflowWrap:'break-word',flex:'1 1 auto',minWidth:0}}>{title}</span>
        {year&&<span style={{font:'12px var(--font-mono)',color:'var(--muted)',flex:'none'}}>{year}</span>}
      </span>
      <span style={{fontSize:14,lineHeight:1.55,color:'var(--muted)'}}>{summary}</span>
      {showTags&&tags.length>0&&<span style={{display:'flex',flexWrap:'wrap',gap:'4px 14px',marginTop:4}}>{tags.map(t=><Tag key={t}>{t}</Tag>)}</span>}
    </span>
  </a>;
}
