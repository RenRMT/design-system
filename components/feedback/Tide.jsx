import React from 'react';
export function Tide({label='high water · this page was here',code='404'}){
  return <div aria-hidden="true" style={{border:'1px solid var(--line)',borderRadius:'var(--radius)',overflow:'hidden',background:'var(--sidebar)'}}>
    <style>{'@keyframes ren-tide-drift{to{transform:translateX(var(--dx))}}@keyframes ren-tide-bob{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-7px) rotate(5deg)}}'}</style>
    <svg viewBox="0 0 800 220" preserveAspectRatio="xMidYMax slice" style={{display:'block',width:'100%',height:'clamp(160px,28vw,220px)'}}>
      <line x1="0" y1="52" x2="800" y2="52" style={{stroke:'var(--line-strong)',strokeDasharray:'4 6'}}/>
      <text x="400" y="40" textAnchor="middle" style={{font:'12px var(--font-mono)',fill:'var(--muted)'}}>{label}</text>
      <path d="M0 118 q40 -8 80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 t80 0 V220 H0 Z" style={{fill:'var(--wave-1)','--dx':'-160px',animation:'ren-tide-drift 11s linear infinite reverse'}}/>
      <g transform="translate(400 132) rotate(-14)"><g style={{animation:'ren-tide-bob 4s ease-in-out infinite'}}>
        <rect x="22" y="-8" width="24" height="16" rx="4" style={{fill:'var(--surface)',fillOpacity:.9,stroke:'var(--link)',strokeWidth:2}}/>
        <rect x="44" y="-7" width="10" height="14" rx="2" style={{fill:'var(--accent)'}}/>
        <rect x="-48" y="-19" width="76" height="38" rx="13" style={{fill:'var(--surface)',fillOpacity:.9,stroke:'var(--link)',strokeWidth:2}}/>
        <rect x="-38" y="-11" width="54" height="22" rx="3" style={{fill:'var(--bg)',stroke:'var(--line-strong)'}}/>
        <text x="-11" y="5" textAnchor="middle" style={{font:'600 13px var(--font-mono)',fill:'var(--heading)'}}>{code}</text>
        <path d="M-34 -14 h36" style={{stroke:'var(--line-strong)',strokeWidth:2,strokeLinecap:'round'}}/>
      </g></g>
      <path d="M0 140 q60 -12 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 V220 H0 Z" style={{fill:'var(--wave-2)',opacity:.9,'--dx':'-240px',animation:'ren-tide-drift 8s linear infinite'}}/>
      <path d="M0 164 q80 -10 160 0 t160 0 t160 0 t160 0 t160 0 t160 0 t160 0 V220 H0 Z" style={{fill:'var(--wave-3)','--dx':'-320px',animation:'ren-tide-drift 6s linear infinite'}}/>
    </svg>
  </div>;
}
