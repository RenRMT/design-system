function GuideHome({go}){
  const {Button,Callout}=window.RENDataDesignSystem_372f57;
  const short=[['One visual, one message.',' Write the message as the title: "Incidents fell by a third after the ceasefire", not "Incidents per month".'],['Put what, where and when in the subtitle:',' units, categories, period and place.'],['Pick the simplest form that shows the message.',' Use a big number for one fact, a horizontal bar chart for comparing categories, and a line chart for a trend. Use a map only when location is the point.'],['Bars start at zero.',' So do areas. Lines may start elsewhere if the axis says so clearly.'],['Label directly.',' Put labels on the data, not in a legend, wherever they fit.'],['Use colour on purpose.',' Use one colour, plus grey for everything that isn\'t the story.'],['Never use colour alone.',''],['Remove what doesn\'t help.',' No borders, 3D, shadows or heavy gridlines.'],['Always name the source.',''],['Check it at the size people will see it,',' on screen and in print.']];
  return <div style={{maxWidth:760}}>
    <h1 style={{fontSize:'var(--fs-hero)',lineHeight:1.05,margin:'0 0 18px'}}>Data visualisation style guide</h1>
    <p className="lead" style={{fontSize:18,marginBottom:24}}>How I make charts and maps: the rules I follow, the colours and type I use, and why. Written so you can follow it as is, or use it as a starting point for your own guide.</p>
    <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:48}}><Button onClick={()=>go('principles')}>Start with the principles</Button><Button variant="outline" onClick={()=>go('colour')}>Open the colour picker</Button></div>
    <h2>Three kinds of notes recur throughout</h2>
    <div style={{marginBottom:48}}><Callout kind="rule">A firm rule. Break it only when you can explain why.</Callout><Callout kind="adapt">What to change, and where to start, if you are building a guide for your own brand.</Callout><Callout kind="why">A short reason, with a link to the background reading.</Callout></div>
    <h2>The short version</h2>
    <ol style={{paddingLeft:22,margin:0,display:'flex',flexDirection:'column',gap:8,maxWidth:'var(--measure)'}}>{short.map(([b,t],i)=><li key={i}><strong>{b}</strong>{t}</li>)}</ol>
  </div>;
}
window.GuideHome=GuideHome;