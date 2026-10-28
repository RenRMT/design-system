function About(){
  const {Button}=window.RENDataDesignSystem_372f57;
  return <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 200px',gap:'32px 56px',alignItems:'start'}} className="about">
    <div className="prose">
      <h1>About</h1>
      <p>I build data pipelines and quality checks for humanitarian and aid data, chart styling tools, and the occasional fun side project.</p>
      <p>I believe data-driven work should be data supported work. I help people transform messy or unclear data into actionable insights to support deliberate decision making.</p>
      <p><Button href="mailto:data@renzeterpstra.com">Let's talk</Button></p>
      <h2>Elsewhere</h2>
      <ul><li><a href="https://github.com/RenRMT">GitHub</a></li><li><a href="https://www.linkedin.com/in/renzeterpstra/">LinkedIn</a></li><li><a href="#">RSS feed</a></li></ul>
    </div>
    <figure style={{margin:'8px 0 0',display:'flex',flexDirection:'column',gap:10}}>
      <img src="../../assets/img/avatar.png" alt="Illustrated portrait of Renze" style={{width:120,height:120,borderRadius:'50%'}}/>
      <figcaption style={{font:'italic 18px var(--font-serif)',color:'var(--muted)'}}>— Renze Terpstra</figcaption>
    </figure>
  </div>;
}
window.About=About;