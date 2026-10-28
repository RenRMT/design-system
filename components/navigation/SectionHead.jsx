import React from 'react';
export function SectionHead({title,moreLabel,moreHref='#',onMore,level=2}){
  const H='h'+level;
  return <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:16,marginBottom:16,flexWrap:'wrap'}}>
    <H style={{margin:0}}>{title}</H>
    {moreLabel&&<a href={moreHref} onClick={onMore?e=>{e.preventDefault();onMore();}:undefined} style={{fontSize:14}}>{moreLabel}</a>}
  </div>;
}
