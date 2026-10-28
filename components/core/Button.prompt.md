Rectangular (0 radius) action. Use `primary` (coral) for the single main action on a view, `outline` (teal outline, never filled) for siblings, `quiet` for low-priority actions that should read as text.

```jsx
<Button href="/work/">Work</Button>
<Button variant="outline" href="/play/">Play</Button>
<Button variant="quiet" onClick={copy}>Copy hex codes</Button>
<Button busy>Checking 1,284 activities</Button>
```

- Never two primaries side by side. The home hero has one coral button followed by outlines.
- `busy` appends a mono ellipsis and disables; label says what is happening, not "Loading".
- `size="sm"` for toolbars and table rows.
