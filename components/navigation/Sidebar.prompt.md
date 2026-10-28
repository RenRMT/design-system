The left column of rendata.nl. 272px wide, sticky, sidebar tint. Collapses to a top bar with `compact`.

```jsx
<Sidebar avatar="assets/img/avatar.png" tagline="Carrying aid data from messy source to actionable insight."
  items={[{id:'home',label:'Home'},{id:'work',label:'Work'},{id:'play',label:'Play'},{id:'blog',label:'Blog'},{id:'about',label:'About'}]}
  active="work" onNavigate={setPage} social={[{label:'GitHub',href:'https://github.com/RenRMT'}]} />
```

- The active item gets the 8px coral square; no background pill.
