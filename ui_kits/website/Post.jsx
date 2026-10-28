function Post({post,go}){
  const {Eyebrow,Tag,ProjectNote}=window.RENDataDesignSystem_372f57;
  const D=window.REN_DATA;
  const proj=D.projects.find(p=>p.slug===post.project);
  return <article>
    <header style={{marginBottom:40}}>
      <Eyebrow>{post.date}</Eyebrow>
      <h1 style={{marginTop:10,maxWidth:'22ch'}}>{post.title}</h1>
      {post.description&&<p className="lead">{post.description}</p>}
      {post.tags&&<p style={{display:'flex',flexWrap:'wrap',gap:'4px 14px',margin:'16px 0 0'}}>{post.tags.map(t=><Tag key={t}>{t}</Tag>)}</p>}
    </header>
    <div className="prose">
      <p>IATI's validator tells you whether a file is well-formed. It doesn't tell you whether the numbers make sense. Last month a publisher's file passed every schema check, and <mark>412 of its 1,284 transactions were duplicates</mark> from an export someone ran twice in 2023.</p>
      <p>So IATI Scout runs its own checks after the validator is done. These are the three that catch the most.</p>
      <h2>Duplicate transactions</h2>
      <p>Same activity, same date, same value, same provider. Sometimes that's real (two identical instalments), so the check flags rather than drops.</p>
      <pre><code><span className="tk">def</span> duplicates(df):{"\n"}    keys = [<span className="ts">"iati_id"</span>, <span className="ts">"date"</span>, <span className="ts">"value"</span>, <span className="ts">"provider"</span>]{"\n"}    <span className="tc"># keep="first" so the original stays unflagged</span>{"\n"}    <span className="tk">return</span> df[df.duplicated(keys, keep=<span className="ts">"first"</span>)]</code></pre>
      <h2>Budgets that end before they start</h2>
      <table><thead><tr><th>Check</th><th className="n">Files</th><th className="n">Flagged</th></tr></thead>
      <tbody><tr><td>Duplicate transactions</td><td className="n">37</td><td className="n">9</td></tr><tr><td>period-end before period-start</td><td className="n">37</td><td className="n">4</td></tr><tr><td>Unknown p-code in location</td><td className="n">37</td><td className="n">13</td></tr></tbody></table>
      <blockquote><p>The file was valid. It was also wrong, and only the person who made it could tell me why.</p></blockquote>
      <p>That last point is the one I keep coming back to. Every flag ends with an email to a person, not a fix in a script.</p>
    </div>
    {proj&&<div style={{marginTop:48}}><ProjectNote title={proj.title} summary={proj.summary} href="#"/></div>}
    <p style={{marginTop:48,fontSize:14}}><a href="#" onClick={e=>{e.preventDefault();go('blog')}}>← All posts</a></p>
  </article>;
}
window.Post=Post;