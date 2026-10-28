import React from 'react';
export function EmptyState({children='Nothing here yet.',action}){
  return <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:12,padding:'28px 0',borderTop:'1px dashed var(--line-strong)'}}>
    <p style={{margin:0,color:'var(--muted)'}}>{children}</p>{action}
  </div>;
}
