import React from 'react';
const SIZES={md:{fontSize:15,padding:'12px 22px'},sm:{fontSize:14,padding:'8px 16px'}};
export function Button({variant='primary',size='md',href,disabled=false,busy=false,children,onClick,type='button',...rest}){
  const [h,setH]=React.useState(false);
  const base={display:'inline-flex',alignItems:'center',gap:8,fontFamily:'var(--font-sans)',fontWeight:600,lineHeight:1.2,borderRadius:'var(--radius-button)',textDecoration:'none',border:0,cursor:disabled||busy?'default':'pointer',transition:'background var(--dur-fast), box-shadow var(--dur-fast)',whiteSpace:'nowrap',...SIZES[size]};
  const v={
    primary:{background:h?'var(--accent-hover)':'var(--accent)',color:'var(--accent-ink)'},
    outline:{background:'transparent',color:'var(--link)',boxShadow:h?'inset 0 0 0 2px var(--link)':'inset 0 0 0 1.5px var(--link)'},
    quiet:{background:'transparent',color:'var(--link)',padding:SIZES[size].padding.split(' ')[0]+' 0',borderRadius:0,textDecoration:'underline',textUnderlineOffset:3,textDecorationThickness:h?2:1,textDecorationColor:h?'var(--accent)':'currentColor'}
  }[variant];
  const off=disabled?{background:variant==='primary'?'var(--ren-platinum)':'transparent',color:'var(--muted)',boxShadow:variant==='outline'?'inset 0 0 0 1.5px var(--line-strong)':'none'}:{};
  const style={...base,...v,...off};
  const ev={onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false)};
  const content=busy?<>{children}<span aria-hidden="true" style={{fontFamily:'var(--font-mono)',fontWeight:400,fontSize:'0.85em'}}>…</span></>:children;
  if(href&&!disabled) return <a href={href} style={style} {...ev} {...rest}>{content}</a>;
  return <button type={type} disabled={disabled||busy} aria-busy={busy||undefined} onClick={onClick} style={style} {...ev} {...rest}>{content}</button>;
}
