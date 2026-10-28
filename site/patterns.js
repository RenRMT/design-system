window.DOC_PATTERNS=[
{id:'section-grid',title:'Section with project grid',desc:'A noun as the heading, an "All …" link that names its destination, and cards only because projects are discrete objects. Card gap 20px, head to content 16px.',code:`
<section>
  <SectionHead title="Work" moreLabel="All work projects" moreHref="/work/" />
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
    <ProjectCard title="IATI quality checker" year="2025" summary="Runs the quality checks IATI's own validator doesn't make." href="#" />
    <ProjectCard title="HDX pipeline" year="2024" summary="Pulls humanitarian datasets into one clean, versioned table." href="#" />
    <ProjectCard title="Chart styler for Excel" year="2024" summary="Applies the style guide to any chart in one click." href="#" />
  </div>
</section>`},
{id:'filtered-list',title:'Filtered list with empty state',desc:'Underline tabs above a ruled list. A filter with no matches says so plainly and offers the way back.',code:`
function Example() {
  const posts = [
    { title: "Checking IATI data before it reaches the dashboard", date: "14 October 2026", tags: ["IATI"] },
    { title: "A palette that survives colour blindness", date: "2 September 2026", tags: ["Charts"] },
    { title: "Why every chart title is a sentence", date: "18 June 2026", tags: ["Charts"] },
  ];
  const [tag, setTag] = React.useState("All");
  const shown = tag === "All" ? posts : posts.filter((p) => p.tags.includes(tag));
  return (
    <div style={{ display: "grid", gap: "var(--gap-group)" }}>
      <ChipRow label="Filter posts">
        {["All", "Charts", "IATI", "Power BI"].map((t) => (
          <Chip key={t} pressed={tag === t} onClick={() => setTag(t)}>{t}</Chip>
        ))}
      </ChipRow>
      {shown.length ? (
        <PostList posts={shown} />
      ) : (
        <EmptyState action={<Button variant="quiet" size="sm" onClick={() => setTag("All")}>Show all posts</Button>}>
          No posts tagged {tag} yet.
        </EmptyState>
      )}
    </div>
  );
}`},
{id:'key-figures',title:'Key figures',desc:'One number per card, with units, period and a perspective line. Teal top rule by default; coral for the one figure that needs attention.',code:`
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
  <BigNumber label="Security incidents, March 2026" value="112" context="+24% on the 12-month average" trend="up" accent="accent" />
  <BigNumber label="Organisations reporting, Q1 2026" value="38" context="−3 on Q4 2025" trend="down" />
  <BigNumber label="Activities checked" value="1,284" context="About 1 in 6 with a missing end date" />
</div>`},
{id:'guide-rule',title:'Style-guide rule',desc:'How a principle reads in the style guide: the rule as a callout, then the do and avoid lists, then the reasoning.',code:`
<div style={{ display: "grid", gap: "var(--gap-group)", maxWidth: "var(--measure)" }}>
  <Callout kind="rule">Use one colour, plus grey.</Callout>
  <RulePair
    doItems={["Teal for the series that carries the message", "Steel for everything else"]}
    avoidItems={["A different colour per bar", "Colour as decoration"]}
  />
  <Callout kind="why">Grey keeps context visible without competing with the message.</Callout>
</div>`},
{id:'post-footer',title:'Post footer',desc:'Mono metadata and legend-style tags close a post, then the box that links it to its project.',code:`
<div style={{ display: "grid", gap: "var(--gap-related)", maxWidth: "var(--measure)" }}>
  <Eyebrow>Published 14 October 2026</Eyebrow>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 14px" }}>
    <Tag>IATI</Tag>
    <Tag>Data quality</Tag>
  </div>
  <ProjectNote title="IATI quality checker" summary="Runs the quality checks IATI's own validator doesn't make." href="#" />
</div>`},
{id:'toolbar-error',title:'Toolbar with validation error',desc:'Compact selects and one primary action. When the input is wrong, the alert names the exact value.',code:`
function Example() {
  const [palette, setPalette] = React.useState("Data colours");
  return (
    <div style={{ display: "grid", gap: "var(--gap-group)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end" }}>
        <Select label="Palette" options={["Brand colours", "Data colours", "Neutral shades"]} value={palette} onChange={setPalette} />
        <Select label="Steps" options={["3", "5", "7"]} value="5" />
        <Button>Export CSS</Button>
        <Button variant="outline">Reset</Button>
      </div>
      <Alert title="Can't export this palette" items={[\`Section "Data colours": no colour called "Corall".\`]} />
    </div>
  );
}`}
];
(function(){var main=document.getElementById('list');DOC_PATTERNS.forEach(function(p){var s=DOCS.el('section','d-sec');s.id=p.id;s.dataset.nav=p.title;s.innerHTML='<h2>'+DOCS.esc(p.title)+'</h2><p class="d-desc">'+DOCS.esc(p.desc)+'</p>';s.appendChild(DOCS.example({code:p.code,layout:'block'}));main.appendChild(s)})})();
