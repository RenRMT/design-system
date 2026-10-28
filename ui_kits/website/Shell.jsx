function Shell({page,go,theme,setTheme,children}){
  const {Sidebar}=window.RENDataDesignSystem_372f57;
  const [narrow,setNarrow]=React.useState(window.innerWidth<860);
  React.useEffect(()=>{const f=()=>setNarrow(window.innerWidth<860);window.addEventListener('resize',f);return()=>window.removeEventListener('resize',f)},[]);
  const items=[{id:'home',label:'Home'},{id:'work',label:'Work'},{id:'play',label:'Play'},{id:'blog',label:'Blog'},{id:'about',label:'About'}];
  const active=page==='post'?'blog':page;
  const props={name:'REN Data',tagline:'Carrying aid data from messy source to actionable insight.',avatar:'../../assets/img/avatar.png',items,active,onNavigate:go,
    social:[{label:'GitHub',href:'https://github.com/RenRMT'},{label:'RSS',href:'#'},{label:'LinkedIn',href:'https://www.linkedin.com/in/renzeterpstra/'}],theme,onToggleTheme:()=>setTheme(theme==='dark'?'light':'dark')};
  return <div style={{display:narrow?'block':'flex',minHeight:'100vh'}}>
    <Sidebar {...props} compact={narrow}/>
    <main style={{padding:narrow?'40px 20px 72px':'var(--main-pad)',maxWidth:'var(--main-max)',flex:1,minWidth:0}}>{children}</main>
  </div>;
}
window.Shell=Shell;