function Principles(){
  const {Callout,RulePair,BigNumber}=window.RENDataDesignSystem_372f57;
  return <div style={{maxWidth:760}}>
    <h1>Principles</h1>
    <p className="lead" style={{marginBottom:32}}>Match the effort a visual asks of the reader to how much its message is worth.</p>
    <h2>Purpose</h2>
    <p style={{maxWidth:'var(--measure)'}}>A visual must make a point that matters to the reader and that isn't obvious without it. It should help the reader reason, interpret or decide.</p>
    <Callout kind="rule">State the main message in the title. Every other element supports that message.</Callout>
    <div style={{margin:'16px 0 40px'}}><RulePair doItems={['Write titles as a takeaway: "Access improved in all districts but one".','Highlight the key trend or contrast with an annotation.','Connect the visual to the surrounding text, so it answers the question the text raises.','Map only when the spatial pattern is the message.']} avoidItems={['Showing every metric "for completeness" and leaving no message.','Adding a chart for decoration when one sentence would do.','Mapping every region without saying why the regions matter.','Legends with more categories than there are data points.']}/></div>
    <h2>Structure</h2>
    <Callout kind="rule">Bars and areas start at zero. Keep units consistent, and base every trend line and error bar on real calculations.</Callout>
    <Callout kind="why">Whether a line chart's y-axis must start at zero is a real debate. See <a href="#">Axes and baselines</a>.</Callout>
    <h2 style={{marginTop:40}}>Big numbers</h2>
    <div style={{display:'flex',flexWrap:'wrap',gap:16}}><BigNumber label="Security incidents, March 2026" value="112" trend="up" context="+24% on the 12-month average"/><BigNumber label="Missions denied or delayed" value="27%" context="About 1 in every 4 planned missions"/><BigNumber label="Days without recorded clashes" value="23" context="Longest lull in two years"/></div>
    <p style={{font:'12px var(--font-mono)',color:'var(--muted)',marginTop:40}}>Adapted from Wilke (2019), Fundamentals of Data Visualization.</p>
  </div>;
}
window.Principles=Principles;