import React from 'react';
import { ThemeToggle } from './ThemeToggle.jsx';
function NavLink({item,active,onNavigate}){
  const [h,setH]=React.useState(false);
  return <a href={item.href||'#'} aria-current={active?'page':undefined} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    onClick={e=>{if(onNavigate){e.preventDefault();onNavigate(item.id);}}}
    style={{display:'flex',alignItems:'center',gap:12,padding:'8px 0',color:active||h?'var(--brand)':'var(--muted)',fontWeight:active?700:400,textDecoration:'none'}}>
    <span aria-hidden="true" style={{width:8,height:8,borderRadius:'var(--radius-mark)',background:active?'var(--accent)':'transparent',flex:'none'}}></span>{item.label}
  </a>;
}
export function Sidebar({name='REN Data',tagline,avatar,items=[],active,onNavigate,social=[],theme='light',onToggleTheme,compact=false}){
  if(compact) return <aside style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'12px 24px',padding:'16px 20px',background:'var(--sidebar)',borderBottom:'1px solid var(--sidebar-line)'}}>
    <a href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(items[0]&&items[0].id);}} style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
      {avatar?<img src={avatar} alt="" style={{width:32,height:32,borderRadius:'50%'}}/>:null}
      <span style={{fontFamily:'var(--font-serif)',fontSize:19,fontWeight:600,color:'var(--brand)'}}>{name}</span></a>
    <nav aria-label="Main" style={{display:'flex',gap:16,marginLeft:'auto',fontSize:15,flexWrap:'wrap'}}>{items.map(it=><NavLink key={it.id} item={it} active={it.id===active} onNavigate={onNavigate}/>)}</nav>
    <ThemeToggle theme={theme} onToggle={onToggleTheme} showLabel={false}/>
  </aside>;
  return <aside style={{position:'sticky',top:0,height:'100vh',overflowY:'auto',background:'var(--sidebar)',borderRight:'1px solid var(--sidebar-line)',padding:'40px 32px',display:'flex',flexDirection:'column',gap:40,width:'var(--sidebar-width)',flex:'none'}}>
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      <a href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(items[0]&&items[0].id);}} style={{display:'flex',flexDirection:'column',gap:14,textDecoration:'none'}}>
        {avatar?<img src={avatar} alt="" style={{width:64,height:64,borderRadius:'50%',objectFit:'cover'}}/>:<span aria-hidden="true" style={{width:64,height:64,borderRadius:'50%',background:'repeating-linear-gradient(135deg,var(--stripe-a) 0 6px,var(--bg) 6px 12px)'}}></span>}
        <span style={{fontFamily:'var(--font-serif)',fontSize:24,fontWeight:600,letterSpacing:'-0.01em',lineHeight:1.15,color:'var(--brand)'}}>{name}</span>
      </a>
      {tagline&&<p style={{margin:0,fontSize:13,lineHeight:1.6,color:'var(--muted)'}}>{tagline}</p>}
    </div>
    <nav aria-label="Main" style={{display:'flex',flexDirection:'column',gap:2,fontSize:15}}>{items.map(it=><NavLink key={it.id} item={it} active={it.id===active} onNavigate={onNavigate}/>)}</nav>
    <div style={{marginTop:'auto',display:'flex',flexDirection:'column',gap:20}}>
      {social.length>0&&<div style={{display:'flex',flexDirection:'column',gap:6,fontSize:13}}>{social.map(s=><a key={s.label} href={s.href} style={{color:'var(--brand)',textDecorationColor:'var(--line-strong)'}}>{s.label}</a>)}</div>}
      <ThemeToggle theme={theme} onToggle={onToggleTheme}/>
    </div>
  </aside>;
}
