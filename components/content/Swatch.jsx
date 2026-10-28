import React from 'react';
export function Swatch({name,hex,ink,height=104,onCopy}){
  const [copied,setCopied]=React.useState(false);
  if(!hex) return <div style={{height,borderRadius:'var(--radius)',background:'repeating-linear-gradient(135deg,#FFFFFF 0 8px,var(--cherry-2) 8px 16px)',display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:8,font:'12px/1.35 var(--font-sans)',color:'var(--cherry-8)'}}><strong>{name}</strong>not defined</div>;
  const copy=async()=>{try{await navigator.clipboard.writeText(hex);}catch(e){} setCopied(true);setTimeout(()=>setCopied(false),900);onCopy&&onCopy(hex);};
  return <button type="button" title={name+' '+hex} onClick={copy}
    style={{position:'relative',height,border:0,borderRadius:'var(--radius)',background:hex,boxShadow:'var(--hairline)',display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-start',padding:8,cursor:'copy',font:'12px/1.35 var(--font-sans)',color:ink||'#191919',textAlign:'left',width:'100%'}}>
    <strong style={{fontWeight:600}}>{name}</strong><span style={{fontFamily:'var(--font-mono)',fontSize:11}}>{hex}</span>
    <span aria-live="polite" style={{position:'absolute',top:6,right:6,background:'var(--ren-black)',color:'#fff',padding:'3px 6px',borderRadius:'var(--radius-code)',font:'11px var(--font-mono)',opacity:copied?1:0,transition:'opacity var(--dur)'}}>{copied?'Copied':''}</span>
  </button>;
}
