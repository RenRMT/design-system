import React from 'react';
export function PostList({posts=[],emptyText='No posts yet.',onOpen}){
  if(!posts.length) return <p style={{color:'var(--muted)',margin:0}}>{emptyText}</p>;
  return <ul style={{listStyle:'none',margin:0,padding:0,maxWidth:'var(--measure)'}}>
    {posts.map((p,i)=><li key={i} style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) auto',gap:'2px 16px',padding:'14px 0',borderBottom:'1px solid var(--line)'}}>
      <a href={p.href||'#'} onClick={onOpen?e=>{e.preventDefault();onOpen(p,i);}:undefined} style={{fontWeight:600,textDecoration:'none'}}
        onMouseEnter={e=>e.currentTarget.style.textDecoration='underline'} onMouseLeave={e=>e.currentTarget.style.textDecoration='none'}>{p.title}</a>
      <time style={{font:'12px/1.9 var(--font-mono)',color:'var(--muted)',whiteSpace:'nowrap'}}>{p.date}</time>
      {p.description&&<p style={{gridColumn:'1 / -1',margin:0,fontSize:14,color:'var(--muted)'}}>{p.description}</p>}
    </li>)}
  </ul>;
}
