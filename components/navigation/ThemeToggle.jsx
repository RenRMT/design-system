import React from 'react';
export function ThemeToggle({theme='light',onToggle,showLabel=true}){
  const dark=theme==='dark';
  return <button type="button" aria-pressed={dark} aria-label="Toggle dark mode" onClick={onToggle}
    style={{display:'flex',alignItems:'center',gap:10,background:'none',border:0,padding:0,cursor:'pointer',font:'12px var(--font-mono)',color:'var(--muted)'}}>
    <span aria-hidden="true" style={{width:36,height:20,borderRadius:3,background:dark?'var(--accent)':'var(--line)',border:'1px solid '+(dark?'var(--accent)':'var(--line-strong)'),display:'flex',alignItems:'center',padding:2,transition:'background var(--dur)'}}>
      <span style={{width:14,height:14,borderRadius:0,background:dark?'var(--accent-ink)':'#fff',transform:dark?'translateX(16px)':'none',transition:'transform var(--dur)'}}></span>
    </span>
    {showLabel&&<span>{dark?'Dark':'Light'}</span>}
  </button>;
}
