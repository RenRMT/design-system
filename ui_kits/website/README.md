# rendata.nl UI kit

Recreation of the personal hub site (RenRMT/RenRMT.github.io, Jekyll + Getij theme), evolved with the REN Data type system (Newsreader headings).

Screens (click through in index.html): Home · Work · Play (tag filters + empty state) · Blog (grouped by year) · Post (prose, code, table, quote, project note) · About · 404 (Tide).

Files: `Shell.jsx` (sidebar layout, collapses to top bar under 860px), one JSX per screen, `data.js` (projects copied from `_projects/*.md`; posts are sample content), `kit.css` (.prose rules from getij.css).

Differences from the live site, on purpose: serif headings; no hover lift on project cards; the post's project box drops the coral left border; a "Now" margin note on Home.
